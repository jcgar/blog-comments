import './polyfill';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { unshiftEnhancer } from 'react-redux-provide';
import replicate from 'redux-replicate';
import fsReplicator from 'redux-replicate-fs';
import providers from './providers/index';
import App from './components/App';
import defaultProps from './defaultProps';

const { theme, page, entries } = providers;

unshiftEnhancer({ theme }, replicate(
  'data/theme', fsReplicator({ themeName: true })
));
unshiftEnhancer({ page, entries }, replicate(
  'data/entries', fsReplicator({ entries: true })
));

function renderAppToString(props = defaultProps) {
  return renderToString(<App { ...props } />);
}

export default renderAppToString;
