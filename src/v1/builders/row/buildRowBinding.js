const buildRowBinding = (handler, selector = "tbody button, tfoot button, button, tbody tr") => {
  if (typeof handler !== "function") return null;

  return {
    event: "click",
    selector,
    onExtract: (matchElement, event) => {
      handler(matchElement, event);
    }
  };
};

export default buildRowBinding;
