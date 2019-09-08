import React from 'react';
import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';
import { extractCritical } from 'emotion-server';

export const onRenderBody = ({ bodyHtml, setHeadComponents }) => {
  const { ids, css } = extractCritical(bodyHtml);

  setHeadComponents([
    // The extracted CSS from Emotion
    <style type="text/css" dangerouslySetInnerHTML={{ __html: css }}></style>,

    // We write the IDs onto the page so we can call hydrate when the app
    // starts up.
    <script
      id="hydrated-emotion-ids"
      type="application/json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ids) }}
    ></script>,
  ]);
};

export const wrapRootElement = ({ element }) => (
  <CacheProvider value={cache}>{element}</CacheProvider>
);
