import styled from 'styled-components';

export const Button = styled.button`
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
`;

export const Header = styled.h1`
  text-align: ${props => (props.centered ? 'center' : 'left')};
`;

export const HeaderSection = styled.section`
  text-align: center;
  padding-bottom: 1.5em;
`;
export const Section = styled.section`
  margin-top: 1em;
  font-size: 1.2em;
`;

export const ListWrapper = styled.section`
  padding-top: 1.5em;
  text-align: center;
`;

export const ListTitle = styled.h2`
  font-size: 1.2em;
`;
export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  padding-top: 0.1em;
`;
