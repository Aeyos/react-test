import styled from 'styled-components';

export default styled.div`
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  /* margin: 0 8px; */
  height: 50px;
  position: relative;

  &[data-has-focus="true"] {
    background: ${props => props.theme.inputBackground};
  }
`;
