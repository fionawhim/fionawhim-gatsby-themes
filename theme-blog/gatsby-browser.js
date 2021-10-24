import 'whatwg-fetch';

// We have to use named exports for Gatsby to pick up that we have
// relevant module exports. "export * from '…'" doesn’t get discovered.
export { wrapRootElement } from './lib/gatsby-browser';
