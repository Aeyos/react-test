import React from 'react';
import { isEqual } from 'lodash';

import {
  DropdownContent,
  DropdownItem,
  DropdownWrapper,
  HideElement,
  InputText,
  SelectWrapper,
} from '../Styled';
import { onlyLetters } from '../../utils';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.baseEl = React.createRef();
    this.inputEl = React.createRef();
    this.wrapperEl = React.createRef();
    this.itemEl = React.createRef();
    this.state = {
      maxHeight: 50,
      filtered: props.data.slice(0),
      active: -1,
      value: '',
      focused: false,
      mouseIn: false,
    };

    window.addEventListener('scroll', this._scroll);
  }

  /* LIFECYCLE FUNCTIONS */

  shouldComponentUpdate(nextProps, nextState) {
    // Only update on setState or form value has changed
    if (this.props.field.value === nextProps.field.value &&
      isEqual(this.state, nextState)
    ) {
      return false;
    }
    return true;
  }

  componentDidMount() {
    this.recalculateMaxHeight();
  }

  componentDidUpdate(prevProps) {
    if (!this.state.focused && !this.state.mouseIn && prevProps.field.value !== this.props.field.value) {
      this.setState({ value: this.props.field.value.label });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._scroll)
  }

  /* GENERAL */

  recalculateMaxHeight() {
    const rect = this.baseEl.current.getBoundingClientRect();
    const diff = window.innerHeight - rect.top;
    const maxHeight = Math.min(600, Math.max(100, diff - 50));

    if (maxHeight !== this.state.maxHeight) {
      this.setState({ maxHeight });
    }
  }

  selectUp() {
    this.updateScroll();
    this.setState({ active: Math.max(-1, this.state.active - 1) });
  }

  selectDown() {
    this.updateScroll();
    this.setState({ active: Math.min(this.state.filtered.length - 1, this.state.active + 1) });
  }

  updateScroll() {
    const itemHeight = this.itemEl.current.offsetHeight;
    this.wrapperEl.current.scrollTop = (
      ((this.state.active + 1) * itemHeight)
      -
      (this.wrapperEl.current.offsetHeight / 2)
    );
  }

  select(index) {
    this.wrapperEl.current.scrollTop = 0;

    if (index !== -1) {
      const obj = this.state.filtered[index];

      this.props.form.setFieldValue(this.props.field.name, obj);
      this.inputEl.current.blur();
      this.setState({ focused: false, mouseIn: false, value: obj.label });
    }
  }

  filter(value) {
    const valueLetters = onlyLetters(value);
    const filtered = this.props.data.filter(e => e.label.match(new RegExp(`${valueLetters}`, 'gi')));
    this.setState({
      value,
      active: -1,
      filtered
    });
  }

  /* EVENT FUNCTIONS */

  _change = (evt) => {
    this.filter(evt.target.value);
  }

  _blur = (evt) => {
    this.setState({ focused: false });
    this.props.form.setFieldTouched(this.props.field.name);
  }

  _focus = (evt) => {
    this.recalculateMaxHeight();
    this.setState({ focused: true, mouseIn: true });
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
      this.select(this.state.active);
    } else if (evt.key === 'Tab') {
      this.setState({ mouseIn: false, focused: false });
    }
  }

  _scroll = (evt) => {
    if (this.state.focused) {
      this.recalculateMaxHeight();
    }
  }

  _mouseEnter = (evt) => {
    if (this.state.focused) {
      this.setState({ mouseIn: true });
    }
  }

  _mouseLeave = (evt) => {
    this.setState({ mouseIn: false });
  }

  /* RENDER FUNCTIONS */

  renderItems() {
    return this.state.filtered.map((c, i) => (
      <DropdownItem key={c.label} data-active={this.state.active === i} onClick={() => this.select(i)}>
        {c.label}
      </DropdownItem>
    ))
  }

  render() {
    return (
      <SelectWrapper
        ref={this.baseEl}
        focused={this.state.focused || this.state.mouseIn}
        onMouseEnter={this._mouseEnter}
        onMouseLeave={this._mouseLeave}
      >
        <InputText
          ref={this.inputEl}
          autoComplete={`${Math.random()}-autocomplete-disable`}
          onBlur={this._blur}
          onChange={this._change}
          onFocus={this._focus}
          onKeyDown={this._keyDown}
          placeholder={this.props.placeholder}
          value={this.state.value}
          data-has-content={Boolean(this.props.field.value)}
        />
        <DropdownWrapper ref={this.wrapperEl} maxHeight={this.state.maxHeight}>
          <DropdownContent>
            {this.renderItems()}
          </DropdownContent>
        </DropdownWrapper>
        <HideElement>
          <DropdownItem ref={this.itemEl} style={{ position: 'absolute', opacity: 0 }}>&nbsp;</DropdownItem>
        </HideElement>
      </SelectWrapper>
    );
  }
}

export default Select;
