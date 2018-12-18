import styled from 'styled-components';

import DropdownWrapper from './DropdownWrapper';

export default styled.div`
  position: relative;
  margin-right: -100px;

  ${DropdownWrapper} {
    display: ${props => props.focused ? 'block' : 'none'};
  }
`;
