import styled from 'styled-components';

export default styled.div`
  background-color: white;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
  border: ${props => props.theme.border};
  height: ${props => props.size};
  width: ${props => props.size};
`;
