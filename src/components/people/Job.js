import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Title = styled.section`
  text-align: center;
`
const Job = ({ title, company }) => (
  <Title>{title} at {company}</Title>
)

Job.propTypes = {
  title: PropTypes.string,
  company: PropTypes.string
}

export default Job
