/** @jsx jsx */

import React from 'react';
import { jsx } from 'theme-ui';
import { ExtendedPostPageQuery } from '../../lib/graphql';
import { Styled } from 'theme-ui';

const Comment: React.FunctionComponent<{
  comment: ExtendedPostPageQuery.Comments['nodes'][0];
}> = ({ comment }) => {
  return (
    <div sx={{ my: 1 }}>
      <Styled.h5>
        {comment.name}{' '}
        <span sx={{ fontWeight: 'normal' }}> — {comment.createdAt}</span>
      </Styled.h5>

      {addLineBreaks(comment.body!)}
    </div>
  );
};

function addLineBreaks(body: string) {
  return body.split(/\n\n+/).map((para, i) => (
    <Styled.p key={i}>
      {para.split(/\n/).map((line, j) => (
        <React.Fragment key={j}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </Styled.p>
  ));
}

export default Comment;
