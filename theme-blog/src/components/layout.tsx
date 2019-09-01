/** @jsx jsx */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Styled, ThemeProvider, jsx } from 'theme-ui';
import { Global } from '@emotion/core';
import { MDXProvider } from '@mdx-js/react';
import reset from 'emotion-reset';

import { LayoutQuery } from '../../lib/graphql';

import CONTENT_THEME from '../style/content-theme';
import SIDEBAR_THEME from '../style/sidebar-theme';

import SiteIcons from './site-icons';
import SiteHeader from './site-header';

const LAYOUT_REGIONS = {
  content: 'content',
  sidebar: 'sidebar',
};

interface Props {
  title?: string;
}

export const Content: React.FunctionComponent = ({ children }) => (
  <ThemeProvider theme={CONTENT_THEME}>
    <section css={{ gridArea: LAYOUT_REGIONS.content }}>{children}</section>
  </ThemeProvider>
);

export const Sidebar: React.FunctionComponent = ({ children }) => (
  <ThemeProvider theme={SIDEBAR_THEME}>
    <aside css={{ gridArea: LAYOUT_REGIONS.sidebar }}>{children}</aside>
  </ThemeProvider>
);

const Layout: React.FunctionComponent<Props> = ({ title, children }) => {
  const data: LayoutQuery.Query = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  {
    /* <link rel="stylesheet" href="//basehold.it/24"></link> */
  }

  return (
    <React.Fragment>
      <Styled.root>
        <Helmet>
          <title>
            {title ? `${title} | ` : ''}
            {data.site!.siteMetadata!.title}
          </title>

          <SiteIcons />
        </Helmet>

        <Global styles={reset} />

        <SiteHeader
          title={data.site!.siteMetadata!.title!}
          description={data.site!.siteMetadata!.description!}
        />

        <MDXProvider components={{ Content, Sidebar }}>
          <main
            sx={{
              padding: 2,
              maxWidth: (({ baseline }) => baseline * 40) as any,

              display: 'grid',

              gridGap: 4,

              gridTemplateColumns: ['1fr', '8fr 4fr'],
              gridTemplateAreas: [
                `
    "${LAYOUT_REGIONS.content}"
    "${LAYOUT_REGIONS.sidebar}"
    `,
                `"${LAYOUT_REGIONS.content} ${LAYOUT_REGIONS.sidebar}"`,
              ],
            }}
          >
            {children}
          </main>
        </MDXProvider>
      </Styled.root>
    </React.Fragment>
  );
};

export default Layout;
