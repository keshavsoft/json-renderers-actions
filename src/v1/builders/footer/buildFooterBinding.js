const buildFooterBinding = (handler, selector = "tfoot button") => {
  if (typeof handler !== "function") return null;

  return {
    event: "click",
    selector,
    onExtract: (matchElement, event) => {
      handler(matchElement, event);
    }
  };
};

export default buildFooterBinding;
