import {
  color,
  contrast,
  textSetting,
  weight,
  fontFamily,
} from './'

describe('Theme util functions', () => {
  describe('color function', () => {
    const expectation = expect.stringMatching(/#\w*/)

    it('must return a valid hexadecimal code when called with no params', () => {
      expect(color()).toEqual(expectation)
    })

    it('must return a valid hexadecimal code when called with one param', () => {
      expect(color('secondary')).toEqual(expectation)
    })

    it('must return a valid hexadecimal code when called with two params', () => {
      expect(color('secondary', 'base')).toEqual(expectation)
    })
  })

  describe('contrast function', () => {
    const expectation = expect.stringMatching(/rgba?\(.*\)/)

    it('must return a valid rgb code when called with no params', () => {
      expect(contrast()).toEqual(expectation)
    })

    it('must return a valid rgb code when called with one param', () => {
      expect(contrast('dark')).toEqual(expectation)
    })

    it('must return a valid rgb code when called with two params', () => {
      expect(contrast('dark', 'secondary')).toEqual(expectation)
    })
  })

  describe('textSetting function', () => {
    it('must return an object with the text size and line height properties', () => {
      const keys = Object.keys(textSetting('xs'))
      expect(keys).toContain('fontSize')
      expect(keys).toContain('lineHeight')
    })
  })

  describe('weight function', () => {
    it('must return a number', () => {
      expect(typeof weight('regular')).toEqual('number')
    })
  })

  describe('fontFamily function', () => {
    it('must return a string', () => {
      expect(typeof fontFamily('primary')).toEqual('string')
    })
  })
})
