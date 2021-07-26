import React from 'react';
import sprite from '../assets/icons/sprite.svg';

type Props = {
  name: string,
  color: string,
  width: string,
  height: string,
}

function Icon({
  name, color, width, height,
}: Props) {
  return (
    <svg fill={color} stroke={color} width={width} height={height}>
      <use xlinkHref={`${sprite}#icon-${name}`} />
    </svg>
  );
}

export default Icon;
