import React from 'react'
import styled from 'styled-components'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Home = () => (
  <HomeContainer>
    <Header />
    <Body />
    <Footer />
  </HomeContainer>
)

export default Home
