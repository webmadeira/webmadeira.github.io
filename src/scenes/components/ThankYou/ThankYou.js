import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AppContainer from '../../../components/AppContainer/AppContainer'
import { H2, Body2 } from '../../../components/typography'
import Sponsors from './components/Sponsors/Sponsors'

const Root = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
`

const Title = styled(H2)`
  text-align: center;
  color: ${props => props.theme.color('brand', 'light')};
  text-transform: uppercase;
  margin-bottom: 40px;
  
  ${({ theme }) => theme.mixins.mediaQuery.phone`
    margin-bottom: 40px;
  `};
`

const Text = styled(Body2)`
  text-align: justify;

  a {
    color: ${props => props.theme.color('neutral', 'base')};
  }
`

const ThankYou = ({ sponsors, thankYouText }) => (
  <AppContainer>
    <Root>
      <Title>{'{ "Thank you" }'}</Title>
      <Text dangerouslySetInnerHTML={{ __html: thankYouText }} />
      <Sponsors sponsors={sponsors} />
    </Root>
  </AppContainer>
)

ThankYou.propTypes = {
  thankYouText: PropTypes.string.isRequired,
  sponsors: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default ThankYou
