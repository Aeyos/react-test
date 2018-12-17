import styled from 'styled-components';

export default styled.div`
  float: left;
  position: relative;
  text-align: center;
  width: ${props => props.width}%;
  white-space: nowrap;

  &:before {
    content: ' ';
    border-left: 2px solid ${props => props.theme.mainColor};
    bottom: 100%;
    height: 40px;
    left: 50%;
    position: absolute;
  }

  &:nth-child(1) {
    text-align: left;

    &:before {
      left: 0;
    }
  }

  &:last-child {
    text-align: right;

    &:before {
      left: 100%;
      margin-right: 2px;
    }
  }
`;
