import expect from 'expect';
import React, { PropTypes } from 'react';
import { Simulate } from 'react-addons-test-utils';
import { renderTest } from 'react-redux-provide-test-utils';
import components from '../src/components/index';
import providers from '../src/providers/index';
import defaultProps from '../src/defaultProps';

const { App } = components;
const appInstance = renderTest(App, defaultProps);

describe('Bloggur', () => {
  it('should render correctly', () => {
    expect(document.title).toBe('Bloggur');
    expect(appInstance.node.tagName).toBe('DIV');
    expect(typeof appInstance.node.className).toBe('string');
  });
});
