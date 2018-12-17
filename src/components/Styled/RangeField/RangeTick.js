import styled from 'styled-components';

export default styled.div`
  background: ${props => props.active ? props.theme.mainColor : props.theme.lighter};
  border-radius: 50%;
  border: 3px solid ${props => props.theme.lighter};
  height: 12px;
  position: absolute;
  top: -21px;
  transform: translate(-50%, -50%);
  transition: background-color ${props => props.theme.defaultTransition};
  width: 12px;

  &:before {
    content: ' ';
    background: ${props => props.theme.lighter};
    border-radius: 2px;
    display: inline-block;
    height: 15px;
    left: 4px;
    position: relative;
    top: 10px;
    width: 4px;
  }
`;
