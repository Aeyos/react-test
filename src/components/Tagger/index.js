import React from 'react';
import { isEqual } from 'lodash';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { InputText, WrapText } from '../Styled';

import TagsWrapper from './TagsWrapper';
import TagsList from './TagsList';
import TagItem from './TagItem';

class Tagger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: props.field.value || [],
      value: '',
    }
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

  addTag(string) {
    if (!~this.state.tags.indexOf(string)) {
      this.updateField([...this.state.tags, string].sort());
    }
  }

  removeTag(index) {
    const tags = this.state.tags.slice(0);
    tags.splice(index, 1);
    this.updateField(tags);
  }

  updateField(tags) {
    this.props.form.setFieldValue(this.props.field.name, tags.length ? tags : null);
    this.setState({ tags });
  }

  _change = (evt) => {
    this.setState({ value: evt.target.value });
  }

  _blur = () => {
    this.props.form.setFieldTouched(this.props.field.name);
  }

  _keyDown = (evt) => {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      if (evt.target.value.trim()) {
        this.addTag(evt.target.value.trim());
        this.setState({ value: '' });
      }
    }
  }

  renderItems() {
    return this.state.tags.map((item, i) => (
      <TagItem key={item} maxWidth="300px" title={item}>
        <WrapText>{item}</WrapText>
        <Icon onClick={() => this.removeTag(i)} icon="times" />
      </TagItem>
    ));
  }

  render() {
    return (
      <TagsWrapper>
        <InputText
          onChange={this._change}
          onKeyDown={this._keyDown}
          onBlur={this._blur}
          value={this.state.value}
          placeholder={this.props.placeholder}
        />
        {this.state.tags.length ? (
          <TagsList>
            {this.renderItems()}
          </TagsList>
        ) : null}
      </TagsWrapper>
    );
  }
}

export default Tagger;
