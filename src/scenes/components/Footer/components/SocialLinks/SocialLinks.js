import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { H3 } from '../../../../../components/typography'
import facebookIcon from '../../../../../assets/img/icon/facebook.svg'
import instagramIcon from '../../../../../assets/img/icon/instagram.svg'
import linkedinIcon from '../../../../../assets/img/icon/linkedin.svg'
import twitterIcon from '../../../../../assets/img/icon/twitter.svg'
import githubIcon from '../../../../../assets/img/icon/github.svg'

const socialIcons = {
  facebook: facebookIcon,
  instagram: instagramIcon,
  linkedin: linkedinIcon,
  twitter: twitterIcon,
  github: githubIcon,
}

const SocialList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`

const SocialListItem = styled.li`
  width: 34px;
  height: 34px;
  margin-right: 16px;
`

const renderSocialLinks = links => links.map(link => (
  <SocialListItem key={link.id}>
    <a href={link.url} rel="noopener" title={link.name}>
      <img src={socialIcons[link.name]} alt={link.name} />
    </a>
  </SocialListItem>
))

const SocialLinks = ({ links }) => (
  <div>
    <H3>SOCIAL</H3>
    <SocialList>
      {renderSocialLinks(links)}
    </SocialList>
  </div>
)

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
}

export default SocialLinks
