jest.mock('./getKoaRouter', () => jest.fn())
const getKoaRouter = require('./getKoaRouter')

jest.mock('koa', () => jest.fn())
const koa = require('koa')

const objectUnderTest = require('./index')

describe('listenerFromOas3', () => {
  it('should call getKoaRouter w/ expected args', async () => {
    /* arrange */
    const providedApiDefRef = 'providedApiDefRef'
    const providedHandlerRoot = 'providedHandlerRoot'

    getKoaRouter.mockImplementation(() =>
      ({
        routes () {},
        allowedMethods () { }
      })
    )

    koa.mockImplementation(() => ({
      use () {},
      callback () {}
    }))

    /* act */
    await objectUnderTest(
      providedApiDefRef,
      providedHandlerRoot
    )

    /* assert */
    expect(getKoaRouter)
      .toBeCalledWith(
        providedApiDefRef,
        providedHandlerRoot
      )
  })
  it('should call koa.use w/ expected args', async () => {
    /* arrange */
    const routes = 'routes'
    const allowedMethods = 'allowedMethods'
    getKoaRouter.mockImplementation(() =>
      ({
        routes () { return routes },
        allowedMethods () { return allowedMethods }
      })
    )

    const use = jest.fn()
    koa.mockImplementation(() => ({
      use,
      callback () {}
    }))

    /* act */
    await objectUnderTest(
      'apiDefRef',
      'handlerRoot'
    )

    /* assert */
    expect(use)
      .toHaveBeenCalledWith(routes)

    expect(use)
      .toHaveBeenCalledWith(allowedMethods)
  })
})
