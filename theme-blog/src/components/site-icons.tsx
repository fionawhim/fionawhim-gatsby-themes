import React from 'react';
import { useThemeUI } from 'theme-ui';

const SiteIcons: React.FunctionComponent = () => {
  const { theme } = useThemeUI();

  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content={theme.colors!.primary} />
    </>
  );
};

export default SiteIcons;
