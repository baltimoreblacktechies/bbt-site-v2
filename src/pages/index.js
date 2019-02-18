import React from 'react'
import ButtonNav from '../components/ButtonNav'
import styled from 'styled-components'

import Layout from '../components/layout'
import bbtechies from '../images/bbtechies.jpg'

const HeaderSection = styled.section`
  text-align: center;
  padding-bottom: 1.5em;
`
const Section = styled.section`
  margin-top: 1em;
  font-size: 1.2em;
`
const HeaderImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 600px;
`

const ListWrapper = styled.section`
  padding-top: 1.5em;
  text-align: center;
`

const ListTitle = styled.h2`
  font-size: 1.2em;
`
const List = styled.ul`
  list-style: none;
`

const ListItem = styled.li`
  padding-top: 0.1em;
`

const IndexPage = () => (
  <Layout>
    <ButtonNav />
    <HeaderSection>
      <h1>Black + Techie = Us</h1>
    </HeaderSection>
    <HeaderImage src={bbtechies} alt="BB Techies Image" />
    <Section>
      We're HYPED to host Baltimore's first Black coding meet up! Join us every
      Thursday at The Impact Hub Baltimore (10 E North Ave) to learn and code
      with others. Whether you're an experienced coder or
      ready to take your first course, we invite you to join us.
    </Section>
    <ListWrapper>
      <ListTitle>
        We have four recurring nights on a rotating schedule:
      </ListTitle>
      <List>
        <ListItem>Speaker Night</ListItem>
        <ListItem>Study Group Night</ListItem>
        <ListItem>Project Night </ListItem>
        <ListItem>Networking Night</ListItem>
      </List>
    </ListWrapper>
    <Section>
      We are focused on encouraging and improving representation in tech.
      Therefore this is an inclusive space. All are welcome.
      Please respect our goals and mission, and have fun!
    </Section>
  </Layout>
)

export default IndexPage
