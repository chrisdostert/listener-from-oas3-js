const http = require('./http')
const oauth2 = require('./oauth2')

/**
 * gets middleware which handles security
 */
function getSecurityMiddleware ({
  api,
  operation
}) {
  const middleware = []

  // security can be declared at api &/or operation levels.
  const security = [...(api.security || []), ...(operation.security || [])]
  security.forEach(securityItem => {
    Object.entries(securityItem)
      .forEach(([name]) => {
        const {scheme, type} = api.components.securitySchemes[name]
        switch (type) {
          case 'http':
            middleware.push(...http({name, scheme}))
            return
          case 'oauth2':
            middleware.push(...oauth2({name}))
        }
      })
  })

  return middleware
}

module.exports = getSecurityMiddleware
