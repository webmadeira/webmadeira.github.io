import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { H2, H3 } from '../../../components/typography'

const MainSection = styled.section`
  background-color: ${({ theme }) => theme.color('primary')}
  color: ${({ theme }) => theme.color('neutral', 'bright')}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 10px 50px 10px;
  flex-direction: column;
  flex-shrink: 0;
`

const LogoSection = styled.div`
  margin-bottom: 50px;
`

const Logo = styled.img`
  width: 220px;
  
  ${({ theme }) => theme.mixins.mediaQuery.tablet`
    width: 200px;
  `};
`

const Title = styled(H2)`
  text-align: center;
  margin-bottom: 30px;
`

const DateContainer = styled(H3)`
  text-align: center;
  color: ${({ theme }) => theme.color('secondary')}
`

const Header = ({ title, date, logo }) => (
  <MainSection>
    <LogoSection>
      <Logo src={logo} alt="Web Madeira Logo" />
    </LogoSection>
    <Title>{title}</Title>
    <DateContainer>{date}</DateContainer>
  </MainSection>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
}

export default Header
