/** @jsx jsx */

import React from 'react';
import { Link } from 'gatsby';
import { Styled, jsx } from 'theme-ui';

type Props = {
  title: string;
  description: string;
};

const SiteHeader: React.FunctionComponent<Props> = ({ title, description }) => (
  <header
    sx={{
      fontFamily: 'heading',
      color: 'text',
      backgroundColor: 'primary',
      padding: 1,
    }}
  >
    <Styled.h1>
      <Link to="/">{title}</Link>
    </Styled.h1>

    <div>{description}</div>
  </header>
);

export default SiteHeader;
