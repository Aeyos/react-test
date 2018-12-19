import styled from 'styled-components';

export default styled.div`
  background: ${props => props.theme.mainColor};
  color: ${props => props.theme.color1};
  cursor: pointer;
  font-size: 1em;
  min-width: 200px;
  padding: 5px;

  &[data-active="true"],
  &:hover {
    background: ${props => props.theme.color1};
    color: ${props => props.theme.mainColor};
  }
`;
