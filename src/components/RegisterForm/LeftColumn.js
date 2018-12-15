import styled from 'styled-components';

export default styled.div`
  background: ${props => props.theme.darker};
  border-right: 3px solid ${props => props.theme.mainColor};
  padding: 48px;
  box-sizing: border-box;
`;
