/** @jsx jsx */

import React from 'react';
import ReactDOM from 'react-dom';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { jsx, Styled } from 'theme-ui';
import { LatestBlogPostsQuery } from '../../lib/graphql';

import BlogPost from './blog-post';
import { ReplaceReadMore } from './ReadMore';

const LatestBlogPosts: React.FunctionComponent = () => {
  const data: LatestBlogPostsQuery.Query = useStaticQuery(graphql`
    query LatestBlogPostsQuery {
      allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 10) {
        nodes {
          id
          body
          slug
          title
          day: date(formatString: "D")
          month: date(formatString: "MMMM")
          year: date(formatString: "YYYY")

          ... on MdxBlogPost {
            fields {
              commentsStatus
            }
          }
        }
      }

      commentCounts: allPostComment {
        group(field: post___id) {
          totalCount
          field
          fieldValue
        }
      }
    }
  `);

  const postToCommentCountMap = new Map<string, number>();

  data.commentCounts.group.forEach(({ fieldValue, totalCount }) => {
    if (fieldValue) {
      postToCommentCountMap.set(fieldValue, totalCount);
    }
  });

  return (
    <React.Fragment>
      {data.allBlogPost.nodes.map(p => {
        return (
          <ReplaceReadMore key={p.slug} renderLink={() => null}>
            <BlogPost
              {...p}
              commentsStatus={p.fields!.commentsStatus as any}
              commentsCount={postToCommentCountMap.get(p.id) || 0}
            />
          </ReplaceReadMore>
        );
      })}
    </React.Fragment>
  );
};

export default LatestBlogPosts;
