import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

// eslint-disable-next-line react/prop-types
function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.prototype = {
  children: PropTypes.element.isRequired,
};

export default DefaultLayout;
