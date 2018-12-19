import React from 'react';
import { isEqual } from 'lodash';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { InputText, WrapText } from '../Styled';

import InterestsWrapper from './InterestsWrapper';
import InterestsList from './InterestsList';
import InterestsItem from './InterestsItem';

class Interests extends React.Component {
  state = {
    interests: [],
    value: '',
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Only update on setState or form value has changed
    if (this.props.field.value === nextProps.field.value &&
      isEqual(this.state, nextState)
    ) {
      return false;
    }
    return true;
  }

  addInterest(string) {
    if (!~this.state.interests.indexOf(string)) {
      this.setState({
        interests: [...this.state.interests, string].sort(),
      });
    }
    this.updateField();
  }

  removeInterest(index) {
    const interests = this.state.interests.slice(0);
    interests.splice(index, 1);
    this.setState({ interests });
    this.updateField();
  }

  updateField() {
    this.props.form.setFieldValue(this.props.field.name, this.state.interests);
  }

  _change = (evt) => {
    this.setState({ value: evt.target.value });
  }

  _keyDown = (evt) => {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      if (evt.target.value.trim()) {
        this.addInterest(evt.target.value.trim());
        this.setState({ value: '' });
      }
    }
  }

  renderItems() {
    return this.state.interests.map((item, i) => (
      <InterestsItem key={item} maxWidth="300px" title={item}>
        <WrapText>{item}</WrapText>
        <Icon onClick={() => this.removeInterest(i)} icon="times" />
      </InterestsItem>
    ));
  }

  render() {
    console.log('int-render');
    return (
      <InterestsWrapper>
        <InputText
          onChange={this._change}
          onKeyDown={this._keyDown}
          value={this.state.value}
          placeholder={this.props.placeholder}
        />
        {this.state.interests.length ? (
          <InterestsList>
            {this.renderItems()}
          </InterestsList>
        ) : null}
      </InterestsWrapper>
    );
  }
}

export default Interests;
