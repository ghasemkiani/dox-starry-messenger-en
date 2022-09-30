import path from "node:path";

import {cutil} from "@ghasemkiani/base";
import {Obj as Base} from "@ghasemkiani/base";
import {ElementComponent} from "@ghasemkiani/dox";
import {Renderer as RendererBase} from "@ghasemkiani/dox";
import {tags as tagsCmn} from "@ghasemkiani/dox-cmn";
import {WDocument} from "@ghasemkiani/wjsdom";
import {css} from "@ghasemkiani/wdom";
const {Stylesheet} = css;
import {tags, tagsXHtml} from "./tags.js";
import {Context} from "./context.js";
import {XHtmlElementComponent} from "./components/xhtml-element-component.js";

class Renderer extends RendererBase {
	getElementComponent(wnode) {
		return wnode.ns === "http://www.w3.org/1999/xhtml" ? XHtmlElementComponent : ElementComponent;
	}
	static renderFile(fnXml, ctx) {
		let Renderer = this;
		let renderer = new Renderer({
			wdocument: new WDocument(),
			setupContext(context) {
				cutil.extend(context, {
					dirname: path.dirname(fnXml),
				}, ctx);
			},
		});
		
		let wdocument = new WDocument({
			preamble: "",
			fn: fnXml,
		});
		wdocument.read();
		// console.log(wdocument.string);
		let wnode = wdocument.root;
		renderer.render(wnode);
		renderer.iter();
	}
}
cutil.extend(Renderer.prototype, {
	Context,
	translator: {
		"urn:dox:cmn": tagsCmn,
		"urn:dox:starry-messenger-en": tags,
		"http://www.w3.org/1999/xhtml": tagsXHtml,
	},
});

export {Renderer};
