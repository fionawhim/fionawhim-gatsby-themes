/** @jsx jsx */

import { Styled, jsx } from 'theme-ui';

import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';
import { Maybe } from '../../lib/graphql';

interface Props {
  body: string;
  slug: string;
  title: string;
  date: string;
  project?: null | {
    slug: Maybe<string>;
    title: Maybe<string>;
  };
}

const BlogPost: React.FunctionComponent<Props> = ({
  body,
  title,
  slug,
  date,
  project,
}) => {
  return (
    <div
      sx={{
        '.gatsby-resp-image-wrapper': {
          borderStyle: 'solid',
          borderColor: 'text',
          borderWidth: 3,
        },

        minHeight: '12em',

        marginBottom: '5em',
        position: 'relative',
      }}
    >
      <Styled.h2>
        <Link to={slug}>{title}</Link>
      </Styled.h2>

      <div
        sx={{
          fontSize: 4,
          fontFamily: 'heading',
          m: 0,
          transform: 'rotate(-90deg)',
          transformOrigin: 'right top 0',
          position: 'absolute',
          right: 'calc(100% + 2em)',
          top: '4px',
          color: 'muted',
          whiteSpace: 'nowrap',
        }}
      >
        {date}
      </div>

      {project && (
        <i>
          See more about this project:{' '}
          <Link to={project.slug!}>{project.title!}</Link>
        </i>
      )}

      <MDXRenderer>{body}</MDXRenderer>
    </div>
  );
};

export default BlogPost;
