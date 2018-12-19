import styled from 'styled-components';
import Button from './Button';

export default styled(Button)`
  border-radius: 50%;
  font-size: 1.5em;
  font-weight: 400;
  height: ${props => props.size};
  width: ${props => props.size};
`;
