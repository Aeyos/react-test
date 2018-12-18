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
    background: ${props => props.theme.inputBackground};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
      -webkit-box-shadow: 0 0 0 30px white inset;
  }

  /*Change text in autofill textbox*/
  input:-webkit-autofill {
      -webkit-text-fill-color: inherit !important;
  }
`;
