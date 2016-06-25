# lumbur

[![build status](https://img.shields.io/travis/loggur/lumbur/master.svg?style=flat-square)](https://travis-ci.org/loggur/lumbur) [![npm version](https://img.shields.io/npm/v/lumbur.svg?style=flat-square)](https://www.npmjs.com/package/lumbur)
[![npm downloads](https://img.shields.io/npm/dm/lumbur.svg?style=flat-square)](https://www.npmjs.com/package/lumbur)

Boilerplate w/ generator for building universal, extendable, and reusable React applications with `react-redux-provide`.


## Table of contents

1.  [Usage](#usage)
2.  [What's included?](#whats-included)


## Usage

Simply clone this repo and run `npm install`!  You'll be prompted similarly to `npm init` but for information about what you're building with this boilerplate.  :)

Good starting points after initialization:

  1.  npm run start:dev
  2.  src/renderApp.js
  3.  src/renderAppToString.js
  4.  src/defaultProps.js
  5.  src/middleware.js
  6.  src/components/App.js
  7.  Update README.md!


## What's included?

- Setup
  - [Babel 6 w/ early stage features](https://babeljs.io/)
  - [Webpack](https://webpack.github.io/)
  - [Express](http://expressjs.com/)
  - [Gzip compression](https://www.npmjs.com/package/compression)
  - [SSL config in production w/ redirect](https://github.com/loggur/lumbur/blob/master/server.production.js)
  - [Hot reloading (both client and server)](https://github.com/gaearon/react-transform-hmr)
  - [Static files directory](http://expressjs.com/en/starter/static-files.html)
  - [Test utilities](https://mochajs.org/)
  - [Windows environment support](https://github.com/benoror/better-npm-run)

- Libraries
  - [React](https://facebook.github.io/react/)
  - [CSS modules](https://github.com/css-modules/css-modules)
  - [Redux providers](https://github.com/loggur/react-redux-provide)
  - [Replication (client: localforage; server: flat files)](https://github.com/loggur/redux-replicate)

- Providers
  - [Routing](https://github.com/loggur/provide-router) w/ [Server rendering](https://github.com/loggur/provide-page)
  - [Themes](https://github.com/loggur/provide-theme)
  - [ID generation](https://github.com/loggur/provide-id-gen)
  - [Users (creation and authentication)](https://github.com/loggur/provide-user)
