import styled from 'styled-components';

export default styled.div`
  color: ${props => props.theme.mainColor};
  background: ${props => props.theme.inputBackground};
  width: 100%;

  & > div {
    padding: 5px 10px;
  }
`;
