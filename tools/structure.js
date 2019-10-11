const path = require("path"),
  tpl = require("./ejs/tpl"),
  util = require("./util"),
  loadTemplate = tpl.loadTemplate,
  mkdir = util.mkdir,
  rmdir = util.rmdir,
  write = util.write,
  fs = require("fs"),
  muiPath = path.join(__dirname, "../client/node_modules/@material-ui/core/es"),
  distPath = path.join(__dirname, "../client/src/melonUi/src/original"),
  distSPath = path.join(__dirname, "../client/src/stories/components"),
  distFunPath = path.join(__dirname, "../client/src/melonUi/src/fun");

module.exports = {
  parse: () => {
    let result1 = "";
    let result2 = "";
    fs.readdirSync(muiPath).forEach(name => {
      let matcher = name.match(/(\.|-|_)/);
      if (!matcher) {
        console.log(name);
        result1 = result1 + "import " + name + " from " + '"./' + name + '"\n';
        result2 = result2 + "    " + name + ",\n";
        let coPath = path.join(distPath, name);
        let funPath = path.join(distFunPath, name);
        let sPath = path.join(distSPath, name);
        mkdir(coPath, () => {
          let cof = loadTemplate("structure/core");
          cof.locals.name = name;
          cof.locals.sname = util.lowerCaseFirst(name);
          write(path.join(coPath, "Core" + name + ".jsx"), cof.render());
          let inf = loadTemplate("structure/index");
          inf.locals.name = name;
          inf.locals.ext = "Core";
          write(path.join(coPath, "index.jsx"), inf.render());
        });
        mkdir(funPath, () => {
          let cof = loadTemplate("structure/mui");
          cof.locals.name = name;
          cof.locals.sname = util.lowerCaseFirst(name);
          write(path.join(funPath, "Mui" + name + ".jsx"), cof.render());
          let inf = loadTemplate("structure/index");
          inf.locals.ext = "Mui";
          inf.locals.name = name;
          write(path.join(funPath, "index.jsx"), inf.render());
        });
        mkdir(sPath, () => {
          let cof = loadTemplate("structure/story");
          cof.locals.name = name;
          cof.locals.sname = util.lowerCaseFirst(name);
          write(path.join(sPath, name + ".jsx"), cof.render());
          let inf = loadTemplate("structure/index");
          inf.locals.ext = "";
          inf.locals.name = name;
          write(path.join(sPath, "index.jsx"), inf.render());
        });
      }
    });
    mkdir(distSPath, () => {
      let indexPath = path.join(distSPath, "index.js");
      let result = result1 + "\n" + "export {\n" + result2 + "};\n";
      console.log(indexPath);
      console.log(result);
      // fs.readFile(indexPath, "utf8", (err, data) => {
      //   if (err) {
      //     return console.log(err);
      //   }
      fs.writeFile(indexPath, result, "utf8", err => {
        if (err) return console.log(err);
      });
    });
    // });
  },
  clear: () => {
    rmdir(distFunPath);
    rmdir(distSPath);
    rmdir(distPath);
  }
};
