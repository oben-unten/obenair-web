import React from 'react';

export const Link = ({ to, children, className, ...props }) => {
  return <a href={to} className={className} {...props}>{children}</a>;
};

export default Link;
