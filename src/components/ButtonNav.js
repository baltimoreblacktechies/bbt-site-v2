import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const ButtonNavSection = styled.section`
  text-align: center;
  padding-bottom: 1.5em;
  width: 100%;
`

const Button = styled.button`
  display: inline-block;
  background: transparent;
  border: 2px solid black;
  padding: 0.25em 1em;
  margin: 0.2em;
  text-decoration: none;
  color: black;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  :hover {
    background-color: black;
    color: white;
  }
  :visited {
    color: black;
    :hover {
      color: white;
    }
  }
`

const ButtonNav = () => (
  <ButtonNavSection>
    <Button as="a" href="https://www.meetup.com/Baltimore-Black-Techies-Meetup">
      See Our Events
    </Button>
    <Button as="a" href="#">Get in Touch</Button>
    <Link to="/code-of-conduct"><Button>Code of Conduct</Button></Link>
  </ButtonNavSection>
)

export default ButtonNav
