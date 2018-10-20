import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AppContainer from '../../../components/AppContainer/AppContainer'
import { H2 } from '../../../components/typography'
import Speaker from './components/Speaker/Speaker'

const Root = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
`

const Title = styled(H2)`
  text-align: left;
  color: ${props => props.theme.color('secondary', 'dark')};
  text-transform: uppercase;
  margin-bottom: 80px;
  
  ${({ theme }) => theme.mixins.mediaQuery.phone`
    margin-bottom: 40px;
  `};
`

const List = styled.ul`
  display: grid;
  grid-gap: 60px 10px;
  grid-template-columns: repeat(3, auto);

  ${({ theme }) => theme.mixins.mediaQuery.phone`
    grid-gap: 40px 10px;
    grid-template-columns: repeat(2, auto);
  `};
`

const ListItem = styled.li`
  list-style: none;
  text-align: center;
`

const renderSpeakers = speakers => speakers.map(speaker => (
  <ListItem key={speaker.id}>
    <Speaker speaker={speaker} />
  </ListItem>
))

const Speakers = ({ speakers }) => (
  <AppContainer>
    <Root>
      <Title>Speakers</Title>
      <List>
        {renderSpeakers(speakers)}
      </List>
    </Root>
  </AppContainer>
)

Speakers.propTypes = {
  speakers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default Speakers
