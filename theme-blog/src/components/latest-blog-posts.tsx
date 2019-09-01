import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { LatestBlogPostsQuery } from '../../lib/graphql';

import BlogPost from './blog-post';

const LatestBlogPosts: React.FunctionComponent = () => {
  const data: LatestBlogPostsQuery.Query = useStaticQuery(graphql`
    query LatestBlogPostsQuery {
      allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 5) {
        nodes {
          id
          body
          slug
          title
          day: date(formatString: "DD")
          month: date(formatString: "MMMM")
          year: date(formatString: "YYYY")

          ... on MdxBlogPost {
            parent {
              ... on Mdx {
                fields {
                  project {
                    projectId
                    slug
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {data.allBlogPost.nodes.map(p => (
        <BlogPost
          key={p.slug}
          {...p}
          project={p.parent!.fields && p.parent!.fields.project}
        />
      ))}
    </>
  );
};

export default LatestBlogPosts;
