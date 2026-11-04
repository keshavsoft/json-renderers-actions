import buildRowBinding from "./buildRowBinding.js";

const getRowBinding = (handler, columns, selector) =>
  buildRowBinding(handler, columns, selector);

export default getRowBinding;

