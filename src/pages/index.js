import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Black + Techie = Us</h1>
    <p>
      We're HYPED to host Baltimore's first Black coding meet up! Join us every
      Thursday at The Impact Hub Baltimore (10 E North Ave) to learn and code
      with others. Whether you're an experienced coder or
      ready to take your first course, we invite you to join us.
    </p>
    <p>
      We have four recurring events:
    </p>
    <ul style={{ listStyle: 'none' }}>
      <li>Speaker Night</li>
      <li>Study Group Night</li>
      <li>Project Night </li>
      <li>Networking Night</li>
    </ul>
    <p>
      We are focused on encouraging and improving representation in tech.
      Therefore this is an inclusive space. All are welcome.
      Please respect our goals and mission, and have fun!
    </p>
    <a href="https://www.meetup.com/Baltimore-Black-Techies-Meetup/">
      <button>
        See Our Events
      </button>
    </a>
    <button>Get in Touch</button>
    <button>Find out More</button>
  </Layout>
)

export default IndexPage
