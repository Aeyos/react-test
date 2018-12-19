import styled from 'styled-components';
import { Button } from '../Styled';

export default styled(Button)`
  font-size: 1em;
  font-weight: 400;
  padding: 5px 10px;
  margin-left: ${props => props.offset};
`;
