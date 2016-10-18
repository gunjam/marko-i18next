'use strict';

module.exports = function (input, out) {
  out.write(out.global.events.req.t(input.key, input['*'] || {}));
};
