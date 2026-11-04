import meta from "./meta.js";

const registerGlobal = (applyActions, metadata = meta) => {
  if (!applyActions || typeof globalThis === "undefined") return;

  globalThis.ks ??= {};

  globalThis.ks.jsonRenderersActions = {
    meta: metadata,
    applyActions
  };

  return globalThis.ks.jsonRenderersActions;
};

export default registerGlobal;

