import checkContainer from "./container/index.js";
import checkActions from "./actions/index.js";

const runGuards = (containerOrId, actions) => {
  const container = checkContainer(containerOrId);
  if (!container) return null;

  const validActions = checkActions(actions);
  if (!validActions) return null;

  return { container, actions: validActions };
};

export default runGuards;

