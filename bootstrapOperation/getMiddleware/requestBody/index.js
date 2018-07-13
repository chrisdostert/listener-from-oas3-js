const koaBodyParser = require('koa-bodyparser')

/**
 * gets middleware which handles requestBody
 */
function getRequestBodyMiddleware ({
  operation
}) {
  const middleware = []
  if (operation.requestBody) {
    const enableTypes = []
    Object.entries(operation.requestBody.content)
      .forEach(([name, value]) => {
        switch (name.toLowerCase()) {
          case 'application/x-www-form-urlencoded':
            enableTypes.push('form')
            break
          case 'application/json':
            enableTypes.push('json')
            break
          case 'text/plain':
            enableTypes.push('text')
            break
        }
      })
    middleware.push(
      koaBodyParser({
        enableTypes
      })
    )
  }

  return middleware
}

module.exports = getRequestBodyMiddleware
