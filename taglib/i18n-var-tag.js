'use strict';

module.exports = function (el, codegen) {
  const builder = codegen.builder;
  const nameAttrValue = el.getAttributeValue('name');
  const name = nameAttrValue ? nameAttrValue.value : null;
  return builder.var(name || 'i18n', 'out.stream.req.t');
};
