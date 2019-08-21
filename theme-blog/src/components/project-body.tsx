/** @jsx jsx */

import { Styled, jsx } from 'theme-ui';

import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';

interface Props {
  body: string;
  slug: string;
  title: string;
}

const Project: React.FunctionComponent<Props> = ({ body, title, slug }) => {
  return (
    <div
      sx={{
        '.gatsby-resp-image-wrapper': {
          borderStyle: 'solid',
          borderColor: 'text',
          borderWidth: 3,
        },

        marginBottom: '5em',
        position: 'relative',
      }}
    >
      <Styled.h2>
        Project:
        <br />
        <Link to={slug}>{title}</Link>
      </Styled.h2>

      <div style={{ position: 'relative' }}>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </div>
  );
};

export default Project;
