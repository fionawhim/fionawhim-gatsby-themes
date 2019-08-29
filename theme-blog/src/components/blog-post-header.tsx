/** @jsx jsx */

import React from 'react';
import { Styled, jsx } from 'theme-ui';
import { Link } from 'gatsby';

interface Props {
  slug: string;
  title: string;
  date: {
    month: string;
    day: string;
    year: string;
  };
}

const BlogPostHeader: React.FunctionComponent<Props> = ({
  title,
  slug,
  date: { day, month, year },
}) => {
  return (
    // At larger breakpoints we can go to a row to put the date next to the
    // title.
    <div
      sx={{
        display: 'flex',
        flexDirection: ['column-reverse', 'row-reverse'],
        alignItems: ['flex-start', 'center'],
        height: ['auto', 3],
        mb: 1,
      }}
    >
      <Styled.h3 css={{ flex: 1 }} sx={{ variant: 'text.xlargeCentered' }}>
        <Link to={slug}>{title}</Link>
      </Styled.h3>

      <div
        sx={{
          width: ['auto', 6],
          marginRight: [0, 1],
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
    </div>
  );
};

export default BlogPostHeader;
