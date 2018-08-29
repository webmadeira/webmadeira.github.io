import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Subtitle1, Body2 } from '../../../../../components/typography'

const Photo = styled.img`
  border-radius: 50%;
  border: 2px solid ${props => props.theme.color('secondary', 'dark')};
  width: 150px;
  
  ${({ theme }) => theme.mixins.mediaQuery.tablet`
    width: 100px;
  `};

  ${({ theme }) => theme.mixins.mediaQuery.phone`
    width: 70px;
  `};
`

const Name = styled(Subtitle1)`
  padding: 10px 0;
  color: ${props => props.theme.color('neutral', 'base')};
`

const Job = styled.div`
  text-align: center;
  color: ${props => props.theme.color('neutral', 'base')};
`

const Link = styled.a`
  color: ${props => props.theme.color('neutral', 'base')};
`

const photoOnFocusCb = (e, speaker) => {
  e.currentTarget.src = speaker.photo
}

const photoOnBlurCb = (e, speaker) => {
  e.currentTarget.src = speaker.bwPhoto
}

const Speaker = ({ speaker }) => (
  <div key={speaker.id}>
    {/* Prefetch the image to avoid downloading it only when "hover" occurs */}
    <link rel="prefetch" href={speaker.photo} />

    <a href={speaker.personalWebsite} target="_blank" rel="noopener noreferrer">
      <Photo
        src={speaker.bwPhoto}
        alt="Speaker"
        onMouseOver={e => photoOnFocusCb(e, speaker)}
        onFocus={e => photoOnFocusCb(e, speaker)}
        onBlur={e => photoOnBlurCb(e, speaker)}
        onMouseOut={e => photoOnBlurCb(e, speaker)}
      />
    </a>
    <Name>{speaker.name}</Name>
    <Job>
      <Body2>
        {speaker.jobTitle},
      </Body2>
      <Body2>
          at <Link href={speaker.jobWebsite} target="_blank" rel="noopener noreferrer">{speaker.company}</Link>
      </Body2>
    </Job>
  </div>
)

Speaker.propTypes = {
  speaker: PropTypes.shape({
    id: PropTypes.number.isRequired,
    bwPhoto: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    personalWebsite: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
  }).isRequired,
}

export default Speaker
