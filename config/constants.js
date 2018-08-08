/**
 * Site-wide config and constants
 * @const {string} siteTitle - The app name or site title for <title> and metadata.
 * @const {string} siteURL - URL where the site will be deployed.
 * @const {string} siteTitleSepCharacter - Character to separate page title string from `siteTitle`, e.g. 'Contact · MyApp'
 * @const {string} basicTextColorClass - default color for all text elements
 * @const {string} basicTextFontClass - default font for all text elements
 * @const {string} defaultBrandColour - accent/contrast or brand color
 * @const {string} basicStyle - basic classes to apply to the <body> tag in pages/_document.js
 * @const {string} basicColumnStyle - classes for default width and alignment for body content blocks
 * @const {string} heroColumnStyle - full-width 'hero' block
 * @const {string} narrowColumnStyle - narrow block
 */

import classNames from 'classnames';

export const siteTitle = 'MyApp';
export const siteURL = 'https://myapp.com';
export const siteTitleSepCharacter = '·';

export const basicTextColorClass = 'dark-green';
export const basicTextFontClass = 'sans-serif';
export const defaultBrandColour = 'dark-green';
export const defaultBrandColourBg = 'bg-dark-green';
export const defaultBrandText = 'b--dark-green near-white';
export const defaultBrandColourHover = 'hover-bg-white hover-dark-green';
export const basicStyle = classNames(basicTextColorClass, basicTextFontClass);

export const basicColumnStyle = 'w-100 cf helvetica dark-gray bg-white pa4 mw9 center';
export const heroColumnStyle = 'mw-none center pv3 ph4 w-100';
export const narrowColumnStyle = 'mw-none center w-50 w-50-ns mw5-l';
export const navLogo = classNames('dtc v-mid mid-gray link dim');
export const navLinks = classNames('link dim near-white f6 f5-ns dib mr3');
export const navButtonLinks = classNames('f6 dib white bg-animate no-underline pv2 ph4 br-pill ba b--white-20', defaultBrandColourBg, defaultBrandColourHover);

export const coverImage = classNames('vh-75 cover bg-center');
export const inputClass = classNames('pa2 input-reset ba bg-transparent hover-white w-100', defaultBrandColourHover);
export const buttonClass = classNames('b ph3 pv2 input-reset ba grow pointer f6 dib', defaultBrandText, defaultBrandColourBg, defaultBrandColourHover);
export const h1 = classNames('fw6 f1 fl w-100 black-70 mt0 mb3 avenir');
export const h2 = classNames('fw6 f3 avenir');
export const text = classNames('lh-copy measure f4 f3-ns black-70 baskerville');
export const strongQuote = classNames('db lh-copy black-70 serif fw1 mv0 f4 f3-m f2-l measure baskerville');
export const bodyLink = classNames('f6 link dim db', defaultBrandColour, defaultBrandColourHover);
