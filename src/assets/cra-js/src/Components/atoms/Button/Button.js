import * as React from 'react';

const Button = ({ onClick, children }) => (
  <button onClick={onClick} type="button">
    {children}
  </button>
);

Button.defaultProps = {
  children: null,
  onClick: () => {},
};

export default Button;
