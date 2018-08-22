import { css } from 'styled-components'
import deviceWidths from './device-widths'

// iterate through the sizes and create a media template
const mediaQuery = Object.keys(deviceWidths).reduce((acc, label) => {
  const emSize = deviceWidths[label] / 16
  const accumulator = Object.assign(
    {},
    acc,
    {
      [label]: (...args) => css`
        @media (max-width: ${emSize}em) {
          ${css(...args)}
        }
      `,
    },
  )

  return accumulator
}, {})


const center = () => (`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`)

export {
  center,
  mediaQuery,
}
