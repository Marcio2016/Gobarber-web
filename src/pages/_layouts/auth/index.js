import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./styles";

// eslint-disable-next-line react/prop-types
function AuthLayout({ children }) {
    return <Wrapper>{children}</Wrapper>;
}

AuthLayout.prototype = {
    children: PropTypes.element.isRequired,
};

export default AuthLayout;
