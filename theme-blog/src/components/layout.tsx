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

            '* + p': {
              marginTop: BASELINE * 0.75,
              marginBottom: BASELINE * 0.75,
            },

            'p + h4': {
              marginTop: BASELINE * 1.5,
            },

            'h4 + p': {
              marginTop: BASELINE * 0.5,
            },

            a: {
              textDecoration: 'none',
              color: theme.colors.active,
            },

            'p a, li a': {
              textDecoration: 'underline',
            },

            'h1::after': {
              content: '"<<<"',
            },

            'section:nth-of-type(1) h2::before': {
              content: '"^"',
            },

            'section:nth-of-type(2) h2::after': {
              content: '"&"',
            },

            'h3 a::before': {
              content: '""',
            },

            'a:hover': {
              textDecoration: 'underline',
              color: theme.colors.active,
            },

            'article + article': {
              marginTop: 3 * BASELINE,
            },

            'section.main': {
              ...theme.containers.section,
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
