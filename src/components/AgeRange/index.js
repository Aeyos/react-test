import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { RangeInput, RangeWrapper, RangeLabel, RangeLabelWrapper } from '../Styled';

class AgeRange extends React.Component {
  constructor(props) {
    super(props);
  }

  static getDerivedStateFromProps(props) {
    return { max: props.labels.length - 1 }
  }

  getLabels() {
    return this.props.labels.map((label, index) => (
      <RangeLabel width={this.getLabelWidth(index)}>{label}</RangeLabel>
    ))
  }

  getLabelWidth(index) {
    const { max } = this.state;

    if (index === 0 || index === max) {
      return 100 / (max * 2);
    }

    return 100 / max;
  }

  _change = (value) => {
    console.log('value', value)
  }

  render() {
    console.log('this.props', this.props);
    return (
      <RangeWrapper>
        <RangeLabelWrapper>
          {this.getLabels()}
        </RangeLabelWrapper>
        <RangeInput {...this.props} onChange={this._change} type="range" min="0" max={this.state.max} />
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
