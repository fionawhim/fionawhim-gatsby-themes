/** @jsx jsx */

import React from 'react';
import { jsx } from 'theme-ui';

type Props = {
  author: string;
  startYear: number;
  endYear: number;
};

const SiteFooter: React.FunctionComponent<Props> = ({
  startYear,
  endYear,
  author,
}) => (
  <footer
    sx={{
      p: 1,
      fontFamily: 'heading',
      color: 'text',
      backgroundColor: 'secondaryBackground',
    }}
  >
    © {startYear}–{endYear} {author} • <a href="/rss.xml">RSS</a> • See the
    code:{' '}
    <a href="https://github.com/fionawhim/fionawhim-gatsby-themes">
      @fionawhim/fionawhim-gatsby-themes
    </a>{' '}
  </footer>
);

export default SiteFooter;
