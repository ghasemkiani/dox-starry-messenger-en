import {Group} from "./components/group.js";
import {Include} from "./components/include.js";
import {Merge} from "./components/merge.js";
import {Html} from "./components/xhtml/html.js";
import {Head} from "./components/xhtml/head.js";
import {Body} from "./components/xhtml/body.js";
import {A} from "./components/xhtml/a.js";
import {Figure} from "./components/xhtml/figure.js";

const tags = {
	group: Group,
	include: Include,
	merge: Merge,
};

const tagsXHtml = {
	html: Html,
	head: Head,
	body: Body,
	a: A,
	figure: Figure,
};

export {
	tags,
	tagsXHtml,
	Group,
	Include,
	Merge,
	Html,
	Head,
	Body,
	A,
	Figure,
};
