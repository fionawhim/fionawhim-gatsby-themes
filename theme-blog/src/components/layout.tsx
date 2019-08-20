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
          {title && `${title} | `}
          {data.site!.siteMetadata!.title}
        </title>
      </Helmet>

      <Global
        styles={theme => ({
          body: {
            margin: 0,
            padding: 0,
            color: theme.colors.text,
            backgroundColor: theme.colors.background,
          },

          a: {
            color: theme.colors.primary,
            textDecoration: 'none',
          },

          'p a': {
            textDecoration: 'underline',
          },

          'a:hover': {
            textDecoration: 'underline',
          },
        })}
      />

      <Header
        sx={{ p: 4, bg: 'banner', color: 'muted', flexDirection: 'column' }}
      >
        <Styled.h1 sx={{ m: 0, color: 'secondary' }}>
          <Link to="/" style={{ color: 'inherit' }}>
            {data.site!.siteMetadata!.title}
          </Link>
        </Styled.h1>

        <Styled.p sx={{ m: 0 }}>
          {data.site!.siteMetadata!.description}
        </Styled.p>
      </Header>

      <Main>
        <Container
          sx={{
            p: 4,
            width: ['90%', '85%', '70%'],
          }}
        >
          {children}
        </Container>
      </Main>
    </ThemedLayout>
  );
};

export default Layout;
