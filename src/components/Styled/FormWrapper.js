import styled from 'styled-components';

import Errors from './Errors';
import Group from './Group';
import Label from './Label';

export default styled.div`
  & ${Label} {
    width: ${props => props.labelColSize || 'auto'};
  }

  & ${Errors} {
    margin-left: ${props => props.labelColSize || '0'};
  }

  & form {
    width: 100%;
  }
`;
