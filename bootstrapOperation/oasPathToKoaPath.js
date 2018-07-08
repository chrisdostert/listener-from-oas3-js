/**
 * converts open api path vars "{name}" to koa path vars ":name"
 * @param {string} oasPath open api format path
 */
function oasPathToKoaPath (oasPath) {
  return oasPath.replace(/{/g, ':').replace(/}/g, '')
}

module.exports = oasPathToKoaPath
