import styled from 'styled-components';

import RangeInput from './RangeInput';

export default styled.div`
  padding-top: 40px;
  position: relative;

  ${RangeInput} {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
