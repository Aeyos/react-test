import styled from 'styled-components';

import DropdownWrapper from './DropdownWrapper';

export default styled.div`
  position: relative;
  margin-right: -100px;

  & input:focus + ${DropdownWrapper} {
    display: block;
  }
`;
