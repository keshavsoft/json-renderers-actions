const validateActions = (actions) => {
  if (!actions || typeof actions !== "object") return null;

  const validEntries = Object.entries(actions).filter(
    ([, handler]) => typeof handler === "function"
  );

  return validEntries.length > 0 ? actions : null;
};

export default validateActions;

