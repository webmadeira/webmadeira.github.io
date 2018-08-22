import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { H2, Body2 } from '../../../components/typography'
import facebookIcon from '../../../assets/img/icon/facebook.svg'
import instagramIcon from '../../../assets/img/icon/instagram.svg'
import linkedinIcon from '../../../assets/img/icon/linkedin.svg'
import twitterIcon from '../../../assets/img/icon/twitter.svg'
import youtubeIcon from '../../../assets/img/icon/youtube.svg'

const socialIcons = {
  facebook: facebookIcon,
  instagram: instagramIcon,
  linkedin: linkedinIcon,
  twitter: twitterIcon,
  youtube: youtubeIcon,
}

const Container = styled.section`
  flex-shrink: 0;
  width: 100%;
  padding: 84px 0 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  background-color: ${props => props.theme.color('neutral', 'base')};
  color: ${props => props.theme.color('neutral', 'bright')};

  ${({ theme }) => theme.mixins.mediaQuery.tablet`
    justify-content: center;
  `};
`

const WebConferencesContainer = styled.div`
  text-align: center;

  ${({ theme }) => theme.mixins.mediaQuery.tablet`
    display: none;
  `};
`

const SocialContainer = styled.div`
  text-align: left;
`

const WebConferencesList = styled.ul`
  list-style-type: none;
  text-align: left;
  margin-top: 28px;
`

const WebConferencesListItem = styled.li`
  margin-bottom: 8px;
`

const WebConferenceLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.color('neutral', 'bright')};
`

const SocialList = styled.ul`
  list-style-type: none;
  margin-top: 28px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const SocialListItem = styled.li`
  width: 34px;
  height: 34px;
  margin-right: 16px;
`

const ResponsiveH2 = styled(H2)`
  ${({ theme }) => theme.mixins.mediaQuery.tablet`
    text-align: center;
  `};
`

const PastEventItem = props => (
  <WebConferencesListItem>
    <WebConferenceLink href={props.path} target="_blank">{props.name}</WebConferenceLink>
  </WebConferencesListItem>
)

const SocialItem = props => (
  <SocialListItem>
    <a href={props.path}>
      <img src={socialIcons[props.name]} alt={props.name} />
    </a>
  </SocialListItem>
)

const getPastEventsItems = events => events.map(pastEvent => (
  <PastEventItem
    key={pastEvent.id}
    name={pastEvent.name}
    path={pastEvent.path}
  />
))

const getSocialItemsm = social => social.map(socialItem => (
  <SocialItem
    key={socialItem.id}
    name={socialItem.name}
    path={socialItem.path}
  />
))

const Footer = ({ pastEvents, social }) => {
  const pastEventsList = getPastEventsItems(pastEvents)
  const socialList = getSocialItemsm(social)

  return (
    <Container>
      <WebConferencesContainer>
        <H2>WEBMADEIRA CONFERENCES</H2>
        <WebConferencesList>
          {pastEventsList}
          <WebConferencesListItem>
            <WebConferenceLink href="/photos" target="_blank"><Body2>Photos</Body2></WebConferenceLink>
          </WebConferencesListItem>
          <WebConferencesListItem>
            <WebConferenceLink href="/videos" target="_blank"><Body2>Videos</Body2></WebConferenceLink>
          </WebConferencesListItem>
        </WebConferencesList>
      </WebConferencesContainer>
      <SocialContainer>
        <ResponsiveH2>SOCIAL</ResponsiveH2>
        <SocialList>
          {socialList}
        </SocialList>
      </SocialContainer>
    </Container>
  )
}

PastEventItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

SocialItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

Footer.propTypes = {
  pastEvents: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      path: PropTypes.string,
    })).isRequired,
  social: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      path: PropTypes.string,
    })).isRequired,
}

export default Footer
