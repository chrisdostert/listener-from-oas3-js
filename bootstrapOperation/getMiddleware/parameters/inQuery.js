
function inQuery (parameters) {
  return async (koaCtx, next) => {
    koaCtx.parameters = koaCtx.parameters || {}
    koaCtx.parameters.query = {}

    parameters.forEach(parameter => {
      let value = koaCtx.request.query[parameter.name]

      if (
        parameter.content &&
        parameter.content['application/json'] &&
        value
      ) {
        // parse object params
        value = JSON.parse(value)
      }

      koaCtx.parameters.query[parameter.name] = value
    })

    return next()
  }
}

module.exports = inQuery
