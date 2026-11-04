import resolveContainer from "./resolveContainer.js";

const checkContainer = (containerOrId) => {
  if (!containerOrId) return null;
  return resolveContainer(containerOrId) || null;
};

export default checkContainer;

