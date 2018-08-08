import React from 'react';
import Page from '../components/layouts';

import {
  basicColumnStyle, h1, h2, text, strongQuote,
} from '../config/constants';

const About = () => (
  <div>
    <Page meta={{ title: 'About', description: 'Desc' }}>
      <div className={basicColumnStyle}>
        <h1 className={h1}>
          ABOUT
        </h1>
        <p className={strongQuote}>
          `Lorem Ipsum.` - A wise man.
        </p>
        <hr />
        <h2 className={h2}>
          This is the subtitle
        </h2>
        <p className={text}>
          Lorem Ipsum is a kind of filler text, unlike this one.
        </p>
      </div>
    </Page>
  </div>
);

export default About;
