import styled from 'styled-components';

export default styled.div`
  ${props => props.maxWidth ? `max-width: ${props.maxWidth}` : ''};
  align-items: center;
  background: ${props => props.theme.inputBackground};
  border-bottom: ${props => props.theme.borderSize} solid ${props => props.theme.mainColor};
  color: ${props => props.theme.mainColor};
  display: flex;
  font-size: 1em;
  margin: 2px 2px 0 0;
  padding: 5px;
  width: auto;

  & > :nth-child(2) {
    background: ${props => props.theme.inputBackground};
    border-radius: 50%;
    border: 2px solid transparent;
    color: ${props => props.theme.mainColor};
    cursor: pointer;
    height: 16px;
    margin-left: 10px;
    width: 16px;

    &:hover {
      background: ${props => props.theme.mainColor};
      color: ${props => props.theme.color1};
    }
  }
`;
