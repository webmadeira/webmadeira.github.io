import React from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import Readme from './Readme.md'
import '../../App/global-styles'
import {
  H1,
  H2,
  H3,
  Subtitle1,
  Subtitle2,
  Body1,
  Body2,
  BUTTON,
  Caption,
} from './'

storiesOf('Typography', module)
  .addDecorator(withReadme(Readme))
  .add('H1', () => (
    <H1>H1</H1>
  ))
  .add('H2', () => (
    <H2>H2</H2>
  ))
  .add('H3', () => (
    <H3>H3</H3>
  ))
  .add('Subtitle1', () => (
    <Subtitle1>Subtitle1</Subtitle1>
  ))
  .add('Subtitle2', () => (
    <Subtitle2>Subtitle2</Subtitle2>
  ))
  .add('Body1', () => (
    <Body1>Body1</Body1>
  ))
  .add('Body2', () => (
    <Body2>Body2</Body2>
  ))
  .add('BUTTON', () => (
    <BUTTON>BUTTON</BUTTON>
  ))
  .add('Caption', () => (
    <Caption>Caption</Caption>
  ))

