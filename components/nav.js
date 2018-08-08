import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import {
  defaultBrandColourBg,
  navLinks,
  navLogo,
  navButtonLinks,
} from '../config/constants';

const PageHeader = () => (
  <nav className={classNames('flex justify-between bb fixed w-100', defaultBrandColourBg)}>
    <div className={classNames('flex-grow pa3 flex items-center')}>
      <Link href="/">
        <a className={navLogo} title="Home">
          <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name" />
        </a>
      </Link>
    </div>
    <div className={classNames('flex-grow pa3 flex items-center')}>
      <Link href="/about">
        <a className={navLinks}>
          About
        </a>
      </Link>
      <Link href="/login">
        <a className={navLinks}>
          Log In
        </a>
      </Link>
      <Link href="/signup">
        <a className={navButtonLinks}>
          Sign Up
        </a>
      </Link>
    </div>
  </nav>
);


export default PageHeader;
