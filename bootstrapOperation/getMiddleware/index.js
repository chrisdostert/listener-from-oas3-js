const parameters = require('./parameters')
const requestBody = require('./requestBody')
const security = require('./security')
const resolveHandler = require('./resolveHandler')

function getMiddleware ({
  api,
  handlerRoot,
  method,
  operation,
  path
}) {
  return [
    ...parameters({api, path, operation}),
    ...requestBody({operation}),
    ...security({api, operation}),
    resolveHandler({
      handlerRoot,
      method,
      path,
      operation
    })
  ]
}

module.exports = getMiddleware
