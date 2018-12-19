import React from 'react';
import { isEqual } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ImageWrapper from './ImageWrapper';
import ImageInput from './ImageInput';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      src: props.field.value || ''
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

  _change = (evt) => {
    if (evt.target && evt.target.files && evt.target.files[0]) {
      // @warn: IE10, IE10+ compliant
      const reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ src: e.target.result });
        this.props.form.setFieldValue(this.props.field.name, e.target.result);
      };

      reader.readAsDataURL(evt.target.files[0]);
    }
  }

  render() {
    return (
      <ImageWrapper src={this.state.src}>
        <FontAwesomeIcon icon="cloud-upload-alt" />
        <ImageInput type="file" onChange={this._change} />
      </ImageWrapper>
    );
  }
}

export default ImageUpload;
