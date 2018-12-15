import styled from 'styled-components';

export default styled.button`
  border: 1px solid ${props => props.theme.mainColor};
  border-bottom-width: ${props => props.theme.borderSize};
  border-radius: ${props => props.theme.borderRadius};

  color: ${props => props.theme.backgroundColor};
  background-color: ${props => props.theme.mainColor};

  text-align: center;
  outline: none;
  font-size: ${props => props.size}em;
  padding: ${props => props.size * 0.2}em ${props => props.size * 0.5}em;

  transition:
    background-color ${props => props.theme.quickTransition},
    color ${props => props.theme.quickTransition};

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.helperColor2};
    color: ${props => props.theme.mainColor};
  }

  &:active {
    background-color: white;
    border-bottom-width: ${props => props.theme.borderSize};
  }
`;
