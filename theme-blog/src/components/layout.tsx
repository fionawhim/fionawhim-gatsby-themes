/** @jsx jsx */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Styled, ThemeProvider, jsx } from 'theme-ui';
import { Global, css } from '@emotion/core';
import { MDXProvider } from '@mdx-js/react';
import reset from 'emotion-reset';

import { LayoutQuery, ExtendedPostPageQuery } from '../../lib/graphql';

import CONTENT_THEME from '../style/content-theme';
import SIDEBAR_THEME from '../style/sidebar-theme';

import SiteSeo from './site-seo';
import SiteIcons from './site-icons';
import SiteHeader from './site-header';
import SiteFooter from './site-footer';

const LAYOUT_REGIONS = {
  title: 'title',
  content: 'content',
  sidebar: 'sidebar',
};

interface Props {
  title?: string;
  description?: string;
  featuredImage?: ExtendedPostPageQuery.FeaturedImage | null;
}

export const Title: React.FunctionComponent = ({ children }) => (
  <ThemeProvider theme={CONTENT_THEME}>
    <header
      sx={CONTENT_THEME.styles.root}
      css={{ gridArea: LAYOUT_REGIONS.title }}
    >
      {children}
    </header>
  </ThemeProvider>
);

export const Content: React.FunctionComponent = ({ children }) => (
  <ThemeProvider theme={CONTENT_THEME}>
    <section
      sx={{ ...CONTENT_THEME.styles.root, ...CONTENT_THEME.styles.content }}
      css={{ gridArea: LAYOUT_REGIONS.content }}
    >
      {children}
    </section>
  </ThemeProvider>
);

export const Sidebar: React.FunctionComponent = ({ children }) => (
  <ThemeProvider theme={SIDEBAR_THEME}>
    <aside
      sx={SIDEBAR_THEME.styles.root}
      css={{ gridArea: LAYOUT_REGIONS.sidebar }}
    >
      {children}
    </aside>
  </ThemeProvider>
);

/**
 * Shortcodes that are relevant for children of this layout.
 */
const MDX_COMPONENTS = { Content, Sidebar };

const Layout: React.FunctionComponent<Props> = ({
  title,
  description,
  featuredImage,
  children,
}) => {
  const data: LayoutQuery.Query = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          author
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
        </Helmet>

        <SiteIcons />

        <SiteSeo
          title={title || data.site!.siteMetadata!.title!}
          description={description || data.site!.siteMetadata!.description!}
          featuredImage={featuredImage}
        />

        <Global
          styles={css(reset, {
            '*': { boxSizing: 'border-box' },
            '#gatsby-noscript': { display: 'none' },
          })}
        />

        <SiteHeader
          title={data.site!.siteMetadata!.title!}
          description={data.site!.siteMetadata!.description!}
        />

        <MDXProvider components={MDX_COMPONENTS}>
          <main
            sx={{
              padding: 2,
              maxWidth: (({ baseline }) => baseline * 40) as any,

              display: 'grid',

              gridColumnGap: 3,

              gridTemplateColumns: [
                'minmax(0, 1fr)',
                'minmax(0, 8fr) minmax(0, 4fr)',
              ],
              gridTemplateAreas: [
                `
                "${LAYOUT_REGIONS.title}"
                "${LAYOUT_REGIONS.content}"
                "${LAYOUT_REGIONS.sidebar}"
                `,
                `
                "${LAYOUT_REGIONS.title} ${LAYOUT_REGIONS.title}"
                "${LAYOUT_REGIONS.content} ${LAYOUT_REGIONS.sidebar}"
                `,
              ],
            }}
          >
            {children}
          </main>
        </MDXProvider>

        <SiteFooter
          author={data.site!.siteMetadata!.author!}
          startYear={2019}
        />
      </Styled.root>
    </React.Fragment>
  );
};

export default Layout;
