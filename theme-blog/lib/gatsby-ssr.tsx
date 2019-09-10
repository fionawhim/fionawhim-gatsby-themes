import React from 'react';
import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';
import { extractCritical } from 'emotion-server';
import { MDXProvider } from '@mdx-js/react';

import { ConfigOptions, DEFAULT_CONFIG_OPTIONS } from './config-options';

import MDX_COMPONENTS from '../src/shortcodes';

export const onRenderBody = (
  { bodyHtml, setHeadComponents },
  configOptions: ConfigOptions
) => {
  const { ids, css } = extractCritical(bodyHtml);

  setHeadComponents([
    // The extracted CSS from Emotion
    <style
      key="hydrated-emotion-css"
      type="text/css"
      dangerouslySetInnerHTML={{ __html: css }}
    ></style>,

    configOptions.feedUrl && (
      <link
        rel="alternate"
        type="application/rss+xml"
        title={configOptions.feedName || DEFAULT_CONFIG_OPTIONS.feedName}
        href={configOptions.feedUrl}
      />
    ),

    // We write the IDs onto the page so we can call hydrate when the app
    // starts up.
    <script
      key="hydrated-emotion-ids"
      id="hydrated-emotion-ids"
      type="application/json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ids) }}
    ></script>,
  ]);
};

export const wrapRootElement = ({ element }) => (
  <CacheProvider value={cache}>
    <MDXProvider components={MDX_COMPONENTS}>{element}</MDXProvider>
  </CacheProvider>
);
