import styled from 'styled-components';

export default styled.h1`
  border-bottom: ${props => props.theme.borderSize} solid ${props => props.theme.mainColor};
  color: ${props => props.theme.mainColor};
  font-weight: 400;
  margin: 0 0 30px;
  padding-bottom: ${props => props.theme.borderSize};
`;
