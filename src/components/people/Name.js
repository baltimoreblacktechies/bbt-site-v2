import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Header = styled.h1`
  text-align: center;
`

const Name = ({ fullname }) => (
  <Header>{fullname}</Header>
)

Name.propTypes = {
  fullname: PropTypes.string
}

export default Name
