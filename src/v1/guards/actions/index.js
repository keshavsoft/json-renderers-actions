import validateActions from "./validateActions.js";

const checkActions = (actions) => {
  if (!actions) return null;
  return validateActions(actions);
};

export default checkActions;

