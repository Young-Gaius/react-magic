import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, type, className }) => (
  <button type={type} className={className}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;