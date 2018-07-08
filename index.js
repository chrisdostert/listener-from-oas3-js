const Koa = require('koa')
const getKoaRouter = require('./getKoaRouter')

/**
 * Gets an httpServer requestListener function for apiDefRef
 * see https://nodejs.org/api/http.html#http_http_createserver_options_requestlistener
 * @param {string} apiDefRef
 * @param {string} handlerRoot root path handlers will be resolved from
 */
async function oas3RequestListener (
  apiDefRef,
  handlerRoot
) {
  const koaRouter = await getKoaRouter(
    apiDefRef,
    handlerRoot
  )

  const koa = new Koa()
  koa.use(koaRouter.routes())
  koa.use(koaRouter.allowedMethods())
  return koa.callback()
}

module.exports = oas3RequestListener
