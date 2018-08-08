import React from 'react';
import Page from '../components/layouts';

import { heroColumnStyle, coverImage, h1 } from '../config/constants';

const Index = () => (
  <div>
    <Page meta={{ title: 'Home', description: 'Desc' }}>
      <div
        className={coverImage}
        style={{ backgroundImage: 'url(http://mrmrs.github.io/photos/001.jpg)' }}
      >
      </div>
      <div className={heroColumnStyle}>
        <h1 className={h1}>
          This is the Index.
        </h1>
      </div>
    </Page>
  </div>
);

export default Index;
