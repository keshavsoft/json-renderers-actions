import bindEvents from "dom-primitive-bindings";

const attachBindings = (container, bindings = []) => {
  const binder = bindEvents || globalThis.ks?.domPrimitiveBindings?.bindEvents;
  if (typeof binder === "function") {
    return binder(container, bindings);
  }

  return null;
};

export default attachBindings;
