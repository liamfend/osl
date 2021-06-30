require('../src/env')

test('.env set result', () => {
  expect(process.env.JEST_ENV).toBe('JEST')
})
