import getRowBinding from "./row/index.js";
import getSearchBinding from "./search/index.js";
import getFooterBinding from "./footer/index.js";

const buildBindings = ({ actions = {}, options = {} } = {}) => {
  const bindings = [];

  const rowHandler = actions.rowClick || actions.buttonClick || actions.row;
  if (rowHandler) {
    const rowBinding = getRowBinding(rowHandler, options?.rowSelector);
    if (rowBinding) bindings.push(rowBinding);
  }

  const searchHandler = actions.searchKeydown || actions.search;
  if (searchHandler) {
    const searchBinding = getSearchBinding(searchHandler, options?.searchSelector);
    if (searchBinding) bindings.push(searchBinding);
  }

  const footerHandler = actions.footerClick || actions.footer;
  if (footerHandler) {
    const footerBinding = getFooterBinding(footerHandler, options?.footerSelector);
    if (footerBinding) bindings.push(footerBinding);
  }

  if (Array.isArray(actions?.custom)) {
    bindings.push(...actions.custom);
  }

  return bindings;
};

export default buildBindings;
