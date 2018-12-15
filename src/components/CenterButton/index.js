import React from 'react';

import { CenterContent, Button } from '../Styled';

const CenterButton = (props) => (
  <CenterContent x y>
    <Button size={1.5} {...props}>
      {props.children}
    </Button>
  </CenterContent>
);

export default CenterButton;
