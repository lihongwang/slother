const path = require("path"),
  copy = require("copy-dir"),
  fs = require("fs"),
  del = require("del"),
  tpl = require("./ejs/tpl"),
  util = require("./util"),
  loadTemplate = tpl.loadTemplate,
  copyTemplate = tpl.copyTemplate,
  mkdir = util.mkdir,
  rmdir = util.rmdir,
  write = util.write;
let obj = {
  add: add,
  remove: remove
};

exports = module.exports = obj;

function add(name) {
  let clientPath = path.join(__dirname, "../client/src"),
    tplAutoPath = path.join(__dirname, "ejs/client/page/AUTO"),
    routePath = path.join(clientPath, "routes.js"),
    cName = name.toUpperCase(),
    autoPath = path.join(clientPath, "AUTO", cName),
    tplContentPath = path.join(__dirname, "ejs/client/page/WUI/contents"),
    wuiPath = path.join(clientPath, "WUI", cName);
    // contentsPath = path.join(wuiPath, "contents");
  console.log(cName);
  mkdir(wuiPath);
  // mkdir(contentsPath);
  mkdir(autoPath);
  copy(tplAutoPath, autoPath, {
    utimes: true, // keep add time and modify time
    mode: true, // keep file mode
    cover: true // cover file when exists, default is true
  });
  // copy(tplContentPath, contentsPath, {
  //   utimes: true, // keep add time and modify time
  //   mode: true, // keep file mode
  //   cover: true // cover file when exists, default is true
  // });
  ["action", "index", "page", "service01", "styles"].forEach(fName => {
    let f = loadTemplate(path.join("client/page/WUI", fName));
    f.locals.pageName = cName;
    let fcName;
    if (fName == "index") {
      fcName = fName;
    } else {
      fcName = cName + fName.charAt(0).toUpperCase() + fName.slice(1);
    }
    write(path.join(wuiPath, fcName + ".jsx"), f.render());
  });
  fs.readFile(routePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    let result = data.replace(/];$/, '    "' + cName + '",\n];');
    fs.writeFile(routePath, result, "utf8", err => {
      if (err) return console.log(err);
    });
  });
}

function remove(name) {
  let clientPath = path.join(__dirname, "../client/src"),
    routePath = path.join(clientPath, "routes.js"),
    cName = name.toUpperCase(),
    autoPath = path.join(clientPath, "AUTO", cName),
    wuiPath = path.join(clientPath, "WUI", cName);
  fs.readFile(routePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    let reg = new RegExp('    "' + cName + '",\n');
    let result = data.replace(reg, "");
    fs.writeFile(routePath, result, "utf8", err => {
      if (err) return console.log(err);
    });
  });
  del.sync([path.join(wuiPath + "**"), path.join(autoPath + "**")]);
}
