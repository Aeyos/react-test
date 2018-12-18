import React from 'react';
import PropTypes from 'prop-types';

import {
  RangeInput,
  RangeLabel,
  RangeLabelWrapper,
  RangeTick,
  RangeTrack,
  RangeWrapper
} from '../Styled';

class AgeRange extends React.Component {
  state = { max: 1, focus: false }

  static getDerivedStateFromProps(props) {
    return { max: props.labels.length - 1 }
  }

  getLabels() {
    return this.props.labels.map((label, index) => (
      <RangeLabelWrapper key={label} left={this.getTickOffset(index)}>
        <RangeTick active={this.props.field.value === index} />
        <RangeLabel>{label}</RangeLabel>
      </RangeLabelWrapper>
    ))
  }

  getTickOffset(index) {
    return (100 / this.state.max) * index;
  }

  _focus = (evt) => {
    this.setState({ focus: true });
  }

  _blur = (evt) => {
    this.setState({ focus: false });
  }

  render() {
    return (
      <RangeWrapper data-has-focus={this.state.focus}>
        <RangeTrack />
        <div>{this.getLabels()}</div>
        <RangeInput {...this.props.field} onFocus={this._focus} onBlur={this._blur} type="range" min="0" max={this.state.max} />
      </RangeWrapper>
    );
  }
}

AgeRange.propTypes = {
  labels: PropTypes.array,
};

AgeRange.defaultProps = {
  labels: ['0', '1'],
};

export default AgeRange;
