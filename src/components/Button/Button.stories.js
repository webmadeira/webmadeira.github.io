import React from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import Readme from './Readme.md'
import '../../App/global-styles'
import Button from './Button'

storiesOf('Button', module)
  .addDecorator(withReadme(Readme))
  .add('Button', () => (
    <Button
      message="Simple Button"
      callback={(e) => {
        e.preventDefault()
        window.alert('clicked') /*eslint-disable-line*/ 
      }}
    />
  ))

