import React from 'react';

import { CenterContent, RoundButton } from '../Styled';
import { PageSize } from '../Styled';

const CenterButton = (props) => (
  <PageSize>
    <CenterContent x="true" y="true">
      <RoundButton size="120px" {...props}>
        {props.children}
      </RoundButton>
    </CenterContent>
  </PageSize>
);

export default CenterButton;
