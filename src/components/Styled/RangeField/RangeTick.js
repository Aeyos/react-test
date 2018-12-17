import styled from 'styled-components';

export default styled.div`
  background: ${props => props.active ? props.theme.color1 : props.theme.mainColor};
  border-radius: 50%;
  border: ${props => props.theme.borderSize} solid ${props => props.theme.mainColor};
  height: 12px;
  position: absolute;
  top: -21px;
  transform: translate(-50%, -50%);
  transition: background-color ${props => props.theme.defaultTransition};
  width: 12px;

  &:before {
    content: ' ';
    background: ${props => props.theme.mainColor};
    border-radius: 2px;
    display: inline-block;
    height: 15px;
    left: 5px;
    position: relative;
    top: 10px;
    width: 2px;
  }
`;
