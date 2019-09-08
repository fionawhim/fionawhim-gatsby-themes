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
    <React.Fragment>
      <Styled.h2>
        Project:
        <br />
        <Link to={slug}>{title}</Link>
      </Styled.h2>

      <MDXRenderer>{body}</MDXRenderer>
    </React.Fragment>
  );
};

export default Project;
