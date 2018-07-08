const http = require('./http')
const oauth2 = require('./oauth2')

/**
 * gets middleware to handle security declarations applicable to the current operation
 */
function security ({
  api,
  operation
}) {
  const middleware = []
  // api security subordinate to operation security
  const securityItems = [...(api.security || []), ...(operation.security || [])]
  securityItems.forEach(securityItem => {
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

module.exports = security
