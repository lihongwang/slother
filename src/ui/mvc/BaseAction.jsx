import { Component } from "react";
import { locache } from "../core";
class BaseAction extends Component {
  constructor(props) {
    super(props);
    this.pageId = props.pageId;
    if (locache.session.get("pageId")) locache.session.remove("pageId");
    locache.session.set("pageId", this.pageId);
  }

  callService(service, pageObj, notShowAjax) {
    return service.callService(pageObj, notShowAjax);
  }

  goTo(path) {
    window.location.href = "/crm/#" + path;
  }
}
export default BaseAction;
