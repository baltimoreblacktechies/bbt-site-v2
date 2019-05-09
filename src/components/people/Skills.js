import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const List = styled.ul`
  list-style: none;
`

const ListItem = styled.li`
  margin: 0 0 0;
`

const SkillsSection = styled.section`
  padding-top: 10px;
  text-align: center;
`

const Skills = ({ skills }) => {
  const skillsList = skills.map(skill =>
    <ListItem>{skill}</ListItem>
  )

  return (
    <SkillsSection>
      <h3>Skills</h3>
      <List>
        {skillsList}
      </List>
    </SkillsSection>
  )
}

Skills.propTypes = {
  skills: PropTypes.array
}

export default Skills
