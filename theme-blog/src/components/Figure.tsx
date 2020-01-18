import React from 'react';

const Figure: React.FunctionComponent<
  {
    caption?: React.ReactNode;
    children: React.ReactElement<
      React.DetailedHTMLProps<React.AllHTMLAttributes<HTMLElement>, HTMLElement>
    >;
  } & (
    | { width: number; height: number; aspect?: undefined }
    | { width?: undefined; height?: undefined; aspect: number })
> = ({ caption, children, ...props }) => {
  const aspect =
    props.aspect !== undefined ? 1 / props.aspect : props.height / props.width;

  return (
    <figure className="gatsby-resp-image-figure">
      <span
        className="gatsby-resp-image-wrapper"
        style={{
          position: 'relative',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '960px',
        }}
      >
        <span
          className="gatsby-resp-image-background-image"
          style={{
            paddingBottom: `${(aspect * 100).toFixed(3)}%`,
            position: 'relative',
            bottom: 0,
            left: 0,
            display: 'block',
          }}
        ></span>
        {React.cloneElement(children, {
          className: `gatsby-resp-image-image ${children.props.className ||
            ''}`,
          style: {
            ...children.props.style,
            width: '100%',
            height: '100%',
            margin: 0,
            verticalAlign: 'middle',
            position: 'absolute',
            top: 0,
            left: 0,
          },
        })}
      </span>
      {caption && (
        <figcaption className="gatsby-resp-image-figcaption">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default Figure;
