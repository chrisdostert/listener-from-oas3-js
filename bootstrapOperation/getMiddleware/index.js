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
