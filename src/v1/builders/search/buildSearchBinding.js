const buildSearchBinding = (handler, selector = "input[type='search'], .table-search-input, thead input, input") => {
  if (typeof handler !== "function") return null;

  return {
    event: "keydown",
    selector,
    onExtract: (result, event, matchElement) => {
      if (event?.key === "Enter") {
        const query = matchElement?.value ?? event?.target?.value ?? "";
        handler(query, event, matchElement);
      }
    }
  };
};

export default buildSearchBinding;
