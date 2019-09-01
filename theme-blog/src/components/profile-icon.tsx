import React from 'react';

type Props = {
  name: string;
  description: string;
  url: string;
  icon: string;
};

const ProfileIcon: React.FunctionComponent<Props> = ({
  name,
  description,
  url,
  icon,
}) => (
  <a key={name} href={url} title={description}>
    <img
      style={{
        marginRight: '1em',
      }}
      alt={name}
      src={require(`../../assets/logos/${icon}.svg`)}
      width="48"
      height="48"
    />
  </a>
);

export default ProfileIcon;
