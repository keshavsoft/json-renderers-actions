import hookListeners from "./attach/index.js";

const attachActions = (container, bindings) => hookListeners(container, bindings);

export default attachActions;

