import styled from 'styled-components';

export default styled.div`
  padding: 5px;
  font-size: 1em;
  background: ${props => props.active ? props.theme.color1 : props.theme.mainColor};
  color: ${props => props.active ? props.theme.mainColor : props.theme.color1};
`;
