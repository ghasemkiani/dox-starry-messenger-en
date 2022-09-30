import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Group extends Component {
	render(wnode) {
		let component = this;
		let {context} = component;
		component.renderBody(wnode);
	}
}

export {Group};
