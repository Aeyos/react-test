import React from 'react';

import Box from './Box';
import CheckboxWrapper from './CheckboxWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Checkbox extends React.Component {
  state = {
    value: false
  }

  _click = (evt) => {
    this.setState({ value: !this.state.value });
  }

  render() {
    return (
      <CheckboxWrapper onClick={this._click}>
        <Box checked={this.state.value}>
          <FontAwesomeIcon icon="times" />
        </Box>
        <span>
          {this.props.label}
        </span>
      </CheckboxWrapper>
    );
  }
}

export default Checkbox;
