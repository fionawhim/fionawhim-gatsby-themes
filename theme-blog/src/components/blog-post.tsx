/** @jsx jsx */

import React from 'react';
import { jsx } from 'theme-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Maybe } from '../../lib/graphql';
import BlogPostHeader from './blog-post-header';

interface Props {
  isPermalinkPage?: boolean;
  body: string;
  slug: string;
  title: string;
  day: string;
  month: string;
  year: string;
  project?: null | {
    slug: Maybe<string>;
    title: Maybe<string>;
  };
}

const BlogPost: React.FunctionComponent<Props> = ({
  isPermalinkPage,
  body,
  title,
  slug,
  day,
  month,
  year,
}) => {
  return (
    <article
      sx={{
        mt: 2,
        ':first-of-type': {
          mt: 0,
        },
      }}
    >
      {!isPermalinkPage && (
        <BlogPostHeader
          headerElement="h3"
          title={title}
          date={{ month, day, year }}
          slug={slug}
        />
      )}
      <MDXRenderer>{body}</MDXRenderer>
    </article>
  );
};

export default BlogPost;

{
  /* {project && (
        <div
          sx={{
            fontSize: 0,
            lineHeight: 0,
            mt: -3,
            mb: 3,
            fontStyle: 'italic',
            display: 'none',
          }}
        >
          Filed under: <Link to={project.slug!}>{project.title!}</Link>
        </div>
      )} */
}
