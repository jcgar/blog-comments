import './polyfill';
import React from 'react';
import { render } from 'react-dom';
import { unshiftEnhancer, reloadProviders } from 'react-redux-provide';
import replicate from 'redux-replicate';
import localforageReplicator from 'redux-replicate-localforage';
import providers from './providers/index';
import App from './components/App';
import defaultProps from './defaultProps';

const getRootElement = () => document.getElementById('root');
const providedState = window.clientState;
const { theme, page, entries } = providers;
const themeReplicator = replicate(
  'theme', localforageReplicator({ themeName: true })
);
const entriesReplicator = replicate(
  'entries', localforageReplicator({ entries: true })
);

unshiftEnhancer({ theme }, themeReplicator);
unshiftEnhancer({ page, entries }, entriesReplicator);

export default function renderApp(props, element = getRootElement()) {
  return render(<App { ...props } />, element);
}

renderApp({ ...defaultProps, providedState });

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept([
      './defaultProps',
      './providers/index',
      './providers/entries'
    ], () => {
      reloadProviders(require('./defaultProps').default);
    });
  }
}
