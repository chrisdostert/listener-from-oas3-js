const bearer = require('./bearer')
const basic = require('./basic')

/**
 * gets middleware to handle http security scheme
 */
function http ({
  name,
  scheme
}) {
  const middleware = []
  switch (scheme) {
    case 'basic':
      middleware.push(basic(name))
      break
    case 'bearer':
      middleware.push(bearer(name))
      break
  }
  return middleware
}

module.exports = http
