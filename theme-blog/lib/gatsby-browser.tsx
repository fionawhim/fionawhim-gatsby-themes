import React from 'react';

import { hydrate, cache } from 'emotion';
import { CacheProvider } from '@emotion/core';

export const onClientEntry = () => {
  // This JSON script gets written in gatsby-ssr
  const idsTag = document.getElementById('hydrated-emotion-ids');

  if (idsTag) {
    const ids = JSON.parse(idsTag.innerHTML);
    hydrate(ids);
  }
};

export const wrapRootElement = ({ element }) => (
  <CacheProvider value={cache}>{element}</CacheProvider>
);
