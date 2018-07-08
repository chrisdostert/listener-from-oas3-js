const koaBodyParser = require('koa-bodyparser')({ enableTypes: ['text'] })

/**
 * gets middleware to handle requestBody declarations
 */
function requestBody ({
  operation
}) {
  const middleware = []
  if (operation.requestBody) {
    middleware.push(koaBodyParser)
  }

  return middleware
}

module.exports = requestBody
