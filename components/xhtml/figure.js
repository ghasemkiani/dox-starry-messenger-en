import path from "node:path";

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Figure extends Component {
	async toRender(wnode) {
		let component = this;
		let {context} = component;
		if (component.wnode.cls()["IMG"] || component.wnode.cls()["TIT"]) {
			wnode.ch("p.MyFigure", wnode => {
				component.renderBody(wnode);
			});
		} else if (component.wnode.cls()["table"]) {
			wnode.ch("div.table", wnode => {
				component.renderBody(wnode);
			});
		} else {
			wnode.ch("div.figure", wnode => {
				component.renderBody(wnode);
			});
		}
	}
}

export {Figure};
