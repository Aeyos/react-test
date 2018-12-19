import styled from 'styled-components';

export default styled.div`
  align-items: center;
  background: ${props => props.checked ? props.theme.mainColor : props.theme.inputBackground};
  border-radius: ${props => props.theme.borderRadius};
  border: ${props => props.theme};
  color: ${props => props.checked ? props.theme.color1 : 'transparent'};
  cursor: pointer;
  display: flex;
  height: 16px;
  justify-content: center;
  margin-right: 10px;
  transition: background ${props => props.theme.defaultTransition}, color ${props => props.theme.defaultTransition};
  width: 16px;
`;
