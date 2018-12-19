import styled from 'styled-components';

export default styled.div`
  background: ${props => props.src ? `url(${props.src})` : props.theme.inputBackground};
  background-position: center center;
  background-size: cover;
  border: ${props => props.theme.border};
  border-radius: 50%;
  color: ${props => props.theme.mainColor};
  height: 150px;
  width: 150px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  transition: background-color ${props => props.theme.defaultTransition}, color ${props => props.theme.defaultTransition};

  &:hover {
    background-color: ${props => props.theme.mainColor};
    color: ${props => props.theme.color1};
  }
`;
