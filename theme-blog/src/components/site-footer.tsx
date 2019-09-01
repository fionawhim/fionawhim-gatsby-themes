/** @jsx jsx */

import React from 'react';
import { jsx } from 'theme-ui';

type Props = {
  author: string;
  startYear: number;
};

const SiteFooter: React.FunctionComponent<Props> = ({ startYear, author }) => (
  <footer
    sx={{
      p: 1,
      fontFamily: 'heading',
      color: 'text',
      backgroundColor: 'secondaryBackground',
    }}
  >
    © {startYear} {author}. Custom GatsbyJS theme:{' '}
    <a href="https://github.com/fionawhim/fionawhim-gatsby-themes">
      @fionawhim/fionawhim-gatsby-themes
    </a>
    .
  </footer>
);

export default SiteFooter;
