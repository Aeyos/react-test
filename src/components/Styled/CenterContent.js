import styled from 'styled-components';

export default styled.div`
  display: flex;
  ${props => props.x && 'justify-content: center;'}
  ${props => props.y && 'align-items: center;'}
  height: 100%;
  width: 100%;
`;
