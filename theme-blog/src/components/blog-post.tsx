/** @jsx jsx */

import React from 'react';
import { Styled, jsx } from 'theme-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';
import { Maybe } from '../../lib/graphql';
import { BASELINE } from '../gatsby-plugin-theme-ui';

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
  project,
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
      }}
    >
      <div sx={{ display: ['block', 'flex'], alignItems: 'center' }}>
        <div
          sx={{
            width: ['auto', 6 * BASELINE],
            marginRight: [0, BASELINE],
            borderRight: ['none', '4px solid'],
            borderColor: 'muted',
            textAlign: 'left',
            color: 'muted',
            fontFamily: 'heading',
          }}
        >
          <div
            sx={{
              variant: ['text.normal', 'text.huge'],
              fontFamily: 'heading',
              fontWeight: ['normal', 'bold'],
              display: ['inline', 'block'],
            }}
          >
            {day}
          </div>{' '}
          <div sx={{ display: ['inline', 'block'] }}>
            {month} {year}
          </div>
        </div>

        <Styled.h3 css={{ flex: 1, marginBottom: 0 }}>
          <Link to={slug}>{title}</Link>
        </Styled.h3>
      </div>

      {/* <div
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
      </div> */}

      {project && (
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
      )}

      <MDXRenderer>{body}</MDXRenderer>
    </article>
  );
};

export default BlogPost;
