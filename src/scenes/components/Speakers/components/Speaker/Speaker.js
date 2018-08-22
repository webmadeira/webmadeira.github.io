import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Subtitle1, Body2 } from '../../../../../components/typography'

const Root = styled.div`
  padding: 5px;
`

const Photo = styled.img`
  border-radius: 50%;
  border: 2px solid ${props => props.theme.color()};
  width: 150px;
  
  ${({ theme }) => theme.mixins.mediaQuery.tablet`
    width: 100px;
  `};

  ${({ theme }) => theme.mixins.mediaQuery.phone`
    width: 70px;
  `};
`

const Name = styled.div`
    padding: 10px 0;
`

const Job = styled.div`
  text-align: center;
  color: ${props => props.theme.color('neutral', 'base')};
`

const Link = styled.a`
  color: ${props => props.theme.color('neutral', 'base')};
  text-decoration: none;
`

const photoOnFocusCb = (e, speaker) => {
  e.currentTarget.src = speaker.photo
}

const photoOnBlurCb = (e, speaker) => {
  e.currentTarget.src = speaker.bwPhoto
}

const Speaker = ({ speaker }) => (
  <Root key={speaker.id}>
    {/* Prefetch the image to avoid downloading it only when "hover" occurs */}
    <link rel="prefetch" href={speaker.photo} />
    <Photo
      src={speaker.bwPhoto}
      alt="Speaker"
      onMouseOver={e => photoOnFocusCb(e, speaker)}
      onFocus={e => photoOnFocusCb(e, speaker)}
      onBlur={e => photoOnBlurCb(e, speaker)}
      onMouseOut={e => photoOnBlurCb(e, speaker)}
    />
    <Name>
      <Subtitle1>
        <Link href={speaker.personalWebsite}>{speaker.name}</Link>
      </Subtitle1>
    </Name>
    <Job>
      <Body2>
        {speaker.jobTitle},
      </Body2>
      <Body2>
          at <Link href={speaker.jobWebsite}>{speaker.company}</Link>
      </Body2>
    </Job>
  </Root>
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
