import React from 'react'
import Layout from '../../components/layout'
import Name from '../../components/people/Name'
import Job from '../../components/people/Job'
import Skills from '../../components/people/Skills'

const TestUser = () => (
  <Layout>
    <Name fullname="Test User"/>
    <Job
      title={'Software Engineer'}
      company={'ACME Corp'}
    />
    <Skills skills={['Ruby', 'Python', 'Javascript']} />
  </Layout>
)

export default TestUser
