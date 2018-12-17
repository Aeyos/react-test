import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  RangeInput,
  RangeLabel,
  RangeLabelWrapper,
  RangeTick,
  RangeTrack,
  RangeWrapper
} from '../Styled';

class AgeRange extends React.Component {
  state = { max: 1 }

  static getDerivedStateFromProps(props) {
    console.log('props', props)
    return { max: props.labels.length - 1 }
  }

  getLabels() {
    return this.props.labels.map((label, index) => (
      <RangeLabelWrapper left={this.getTickOffset(index)}>
        <RangeTick active={this.props.field.value === index} />
        <RangeLabel>{label}</RangeLabel>
      </RangeLabelWrapper>
    ))
  }

  getTickOffset(index) {
    return (100 / this.state.max) * index;
  }

  render() {
    console.log('this.props', this.props);
    return (
      <RangeWrapper>
        <RangeTrack />
        <div>{this.getLabels()}</div>
        <RangeInput {...this.props.field} type="range" min="0" max={this.state.max} />
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
