const oasPathToKoaPath = require('./oasPathToKoaPath')
const getMiddleware = require('./getMiddleware')

function bootstrapOperation ({
  handlerRoot,
  koaRouter,
  method,
  operation,
  path
}) {
  koaRouter[method](
    oasPathToKoaPath(path),
    ...getMiddleware({
      handlerRoot,
      koaRouter,
      method,
      operation,
      path
    })
  )
}

module.exports = bootstrapOperation
