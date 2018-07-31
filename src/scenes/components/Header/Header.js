import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { H3, Body2 } from '../../../components/typography'

const MainSection = styled.section`
  background-color: ${({ theme }) => theme.color('primary')}
  color: ${({ theme }) => theme.color('neutral', 'bright')}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 10px;
  flex-direction: column;
  flex-shrink: 0;
`

const LogoSection = styled.div`
  margin-bottom: 50px;
`

const Title = styled.div`
  text-align: center;
  margin-bottom: 30px;
`

const DateContainer = styled.div`
  text-align: center;
`

const Header = ({ title, date, logo }) => (
  <MainSection>
    <LogoSection>
      <img src={logo} alt="Web Madeira Logo" />
    </LogoSection>
    <Title>
      <H3>{title}</H3>
    </Title>
    <DateContainer>
      <Body2>{date}</Body2>
    </DateContainer>
  </MainSection>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
}

export default Header
