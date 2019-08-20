import { Styled } from 'theme-ui';

import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { css } from '@emotion/core';

interface Props {
  body: string;
  slug: string;
  title: string;
  date: string;
}

const BlogPost: React.FunctionComponent<Props> = ({ body, title }) => {
  return (
    <div>
      <Styled.h2>{title}</Styled.h2>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  );
};

export default BlogPost;
