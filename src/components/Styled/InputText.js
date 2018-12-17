import styled from 'styled-components';

export default styled.input`
  background: transparent;
  border: none;
  border-bottom: ${props => props.theme.borderSize} solid ${props => props.theme.mainColor};
  font-size: 1em;
  outline: none;
  padding: 5px;
  color: white;

  &::placeholder {
    color: white;
    opacity: 0.5;
  }

  &[data-has-content="true"],
  &:focus,
  &:active {
    /* color: ${props => props.theme.color1}; */
    /* background-color: ${props => props.theme.mainColor}; */
    color: white;
    background: rgba(255,255,255,0.1);
  }
`;
