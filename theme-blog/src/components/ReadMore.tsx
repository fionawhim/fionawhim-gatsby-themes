import React from 'react';

const ReadMore: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <a id="read-more" />
      {children}
    </>
  );
};

type ReadMoreState = {
  renderLink: () => React.ReactNode;
};

const ReadMoreContext = React.createContext<ReadMoreState | null>(null);

export function hasReadMore(body: string) {
  return body.includes(`mdx(ReadMore, {
    mdxType: "ReadMore"
  })`);
}

export const ReadMoreWrapper: React.FunctionComponent = ({ children }) => {
  const readMoreState = React.useContext(ReadMoreContext);

  let childrenArray = React.Children.toArray(children);

  if (readMoreState) {
    const readMoreIdx = childrenArray.findIndex(
      (node: any) =>
        typeof node === 'object' &&
        node.props &&
        node.props.mdxType === 'ReadMore'
    );

    if (~readMoreIdx) {
      childrenArray = childrenArray.slice(0, readMoreIdx);
      childrenArray.push(
        <React.Fragment key="ReadMoreWrapper">
          {readMoreState.renderLink()}
        </React.Fragment>
      );
    }
  }

  return <>{childrenArray}</>;
};

export const ReplaceReadMore: React.FunctionComponent<ReadMoreState> = ({
  children,
  ...state
}) => {
  return (
    <ReadMoreContext.Provider value={state}>
      {children}
    </ReadMoreContext.Provider>
  );
};

export default ReadMore;
