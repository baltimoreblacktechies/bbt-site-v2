import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Button } from './StyledComponents';

const ButtonNavSection = styled.section`
  text-align: center;
  padding-bottom: 1.5em;
  width: 100%;
`;

const ButtonNav = () => (
  <ButtonNavSection>
    <Button as="a" href="https://www.meetup.com/Baltimore-Black-Techies-Meetup">
      See Our Events
    </Button>
    <Button as="a" href="#">
      Get in Touch
    </Button>
    <Link to="/code-of-conduct">
      <Button>Code of Conduct</Button>
    </Link>
  </ButtonNavSection>
);

export default ButtonNav;
