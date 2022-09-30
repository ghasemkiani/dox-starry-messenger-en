import {cutil} from "@ghasemkiani/base";
import {Obj as Base} from "@ghasemkiani/base";
import {Context as ContextBase} from "@ghasemkiani/dox";

class Context extends ContextBase {
	renderText(wnode, text) {
		return super.renderText(wnode, text)
	}
}
cutil.extend(Context.prototype, {
	dirname: null,
});

export {Context};
