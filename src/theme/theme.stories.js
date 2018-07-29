import React from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import styled from 'styled-components'
import Readme from './Readme.md'
import { H3, Body2, Caption } from '../components/typography'

const sharedStyle = theme => `
  color: ${theme.contrast('dark', 'secondary')};
  padding: 60px;
  text-align: center;
  flex-grow: 1;
  flex-basis: 0;
  border: 1px solid ${theme.color('neutral', 'bright')};
`

const BrandBasePalette = styled.div`
  background-color: ${props => props.theme.color('brand')};
  ${props => sharedStyle(props.theme)}
`

const PrimaryBasePalette = styled.div`
  background-color: ${props => props.theme.color()};
  ${props => sharedStyle(props.theme)}
`

const SecondaryDarkPalette = styled.div`
  background-color: ${props => props.theme.color('secondary', 'dark')};
  ${props => sharedStyle(props.theme)}
`

const SecondaryBasePalette = styled.div`
  background-color: ${props => props.theme.color('secondary', 'base')};
  ${props => sharedStyle(props.theme)}
  color: ${props => props.theme.contrast('light', 'secondary')};
`

const SecondaryLightPalette = styled.div`
  background-color: ${props => props.theme.color('secondary', 'light')};
  ${props => sharedStyle(props.theme)}
  color: ${props => props.theme.contrast('light', 'secondary')};
`

const SecondaryBrightPalette = styled.div`
  background-color: ${props => props.theme.color('secondary', 'bright')};
  ${props => sharedStyle(props.theme)}
  color: ${props => props.theme.contrast('light', 'secondary')};
`

const NeutralDarkPalette = styled.div`
  background-color: ${props => props.theme.color('neutral', 'dark')};
  ${props => sharedStyle(props.theme)}
`

const NeutralBasePalette = styled.div`
  background-color: ${props => props.theme.color('neutral')};
  ${props => sharedStyle(props.theme)}
`

const NeutralBrightPalette = styled.div`
  background-color: ${props => props.theme.color('neutral', 'bright')};
  ${props => sharedStyle(props.theme)}
  color: ${props => props.theme.contrast('light', 'secondary')};
`

const Palettes = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <BrandBasePalette>
      <H3>Brand palette</H3>
      <Caption>base</Caption>
    </BrandBasePalette>
    <PrimaryBasePalette>
      <H3>Primary palette</H3>
      <Caption>base</Caption>
    </PrimaryBasePalette>
    <SecondaryDarkPalette>
      <H3>Secondary palette</H3>
      <Caption>dark</Caption>
    </SecondaryDarkPalette>
    <SecondaryBasePalette>
      <H3>Secondary palette</H3>
      <Caption>base</Caption>
    </SecondaryBasePalette>
    <SecondaryLightPalette>
      <H3>Secondary palette</H3>
      <Caption>light</Caption>
    </SecondaryLightPalette>
    <SecondaryBrightPalette>
      <H3>Secondary palette</H3>
      <Caption>bright</Caption>
    </SecondaryBrightPalette>
    <NeutralDarkPalette>
      <H3>Neutral palette</H3>
      <Caption>dark</Caption>
    </NeutralDarkPalette>
    <NeutralBasePalette>
      <H3>Neutral palette</H3>
      <Caption>base</Caption>
    </NeutralBasePalette>
    <NeutralBrightPalette>
      <H3>Neutral palette</H3>
      <Caption>bright</Caption>
    </NeutralBrightPalette>
  </div>
)

const CheckReadme = () => (
  <Body2>Check the Readme.md for more details</Body2>
)

storiesOf('Theme', module)
  .addDecorator(withReadme(Readme))
  .add('Color palettes', () => (<Palettes />))
  .add('Typography', CheckReadme)
