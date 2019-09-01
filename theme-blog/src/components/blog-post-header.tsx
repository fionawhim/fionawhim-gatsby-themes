/** @jsx jsx */

import React from 'react';
import { Link } from 'gatsby';
import { Styled, jsx } from 'theme-ui';

interface Props {
  headerElement?: React.ElementType;
  slug: string;
  title: string;
  date: {
    month: string;
    day: string;
    year: string;
  };
}

const BlogPostHeader: React.FunctionComponent<Props> = ({
  headerElement,
  title,
  slug,
  date: { day, month, year },
}) => {
  return (
    <div
      sx={{
        mb: 1,
        display: 'flex',
        flexDirection: ['column-reverse', , 'row-reverse'],
      }}
    >
      <Styled.h3
        as={headerElement}
        sx={{
          lineHeight: [, 1.125],
          alignSelf: ['flex-start', , 'center'],
          flex: 1,
        }}
      >
        <Link to={slug}>{title}</Link>
      </Styled.h3>

      <div
        sx={{
          fontFamily: 'heading',
          color: 'secondary',

          mr: [, , 1],
          width: ({ baseline }) => [, , 6 * baseline],
          borderRight: [, , '4px solid'],
          borderColor: 'secondary',
        }}
      >
        <span
          sx={{
            display: [, , 'block'],
            fontSize: [, , 3],
            lineHeight: [, , 3],
            fontWeight: [, , 'bold'],
          }}
        >
          {day}
        </span>{' '}
        <span
          sx={{
            display: [, , 'block'],
          }}
        >
          {month} {year}
        </span>
      </div>
    </div>
  );
};

export default BlogPostHeader;
