import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const NavBar = styled.div`
  background: #333333;
  margin-bottom: 1.45rem;
`;

const NavBarInner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem 1.0875rem;
`;

const Title = styled.h1`
  margin: 0;
  text-align: center;
`;
const Header = ({ siteTitle }) => (
  <NavBar>
    <NavBarInner>
      <Title>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          {siteTitle}
        </Link>
      </Title>
    </NavBarInner>
  </NavBar>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired
};

export default Header;
