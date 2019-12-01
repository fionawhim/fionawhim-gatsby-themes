import { graphql } from 'gatsby';
import PostPage from '../../components/post-page';

export default PostPage;

export const query = graphql`
  query ExtendedPostPageQuery(
    $id: String!
    $previousId: String
    $nextId: String
  ) {
    blogPost(id: { eq: $id }) {
      id
      excerpt
      body
      slug
      title
      tags
      keywords
      date(formatString: "LL")
      day: date(formatString: "D")
      month: date(formatString: "MMMM")
      year: date(formatString: "YYYY")
    }

    comments: allPostComment(
      filter: { post: { id: { eq: $id } } }
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        id
        name
        body
        gravatarHash
        createdAt(formatString: "LL")
      }
    }

    previous: blogPost(id: { eq: $previousId }) {
      id
      excerpt
      slug
      title
      date(formatString: "LL")
    }

    next: blogPost(id: { eq: $nextId }) {
      id
      excerpt
      slug
      title
      date(formatString: "LL")
    }
  }
`;
