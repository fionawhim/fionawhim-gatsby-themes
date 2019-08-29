/** @jsx jsx */

import React from 'react';
import { Styled, jsx } from 'theme-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';
import { Maybe } from '../../lib/graphql';
import { BASELINE } from '../gatsby-plugin-theme-ui';
import BlogPostHeader from './blog-post-header';

interface Props {
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
        '.gatsby-resp-image-wrapper': {
          borderStyle: 'solid',
          borderColor: 'text',
          borderWidth: 3,
          my: 2,
        },

        'p, ul': {
          marginTop: BASELINE * 0.75,
        },

        '* + h4': {
          marginTop: BASELINE * 1.5,
        },

        'h4 + *': {
          marginTop: BASELINE * 0.5,
        },

        li: {
          marginTop: BASELINE * 0.5,
        },

        ul: {
          px: 2
        }
      }}
    >
      <BlogPostHeader title={title} date={{ month, day, year }} slug={slug} />

      {/* {project && (
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
      )} */}

      <div>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </article>
  );
};

export default BlogPost;
