import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CenterContent, Loader } from '../Styled';
import { PageSize } from '../Styled';

const FullPageLoader = (props) => (
  <PageSize>
    <CenterContent x="true" y="true">
      <Loader>
        <FontAwesomeIcon icon="spinner" spin />
      </Loader>
    </CenterContent>
  </PageSize>
);

export default FullPageLoader;
