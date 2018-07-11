/**
 * Parameters can be declared at path &/or operation levels.
 * operation level takes precedence.
 * this function gets them according to those rules
 * @param {object} path path object
 * @param {object} operation operation object
 *
 * @returns {[]} array of zero or more parameter objects
 */
function getParameters (
  api,
  path,
  operation
) {
  const pathParameters = api.paths[path].parameters || []
  const operationParameters = operation.parameters || []

  const parameters = [
    ...(operationParameters)
  ]

  pathParameters.forEach(pathParameter => {
    if (
      !operationParameters.some(
        operationParameter =>
          operationParameter.name === pathParameter.name &&
          operationParameter.in === pathParameter.in
      )
    ) {
      parameters.push(pathParameter)
    }
  })

  return parameters
}

module.exports = getParameters
