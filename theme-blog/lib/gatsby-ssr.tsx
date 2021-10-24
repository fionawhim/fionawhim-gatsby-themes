import React from 'react';

import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import createCache from '@emotion/cache';

import { MDXProvider } from '@mdx-js/react';

import { ConfigOptions, DEFAULT_CONFIG_OPTIONS } from './config-options';

import MDX_COMPONENTS from '../src/shortcodes';

const key = 'custom';
const cache = createCache({ key });

const { extractCritical } = createEmotionServer(cache);

export const onRenderBody = (
  { bodyHtml, setHeadComponents },
  configOptions: ConfigOptions
) => {
  const { css, ids } = extractCritical(bodyHtml);

  setHeadComponents([
    <style
      key="hydrated-emotion-css"
      type="text/css"
      data-emotion={`${key} ${ids.join(' ')}`}
      dangerouslySetInnerHTML={{ __html: css }}
    />,

    configOptions.feedUrl && (
      <link
        key="rss-link"
        rel="alternate"
        type="application/rss+xml"
        title={configOptions.feedName || DEFAULT_CONFIG_OPTIONS.feedName}
        href={configOptions.feedUrl}
      />
    ),
  ]);
};

export const wrapRootElement = ({ element }) => (
  <CacheProvider value={cache}>
    <MDXProvider components={MDX_COMPONENTS}>{element}</MDXProvider>
  </CacheProvider>
);
