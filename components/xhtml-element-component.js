import {cutil} from "@ghasemkiani/base";
import {ElementComponent} from "@ghasemkiani/dox";

class XHtmlElementComponent extends ElementComponent {
	async toRender(wnode) {
		let {context} = this;
		const CLS_SANS = "eSANS_Sackers_Gothic_Std_Light_11";
		if (this.wnode.cls()[CLS_SANS]) {
			this.wnode.cls({[CLS_SANS]: false});
		}
		let wn;
		wnode.cx(this.wnode.name, this.wnode.ns, wnode => {
			let id = null;
			for(let k of this.wnode.node.getAttributeNames()) {
				if (k === "id") {
					id = this.wnode.attr(k);
					// console.log(id);
				} else {
					wnode.attr(k, this.wnode.attr(k));
				}
			}
			if (id) {
				let name = this.wnode.attr("name");
				name ||= id;
				name = context.fname + "#" + name;
				name = name.replace(/[.\-#]/g, "_");
				// console.log(name);
				wnode.ch("a", wnode => {
					wnode.attr("name", name);
				});
			}
			wn = wnode;
		});
		await this.toRenderBody(wn);
	}
}
cutil.extend(XHtmlElementComponent.prototype, {
	//
});

export {XHtmlElementComponent};
