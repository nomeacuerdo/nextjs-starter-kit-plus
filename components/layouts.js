import React from 'react';
import PropTypes from 'prop-types';
import HeadMeta from './head';
import PageHeader from './nav';

/**
 * Foundational page layout component, including optional page header
 *
 * @param {Object} [meta] - metadata for this page (refer to /components/head.js)
 * @param {boolean} [hideTopNav=false] - hide the top navigation bar.
 * @param {*} [children] - HTML or JSX to render inside <main>
 */
class Page extends React.PureComponent {
  render() {
    const { meta, children, hideTopNav } = this.props;
    return (
      <div>
        <HeadMeta meta={meta} />
        {!hideTopNav && <PageHeader />}
        <main className="pt5">
          {children}
        </main>
      </div>
    );
  }
}

Page.propTypes = {
  meta: PropTypes.object,
  children: PropTypes.node,
  hideTopNav: PropTypes.bool,
};

Page.defaultProps = {
  meta: '',
  children: '',
  hideTopNav: false,
};

export default Page;
