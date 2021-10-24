/** @jsx jsx */

import React from 'react';
import { jsx } from 'theme-ui';
import { PostComment } from '../../lib/graphql';
import { Themed } from 'theme-ui';

const Comment: React.FunctionComponent<{
  comment: Pick<PostComment, 'name' | 'createdAt' | 'body'>;
}> = ({ comment }) => {
  return (
    <div sx={{ my: 1 }}>
      <Themed.h5>
        {comment.name}{' '}
        <span sx={{ fontWeight: 'normal' }}> — {comment.createdAt}</span>
      </Themed.h5>

      {addLineBreaks(comment.body)}
    </div>
  );
};

function addLineBreaks(body: string) {
  return body.split(/\n\n+/).map((para, i) => (
    <Themed.p key={i}>
      {para.split(/\n/).map((line, j) => (
        <React.Fragment key={j}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </Themed.p>
  ));
}

export default Comment;
