import echo from './index'

describe('Test', () => {
  it('should pass', () => {
    const message = 'hello'
    expect(echo(message)).toBe(message)
  })
})
