const jsonSchemaRefParser = require('json-schema-ref-parser')
const KoaRouter = require('koa-router')
const koaRouter = new KoaRouter()
const bootstrapOperation = require('./bootstrapOperation')

/**
 * returns a koa router initialized via the provided open api definition
 * @param {string} apiDefRef
 * @param {string} handlerRoot root path handlers will be resolved from
 */
async function getKoaRouter (
  apiDefRef,
  handlerRoot
) {
  const { paths } = await jsonSchemaRefParser.dereference(apiDefRef)

  // iterate over defined paths
  Object.entries(paths)
    .forEach(([path, methods]) =>
      // iterate over defined methods of each path
      Object.entries(methods)
        .forEach(([method, operation]) => {
          if (method === 'parameters') {
            return
          }

          bootstrapOperation({
            handlerRoot,
            koaRouter,
            method,
            operation,
            path
          })
        })
    )

  return koaRouter
}

module.exports = getKoaRouter
