/**
 * gets middleware to handle oauth2 security scheme;
 * as the whole point of oauth2 is to obtain & use a bearer token for auth instead of primary credentials,
 * all "flows" authenticate via bearer token.
 * see https://tools.ietf.org/html/rfc6750
 */
function oauth2 ({
  name
}) {
  const middleware = async (koaCtx, next) => {
    const authHeader = koaCtx.request.headers.authorization
    const [scheme, value] = authHeader ? authHeader.split(' ') : []
    if (!scheme || scheme.toLowerCase() !== 'bearer') {
      return next()
    }

    koaCtx.security = {
      ...koaCtx.security,
      [name]: value
    }

    return next()
  }

  return [middleware]
}

module.exports = oauth2
