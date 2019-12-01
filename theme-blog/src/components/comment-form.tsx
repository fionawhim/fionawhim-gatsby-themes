/** @jsx jsx */

import React, { FormEvent } from 'react';
import { jsx } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';
import { CommentFormQuery } from '../../lib/graphql';
import { Styled } from 'theme-ui';

const CommentForm: React.FunctionComponent<{ path: string }> = ({ path }) => {
  const data: CommentFormQuery.Query = useStaticQuery(graphql`
    query CommentFormQuery {
      site {
        siteMetadata {
          addCommentUrl
        }
      }
    }
  `);

  const addCommentUrl = data.site!.siteMetadata!.addCommentUrl;

  // We disable the submit button until JS loads.
  const [inBrowser, setInBrowser] = React.useState(false);

  React.useEffect(() => {
    setInBrowser(true);
  }, []);

  const nameInputRef = React.useRef<HTMLInputElement | null>(null);
  const emailInputRef = React.useRef<HTMLInputElement | null>(null);
  const bodyTextAreaRef = React.useRef<HTMLTextAreaElement | null>(null);

  const [submitting, setSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const onSubmit = React.useCallback(
    async (ev: FormEvent) => {
      ev.preventDefault();

      const nameInput = nameInputRef.current;
      const emailInput = emailInputRef.current;
      const bodyTextArea = bodyTextAreaRef.current;

      if (!nameInput || !emailInput || !bodyTextArea) {
        return;
      }

      setSubmitting(true);

      try {
        const body = new URLSearchParams();
        body.append('name', nameInput.value);
        body.append('email', emailInput.value);
        body.append('body', bodyTextArea.value);
        body.append('path', path);

        const resp = await fetch(addCommentUrl!, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body,
        });

        const result = await resp.json();

        if (result.status === 'ok') {
          setSuccess(true);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setSubmitting(false);
      }
    },
    [addCommentUrl, path]
  );

  return (
    <form
      onSubmit={onSubmit}
      sx={{
        marginTop: 2,
        label: {
          display: 'block',
          fontFamily: 'heading',
          fontWeight: 'bold',
          color: 'secondary',
        },
        'input, textarea': {
          border: '1px solid',
          borderColor: 'secondaryBackground',
        },
        input: {
          fontFamily: 'heading',
          fontSize: 0,
          lineHeight: 0,
          padding: '2px 4px',
        },
        textarea: {
          fontFamily: 'body',
          fontSize: 0,
          lineHeight: 0,
          padding: '2px 4px',
        },
      }}
    >
      <Styled.h4 sx={{ mb: 1 }}>Post a Comment</Styled.h4>

      {success && (
        <React.Fragment>
          <div sx={{ fontFamily: 'heading' }}>
            Your comment has been submitted!
          </div>

          <p sx={{ fontStyle: 'italic' }}>
            It will take a few minutes for it to appear on this site.
          </p>
        </React.Fragment>
      )}

      {!success && (
        <React.Fragment>
          <div sx={{ mb: 1 }}>
            <label htmlFor="comment-name">Name</label>
            <input
              name="name"
              type="text"
              id="comment-name"
              ref={nameInputRef}
              sx={{ width: '50%' }}
              required
            />
          </div>

          <div sx={{ mb: 1 }}>
            <label htmlFor="comment-email">
              Email{' '}
              <span sx={{ fontWeight: 'normal', color: 'text' }}>
                (won’t be shown)
              </span>
            </label>
            <input
              name="email"
              type="email"
              id="comment-email"
              ref={emailInputRef}
              sx={{ width: '50%' }}
              required
            />
          </div>

          <div sx={{ mb: 1 }}>
            <label htmlFor="comment-body">Comment</label>
            <textarea
              id="comment-body"
              name="comment"
              ref={bodyTextAreaRef}
              sx={{ width: '100%', height: ({ baseline }) => [baseline * 4] }}
            ></textarea>
          </div>

          <div style={{ textAlign: 'right' }}>
            <button
              type="submit"
              disabled={!inBrowser || submitting}
              sx={{
                backgroundColor: 'primary',
                borderRadius: 0,
                border: 'none',
                fontFamily: 'heading',
                fontSize: 0,
                fontWeight: 'bold',
                color: 'white',
                padding: '4px 8px',
                cursor: 'pointer',
                ':disabled': {
                  backgroundColor: '#666666',
                },
              }}
            >
              Post Comment
            </button>
          </div>
        </React.Fragment>
      )}
    </form>
  );
};

export default CommentForm;
