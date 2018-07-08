const koaBodyParser = require('koa-bodyparser')({ enableTypes: ['text'] })
const resolveHandler = require('./resolveHandler')

function getMiddleware ({
  handlerRoot,
  method,
  operation,
  path
}) {
  const middleware = [
    resolveHandler({
      handlerRoot,
      method,
      path,
      operation
    })
  ]
  if (operation.requestBody) {
    middleware.unshift(koaBodyParser)
  }

  return middleware
}

module.exports = getMiddleware
