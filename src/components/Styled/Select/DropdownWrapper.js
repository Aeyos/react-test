import styled from 'styled-components';

export default styled.div`
  display: inline-block;
  left: 0;
  max-height: ${props => props.maxHeight}px;
  overflow: hidden;
  position: absolute;
  top: 32px;
  width: auto;
`;
