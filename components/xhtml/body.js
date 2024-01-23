import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Body extends Component {
	async toRender(wnode) {
		let component = this;
		let {context} = component;
		component.renderBody(wnode);
		// console.log(wnode.string);
	}
}

export {Body};
