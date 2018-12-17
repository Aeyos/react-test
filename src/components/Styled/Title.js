import styled from 'styled-components';

export default styled.h1`
  border-bottom: ${props => props.theme.borderSize} solid ${props => props.theme.mainColor};
  color: ${props => props.theme.mainColor};
  display: inline-block;
  font-weight: 100;
  margin: 0 -50px 30px;
  padding: 0 50px 15px;
`;
