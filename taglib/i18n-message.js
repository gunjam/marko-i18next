'use strict';

module.exports = function (input, out) {
  out.write(out.stream.req.t(input.key, input['*'] || {}));
};
