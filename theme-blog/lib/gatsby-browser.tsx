import React from 'react';

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { MDXProvider } from '@mdx-js/react';

import MDX_COMPONENTS from '../src/shortcodes';

const cache = createCache({ key: 'fionawhim' });

export const wrapRootElement = ({ element }) => (
  <CacheProvider value={cache}>
    <MDXProvider components={MDX_COMPONENTS}>{element}</MDXProvider>
  </CacheProvider>
);
