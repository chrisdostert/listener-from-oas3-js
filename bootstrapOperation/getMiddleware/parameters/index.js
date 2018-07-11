const getParameters = require('./getParameters')
const inPath = require('./inPath')
const inQuery = require('./inQuery')

/**
 * gets middleware which handles parameters
 */
function getParametersMiddleware ({
  api,
  path,
  operation
}) {
  const middleware = []

  const parameters = getParameters(
    api,
    path,
    operation
  )

  // path parameters
  middleware.push(
    inPath(
      parameters.filter(parameter => parameter.in === 'path')
    )
  )

  // query parameters
  middleware.push(
    inQuery(
      parameters.filter(parameter => parameter.in === 'query')
    )
  )

  return middleware
}

module.exports = getParametersMiddleware
