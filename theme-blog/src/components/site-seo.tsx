import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { SiteSeoQuery, ExtendedPostPageQuery } from '../../lib/graphql';

const SiteSeo: React.FunctionComponent<{
  title: string;
  description: string;
  featuredImage?: ExtendedPostPageQuery.FeaturedImage | null;
}> = ({ title, description, featuredImage }) => {
  const { site }: SiteSeoQuery.Query = useStaticQuery(
    graphql`
      query SiteSeoQuery {
        site {
          siteMetadata {
            author
            social {
              name
            }
          }
        }
      }
    `
  );

  return (
    <Helmet
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },

        featuredImage && {
          name: 'twitter:image',
          content: featuredImage.childImageSharp!.fluid!.src!,
        },
        {
          name: `twitter:creator`,
          content: site!.siteMetadata!.social![0]!.name!,
        },
        {
          name: `twitter:site`,
          content: site!.siteMetadata!.social![0]!.name!,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]}
    />
  );
};

export default SiteSeo;
