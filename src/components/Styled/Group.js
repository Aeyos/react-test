import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;

  & > div {
    display: flex;

    & > * {
      width: ${props => 100 / props.count}%;
    }
  }
`;

export default (props) => (
  <Container {...props}>
    <div>
      {props.children}
    </div>
  </Container>
);
