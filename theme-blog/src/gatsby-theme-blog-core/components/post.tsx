import React from 'react';

import { PostPageQuery } from '../../../lib/graphql';

import Layout from '../../components/layout';
import BlogPost from '../../components/blog-post';

interface Props {
  data: PostPageQuery.Query;
}

const Post: React.FunctionComponent<Props> = ({ data }) => (
  <Layout title={data.blogPost!.title}>
    <BlogPost {...data.blogPost!} />
  </Layout>
);

export default Post;
