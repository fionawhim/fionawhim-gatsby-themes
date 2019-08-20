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
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { css, Global } from '@emotion/core';

import * as queries from '../../lib/graphql';

interface Props {}

const Layout: React.FunctionComponent<Props> = props => {
  const data: queries.Layout.Query = useStaticQuery(graphql`
    query Layout {
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
        <title>{data.site!.siteMetadata!.title}</title>
      </Helmet>

      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
          }
        `}
      />

      <Header
        sx={{ p: 4, bg: 'primary', color: 'muted', flexDirection: 'column' }}
      >
        <Styled.h1 sx={{ m: 0, color: 'background' }}>
          {data.site!.siteMetadata!.title}
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
          {props.children}
        </Container>
      </Main>
    </ThemedLayout>
  );
};

export default Layout;
