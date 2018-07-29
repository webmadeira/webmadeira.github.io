import React from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import { withKnobs, text } from '@storybook/addon-knobs'
import Readme from './Readme.md'
import '../../App/global-styles'
import ResponsiveSquare from './ResponsiveSquare'


const style = {
  background: 'darkseagreen',
  boxShadow: '2px 2px 10px 2px',
  padding: '10px',
}

storiesOf('ResponsiveSquare', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))
  .add('default', () => (
    <ResponsiveSquare
      width={text('width', '40%')}
      minWidth={text('minWidth', '130px')}
      style={style}
    >
      <p>Resize me by resizing the window!</p>
    </ResponsiveSquare>
  ))
