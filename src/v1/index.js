import registerGlobal from "./register/index.js";
import runGuards from "./guards/index.js";
import buildBindings from "./builders/index.js";
import attachActions from "./listeners/index.js";

const applyActions = (containerOrId, configOrActions = {}) => {
  const actions = (configOrActions?.actions && typeof configOrActions.actions === "object")
    ? configOrActions.actions
    : configOrActions;
  const options = configOrActions?.options ?? {};
  const columns = configOrActions?.columns ?? [];

  const guarded = runGuards(containerOrId, actions);
  if (!guarded) return null;

  const { container, actions: validActions } = guarded;
  const bindings = buildBindings({ actions: validActions, columns, options });

  attachActions(container, bindings);

  return container;
};

export { applyActions };
export default applyActions;

registerGlobal(applyActions);
