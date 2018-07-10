const koaBodyParser = require('koa-bodyparser')

/**
 * gets middleware to handle requestBody declarations
 */
function requestBody ({
  operation
}) {
  const middleware = []
  if (operation.requestBody) {
    const enabledTypes = []
    Object.entries(operation.requestBody.content)
      .forEach(([name, value]) => {
        switch (name.toLowerCase()) {
          case 'application/x-www-form-urlencoded':
            enabledTypes.push('form')
            break
          case 'application/json':
            enabledTypes.push('json')
            break
          case 'text/plain':
            enabledTypes.push('text')
            break
        }
      })
    middleware.push(
      koaBodyParser({
        enabledTypes
      })
    )
  }

  return middleware
}

module.exports = requestBody
