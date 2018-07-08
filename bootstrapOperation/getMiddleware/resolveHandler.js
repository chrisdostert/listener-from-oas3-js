const pathModule = require('path')

/**
 * resolves a handler conventionally relative to handlerRoot via path & method
 */
function resolveHandler ({ handlerRoot, method, operation, path }) {
  return require(pathModule.join(handlerRoot, path, method))
}

module.exports = resolveHandler
