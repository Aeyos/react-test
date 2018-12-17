import styled from 'styled-components';

import RangeLabel from './RangeLabel';

export default styled.div`
  top: 32px;
  left: ${props => props.left}%;
  position: absolute;
  width: auto;
  white-space: nowrap;
  padding-top: 5px;

  ${RangeLabel} {
    transform: translate(-50%, 0);
  }

  &:first-child ${RangeLabel} {
    margin-left: -8px;
    transform: translate(0, 0);
  }

  &:last-child ${RangeLabel} {
    margin-left: 8px;
    transform: translate(-100%, 0);
  }

`;
