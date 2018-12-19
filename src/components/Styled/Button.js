import styled from 'styled-components';

export default styled.button`
  border: 1px solid ${props => props.theme.mainColor};
  border-bottom-width: ${props => props.theme.borderSize};
  border-radius: ${props => props.theme.borderRadius};

  color: ${props => props.theme.color1};
  background-color: ${props => props.theme.mainColor};

  text-align: center;
  outline: none;
  font-size: ${props => props.size}em;
  padding: ${props => props.size * 0.2}em ${props => props.size * 0.5}em;

  font-size: 1em;
  font-weight: 400;
  padding: 5px 10px;

  transition:
    background-color ${props => props.theme.defaultTransition},
    color ${props => props.theme.defaultTransition};

  &:hover {
    cursor: pointer;
    background-color: transparent;
    color: ${props => props.theme.mainColor};
  }

  &:active {
    color: white;
    background-color: transparent;
    border-bottom-width: 1px;
  }
`;
