import styled from 'styled-components';

import FeedbackCard from './Feedback/FeedbackCard';
import Label from './Label';

export default styled.div`
  & ${Label} {
    width: ${props => props.labelColSize || 'auto'};
  }

  & ${FeedbackCard} {
    margin-left: ${props => props.labelColSize || '0'};
  }

  & form {
    width: 100%;
  }
`;
