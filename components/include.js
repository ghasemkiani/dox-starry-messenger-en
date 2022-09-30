import path from "path";
import fs from "fs";

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";
import {WDocument} from "@ghasemkiani/wjsdom";

class Include extends Component {
	render(wnode) {
		let component = this;
		let {context} = component;
		let {base} = context;
		let uri = component.wnode.attr("uri");
		let fn = path.join(base, uri);
		let preamble = "";
		let wdocument = new WDocument({preamble, fn});
		try {
			wdocument.read();
			let wn = wdocument.root;
			let dirname = path.dirname(fn);
			wnode.ch("div.file", wnode => {
				let fname = path.basename(fn);
				wnode.ch("a", wnode => {
					wnode.attr("name", fname);
				});
				component.renderAgain(wn, wnode, ctx => {
					ctx.dirname = dirname;
					ctx.fname = fname;
				});
			});
		} catch(e) {
			wnode.ch("div[dir=ltr]", wnode => {
				wnode.ch("p.error", wnode => {
					wnode.t("Error occurred in including ");
					wnode.ch("code", wnode => {
						wnode.t(uri);
					});
				});
				wnode.ch("pre.error", wnode => {
					wnode.t(e);
				});
			});
			console.error(e);
		}
	}
}
cutil.extend(Include.prototype, {
	//
});

export {Include};
