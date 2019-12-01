import { graphql } from 'gatsby';

import ProjectPage from '../components/project-page';

export default ProjectPage;

export const query = graphql`
  query ProjectPageQuery(
    $slug: String!
    $projectId: String!
    $sidebarSlugs: [String!]
  ) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        # sidebar
      }
      body
    }

    relatedPosts: allMdx(
      filter: { frontmatter: { project: { eq: $projectId } } }
    ) {
      nodes {
        childMdxBlogPost {
          date(formatString: "MMMM D, YYYY")
          excerpt
          slug
          title
        }
      }
    }

    allSidebar(filter: { slug: { in: $sidebarSlugs } }) {
      nodes {
        slug
        title
        parent {
          ... on Mdx {
            body
          }
        }
      }
    }
  }
`;
