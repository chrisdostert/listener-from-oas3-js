const oasPathToKoaPath = require('./oasPathToKoaPath')
const getMiddleware = require('./getMiddleware')

function bootstrapOperation ({
  api,
  handlerRoot,
  koaRouter,
  method,
  operation,
  path
}) {
  koaRouter[method](
    oasPathToKoaPath(path),
    ...getMiddleware({
      api,
      handlerRoot,
      koaRouter,
      method,
      operation,
      path
    })
  )
}

module.exports = bootstrapOperation
