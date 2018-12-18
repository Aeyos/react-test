import styled from 'styled-components';

export default styled.div`
  /* background-color: ${props => props.theme.backgroundColor}; */
  background: #30e8bf; /* fallback for old browsers */
  background: -webkit-linear-gradient(135deg, ${props => props.theme.color1}, ${props => props.theme.color2}); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(135deg, ${props => props.theme.color1}, ${props => props.theme.color2}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  width: 100%;
`;
