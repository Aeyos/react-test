import React from 'react';

import { InputText } from '../Styled';
import { Countries } from '../../data';
import { SelectWrapper, DropdownItem, DropdownWrapper } from '../Styled';

// Pure Components only update when the values on state actually changed
// and not just when setState is called
class Select extends React.Component {
  constructor(props) {
    super(props);
    this.baseEl = React.createRef();
    this.inputEl = React.createRef();
    this.state = {
      maxHeight: 50,
      filtered: props.data.slice(0),
      active: -1,
      value: '',
      focused: false,
    };

    window.addEventListener('scroll', this._scroll);
  }

  componentDidMount() {
    this.recalculateMaxHeight();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._scroll)
  }

  recalculateMaxHeight() {
    const rect = this.baseEl.current.getBoundingClientRect();
    const diff = window.innerHeight - rect.top;
    const maxHeight = Math.min(600, Math.max(100, diff - 50));

    if (maxHeight !== this.state.maxHeight) {
      this.setState({ maxHeight });
    }
  }

  selectUp() {
    this.setState({ active: Math.max(-1, this.state.active - 1) });
  }

  selectDown() {
    this.setState({ active: Math.min(this.state.filtered.length - 1, this.state.active + 1) });
  }

  select() {
    if (this.state.active !== -1) {
      const obj = this.state.filtered[this.state.active];
      this.props.form.setFieldValue(this.props.field.name, obj);
      this.inputEl.current.blur();
      this.setState({ value: obj.label });
    }
  }

  filter(value) {
    const filtered = this.props.data.filter(e => e.label.match(new RegExp(`${value}`, 'gi')));
    this.setState({
      value,
      active: -1,
      filtered
    });
  }

  _keyDown = (evt) => {
    if (evt.key === 'ArrowUp') {
      evt.preventDefault();
      this.selectUp();
    } else if (evt.key === 'ArrowDown') {
      evt.preventDefault();
      this.selectDown();
    } else if (evt.key === 'Enter') {
      evt.preventDefault();
      this.select();
    }
  }

  _change = (evt) => {
    this.filter(evt.target.value);
  }

  _scroll = (evt) => {
    if (this.state.focused) {
      this.recalculateMaxHeight();
    }
  }

  _focus = (evt) => {
    this.recalculateMaxHeight();
    this.setState({ focused: true });
  }

  _blur = (evt) => {
    this.setState({ focused: false });
  }

  // @TODO: remove countries and use data prop
  renderItems() {
    return this.state.filtered.map((c, i) => (
      <DropdownItem key={c.label} active={this.state.active === i}>
        {c.label}
      </DropdownItem>
    ))
  }

  render() {
    console.log('render')
    return (
      <SelectWrapper ref={this.baseEl} focused={this.state.focused}>
        <InputText ref={this.inputEl} onKeyDown={this._keyDown} onChange={this._change} onFocus={this._focus} onBlur={this._blur} placeholder={this.props.placeholder} value={this.state.value} />
        <DropdownWrapper maxHeight={this.state.maxHeight}>
          {this.renderItems()}
        </DropdownWrapper>
      </SelectWrapper>
    );
  }
}

export default Select;
