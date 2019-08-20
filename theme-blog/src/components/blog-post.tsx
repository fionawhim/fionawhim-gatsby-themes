import { Styled } from 'theme-ui';

import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';

interface Props {
  body: string;
  slug: string;
  title: string;
  date: string;
}

const BlogPost: React.FunctionComponent<Props> = ({ body, title, slug }) => {
  return (
    <div>
      <Styled.h2>
        <Link to={slug}>{title}</Link>
      </Styled.h2>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  );
};

export default BlogPost;
