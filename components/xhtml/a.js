import path from "node:path";

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class A extends Component {
	render(wnode) {
		let component = this;
		let {context} = component;
		// console.log(component.wnode.string);
		wnode.ch("a", wnode => {
			let id = component.wnode.attr("id");
			let name = component.wnode.attr("name");
			name ||= id;
			if (name) {
				name = context.fname + "#" + name;
				name = name.replace(/[.\-#]/g, "_");
				wnode.attr("name", name);
			}
			let href = component.wnode.attr("href");
			if (href) {
				if (!/:/.test(href)) {
					href = href.replace(/[.\-#]/g, "_");
					href = "#" + href;
				}
				if (!href.startsWith("#contents_xhtml_")) {
					wnode.attr("href", href);
				}
			}
			component.renderBody(wnode);
			// console.log(wnode.string);
		});
	}
}

export {A};
