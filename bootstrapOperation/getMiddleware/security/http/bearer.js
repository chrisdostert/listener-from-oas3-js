/**
 * Koa middleware which:
 *  - gets bearer auth credentials from Authorization header
 *  - adds result to koa context
 * @param koaCtx
 * @param next
 */
function bearer (name) {
  return async (koaCtx, next) => {
    const authHeader = koaCtx.request.headers.authorization
    const [scheme, value] = authHeader ? authHeader.split(' ') : []
    if (!scheme || scheme.toLowerCase() !== 'bearer') {
      return next()
    }

    koaCtx.request.security = {
      ...koaCtx.request.security,
      [name]: value
    }

    return next()
  }
}

module.exports = bearer
