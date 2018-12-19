import styled from 'styled-components';

export default styled.div`
  display: inline-block;
  left: 0;
  max-height: ${props => props.maxHeight}px;
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  top: 30px;
  width: auto;
  z-index: 999;
`;
