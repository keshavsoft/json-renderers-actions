import buildFooterBinding from "./buildFooterBinding.js";

const getFooterBinding = (handler, columns, selector) =>
  buildFooterBinding(handler, columns, selector);

export default getFooterBinding;

