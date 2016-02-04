import 'babel-polyfill';

/**
 * Ensure Babel's implementations are used.  It'd be nice to not have to do
 * this, but libraries compiled by Babel seem to use its implementation while
 * say for example, `React.PropTypes.instanceOf(Map)` seems to use the native
 * global implementation, causing a prop validation error.  This fixes that.
 */
if (typeof window !== 'undefined') {
  window.Map = Map;
  window.Set = Set;
  window.WeakMap = WeakMap;
  window.WeakSet = WeakSet;
} else {
  global.Map = Map;
  global.Set = Set;
  global.WeakMap = WeakMap;
  global.WeakSet = WeakSet;
}
