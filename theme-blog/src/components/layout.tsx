/** @jsx jsx */
import {
  jsx,
  Styled,
  Layout as ThemedLayout,
  Header,
  Main,
  Container,
} from 'theme-ui';

import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Global } from '@emotion/core';
import { LayoutQuery } from '../../lib/graphql';
import { BASELINE } from '../gatsby-plugin-theme-ui';

interface Props {
  title?: string;
}

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

  return (
    <ThemedLayout>
      <Helmet>
        <title>
          {title ? `${title} | ` : ''}
          {data.site!.siteMetadata!.title}
        </title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#BC007B" />

        {/* <link rel="stylesheet" href="//basehold.it/24"></link> */}
      </Helmet>

      <Styled.root>
        <Global
          styles={theme => ({
            body: {
              margin: 0,
              padding: 0,
            },

            '*, *:before, *:after': {
              boxSizing: 'border-box',
            },

            'h1, h2, h3, h4, h5, h6, p, ul, ol': {
              margin: 0,
            },

            a: {
              textDecoration: 'none',
              color: theme.colors.primary,
            },

            'p a, li a': {
              textDecoration: 'underline',
            },

            'p a:visited, li a:visited': {
              color: theme.colors.dark,
            },

            'h1::after': {
              content: '"<<<"',
            },

            'section h2::before': {
              content: '"&"',
            },

            'aside h3:nth-of-type(1)::after': {
              content: '"/"',
            },

            'aside h3:nth-of-type(2)::before': {
              content: '"…"',
            },

            'h3 a::before': {
              content: '""',
            },

            'a:hover': {
              textDecoration: 'underline',
              color: theme.colors.active,
            },

            // HACK(fiona): Work-around for https://github.com/gatsbyjs/gatsby/issues/15486
            '.gatsby-resp-image-image': {
              width: '100%',
              height: '100%',
              margin: 0,
              verticalAlign: 'middle',
              position: 'absolute',
              top: 0,
              left: 0,
            },
          })}
        />

        <Header
          sx={{
            p: 1,
            bg: 'banner',
            color: 'text',
            flexDirection: 'column',
          }}
        >
          <Styled.h1 sx={{ m: 0, color: 'secondary' }}>
            <Link to="/" style={{ color: 'inherit' }}>
              {data.site!.siteMetadata!.title}
            </Link>
          </Styled.h1>

          <div sx={{ fontFamily: 'heading' }}>
            {data.site!.siteMetadata!.description}
          </div>
        </Header>

        <Main sx={{ p: 2 }}>
          <Container
            sx={{
              marginLeft: 0,
              padding: 0,
              display: ['block', 'block', 'flex'],
            }}
          >
            {children}
          </Container>
        </Main>
      </Styled.root>
    </ThemedLayout>
  );
};

export default Layout;
