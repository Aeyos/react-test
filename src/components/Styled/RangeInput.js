import styled from 'styled-components';

export default styled.input`
  /* INPUT ELEMENT */
  &[type=range] {
    -webkit-appearance: none;
    margin: 18px 0;
    width: 100%;

    /* INPUT EVENTS */
    &:focus {
      outline: none;
    }

    /* TRACK */
    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 2px;
      cursor: pointer;
      animate: 0.2s;
      background: ${props => props.theme.light};
    }

    /* TICK */
    &::-webkit-slider-thumb {
      background: ${props => props.theme.mainColor};
      height: 17px;
      width: 17px;
      border-radius: 50%;
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -7px;
      margin-left: 0px;
    }

    &:focus::-webkit-slider-thumb {
      background: red;
    }
  }
  /* FOCUS */
  /*
  &[type=range]:focus::-webkit-slider-runnable-track {
    background: red;
  }
  */

  &[type=range]::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }

  &[type=range]::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }

  &[type=range]::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }

  &[type=range]::-ms-fill-lower {
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }

  &[type=range]::-ms-fill-upper {
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }

  &[type=range]::-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }

  &[type=range]:focus::-ms-fill-lower {
    background: #3071a9;
  }

  &[type=range]:focus::-ms-fill-upper {
    background: #367ebd;
  }
`;
