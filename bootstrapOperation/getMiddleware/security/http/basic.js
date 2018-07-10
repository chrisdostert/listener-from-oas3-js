const basicAuth = require('basic-auth')

/**
 * Koa middleware which:
 *  - gets basic auth credentials from Authorization header
 *  - adds result to koa context
 * @param koaCtx
 * @param next
 */
function basic (name) {
  return async (koaCtx, next) => {
    const authHeader = koaCtx.request.headers.authorization
    const [scheme] = authHeader ? authHeader.split(' ') : []
    if (!scheme || scheme.toLowerCase() !== 'basic') {
      return next()
    }

    const parsedBasicAuth = basicAuth.parse(authHeader) || {}

    koaCtx.security = {
      ...koaCtx.security,
      [name]: {
        userId: parsedBasicAuth.name,
        password: parsedBasicAuth.pass
      }
    }

    return next()
  }
}

module.exports = basic
