import path from "node:path";

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";
import {css} from "@ghasemkiani/wdom";
const {Stylesheet} = css;

class Merge extends Component {
	render(wnode) {
		let component = this;
		let {context} = component;
		let {renderer} = context;
		let {wdocument} = renderer;
		let {root: html} = wdocument;
		let base = component.wnode.attr("base");
		let out = component.wnode.attr("out");
		context.base = path.join(context.dirname, base);
		console.log(context.base);
		html.chain(wnode => {
			wnode.cl();
			wnode.attr("xmlns:epub", "http://www.idpf.org/2007/ops");
			wnode.ch("head", wnode => {
				wnode.ch("meta[http-equiv]", wnode => {
					wnode.attr("http-equiv", "content-type");
					wnode.attr("content", "text/html; charset=UTF-8");
				});
				wnode.ch("title", wnode => {
					wnode.t("Starry Messenger");
				});
				wnode.ch("style", wnode => {
					wnode.t(new Stylesheet().chain(ss => {
						ss.rule("html", {
							// "font-family": "GBadr",
						});
						ss.rule("p.MyBase", {
							"mso-style-name": "MyBase",
							"mso-style-parent": "Normal",
							"mso-style-next": "MyBase",
							"font-family": "GBadr",
							"font-size": "1em",
							"text-align": "justify",
							"text-indent": "0",
							"line-height": "1.5em",
							"mso-line-height-rule": "exactly",
							"margin": "0",
						});
						ss.rule("p.TX, p.FMTX", {
							"mso-style-name": "MyNormal",
							"mso-style-parent": "MyBase",
							"mso-style-next": "MyNormal",
							"font-family": "GBadr",
							"font-size": "1em",
							"text-align": "justify",
							"text-indent": "24pt",
							"line-height": "1.5em",
							"mso-line-height-rule": "exactly",
							"margin": "0",
						});
						ss.rule("p.CO, p.FMCO, p.SB1", {
							"mso-style-name": "MyNormal1",
							"mso-style-parent": "MyNormal",
							"mso-style-next": "MyNormal",
							"font-family": "GBadr",
							"font-size": "1em",
							"text-align": "justify",
							"text-indent": "0",
							"line-height": "1.5em",
							"mso-line-height-rule": "exactly",
							"margin": "0",
						});
						ss.rule("p.MyHeadingBase", {
							"mso-style-name": "MyHeadingBase",
							"mso-style-parent": "MyBase",
							"mso-style-next": "MyNormal1",
							"font-family": "GJalal",
							"font-size": "1em",
							"text-align": "start",
							"text-indent": "0",
							"line-height": "auto",
							"mso-line-height-rule": "",
							"margin": "0",
							"margin-top": "9pt",
							"margin-bottom": "3pt",
						});
						ss.rule("p.MyStartText", {
							"mso-style-name": "MyStartText",
							"mso-style-parent": "MyBase",
							"mso-style-next": "MyStartText",
							"font-family": "GBadr",
							"font-size": "1em",
							"text-align": "start",
							"text-indent": "0",
							"line-height": "auto",
							"mso-line-height-rule": "",
							"margin": "0",
						});
						ss.rule("p.MyEndText", {
							"mso-style-name": "MyEndText",
							"mso-style-parent": "MyStartText",
							"mso-style-next": "MyEndText",
							"font-family": "GBadr",
							"font-size": "1em",
							"text-align": "end",
							"text-indent": "0",
							"line-height": "auto",
							"mso-line-height-rule": "",
							"margin": "0",
						});
						ss.rule("p.MyCenterText", {
							"mso-style-name": "MyCenterText",
							"mso-style-parent": "MyStartText",
							"mso-style-next": "MyCenterText",
							"font-family": "GBadr",
							"font-size": "1em",
							"text-align": "center",
							"text-indent": "0",
							"line-height": "auto",
							"mso-line-height-rule": "",
							"margin": "0",
						});
						ss.rule("p.MyDedication", {
							"mso-style-name": "MyDedication",
							"mso-style-parent": "MyCenterText",
							"mso-style-next": "MyDedication",
							"font-family": "GBadr",
							"font-size": "1em",
							"font-style": "italic",
							"text-align": "center",
							"text-indent": "0",
							"line-height": "auto",
							"mso-line-height-rule": "",
							"margin": "0",
						});
						ss.rule("p.MyFigure", {
							"mso-style-name": "MyFigure",
							"mso-style-parent": "MyCenterText",
							"mso-style-next": "MyNormal1",
							"font-family": "GBadr",
							"font-size": "1em",
							"text-align": "center",
							"text-indent": "0",
							"line-height": "auto",
							"mso-line-height-rule": "",
							"margin": "0",
						});
						ss.rule("p.EX, p.EX1, p.EX2, p.EX3, p.EX4, p.EX5, p.MyBlockQuote", {
							"mso-style-name": "MyBlockQuote",
							"mso-style-parent": "MyNormal",
							"mso-style-next": "MyBlockQuote",
							"font-family": "GBadr",
							"font-size": "1em",
							"text-align": "justify",
							"text-indent": "0",
							"line-height": "1.5em",
							"mso-line-height-rule": "exactly",
							"margin": "0",
							"margin-left": "4em",
						});
						ss.rule("h1", {
							"mso-style-name": "Heading 1",
							"mso-style-parent": "MyHeadingBase",
							"mso-style-next": "MyNormal1",
							"font-family": "GJalal",
							"font-size": "1.75em",
							"font-weight": "bold",
							"text-align": "start",
							"text-indent": "0",
							"line-height": "auto",
							"mso-line-height-rule": "",
							"margin": "0",
							"margin-top": "9pt",
							"margin-bottom": "3pt",
						});
						ss.rule("h2", {
							"mso-style-name": "Heading 2",
							"mso-style-parent": "MyHeadingBase",
							"mso-style-next": "MyNormal1",
							"font-family": "GJalal",
							"font-size": "1.25em",
							"font-weight": "bold",
							"font-style": "italic",
							"text-align": "start",
							"text-indent": "0",
							"line-height": "auto",
							"mso-line-height-rule": "",
							"margin": "0",
							"margin-top": "9pt",
							"margin-bottom": "3pt",
						});
						ss.rule("span.eSANS_Sackers_Gothic_Std_Light_11", {
							"mso-style-name": "Default Paragraph Font",
							"mso-style-parent": "",
							"font-family": "GBadr",
							"font-size": "1em",
						});
					}).string);
				});
			});
			wnode.ch("body", wnode => {
				component.renderBody(wnode);
			});
		});
		// console.log(html.string);
		renderer.sub("iter-finish", () => {
			wdocument.fn = path.join(context.dirname, out);
			console.log(`Writing output file...\n${wdocument.fn}`);
			wdocument.write();
		});
	}
}

export {Merge};
