
function inPath (parameters) {
  return async (koaCtx, next) => {
    koaCtx.parameters = koaCtx.parameters || {}
    koaCtx.parameters.path = {}

    parameters.forEach(parameter => {
      koaCtx.parameters.path[parameter.name] = koaCtx.params[parameter.name]
    })

    return next()
  }
}

module.exports = inPath
