import React from 'react';
import Nav from './Nav';

const Layout = props => {
  return (
    <>
      <Nav />
      <div className="container">{props.children}</div>
    </>
  );
};

export default Layout;
