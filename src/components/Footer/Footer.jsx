import React from 'react';
import IconList from './IconList/IconList';
import LinkList from './LinkList/LinkList';
import Address from './Address/Address';
import AllShare from './AllShare/AllShare';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <IconList />
      <LinkList/>
      <Address />
      <AllShare/>
    </footer>
  );
}

export default Footer;
