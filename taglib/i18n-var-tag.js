'use strict';

module.exports = function (el, codegen) {
  const nameAttrValue = el.getAttributeValue('name');
  const name = nameAttrValue ? nameAttrValue.value : null;
  return codegen.builder.var(name || 'i18n', 'out.global.events.req.t');
};
