import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { FeedbackCard, CenterContent } from '../Styled';

class Feedback extends React.Component {
  render() {
    if (!this.props.show) return null;

    let icon = <Icon icon="check" />;
    if (this.props.type === 'Error') {
      icon = <Icon icon="times" />;
    } else if (this.props.type === 'Warning') {
      icon = <Icon icon="exclamation" />;
    }

    return (
      <FeedbackCard>
        <CenterContent y="true">
          {icon}&nbsp;{this.props.children}
        </CenterContent>
      </FeedbackCard>
    );
  }
}

Feedback.propTypes = {
  type: PropTypes.oneOf(['Error', 'Warning', 'Success']),
  show: PropTypes.bool,
}

export default Feedback;
