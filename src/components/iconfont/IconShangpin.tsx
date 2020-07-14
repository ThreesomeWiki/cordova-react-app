/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, DOMAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends DOMAttributes<SVGElement> {
  size?: number;
  color?: string | string[];
  style?: CSSProperties;
  className?: string;
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const IconShangpin: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M800 128H224c-52.8 0-96 43.2-96 96v576c0 52.8 43.2 96 96 96h576c52.8 0 96-43.2 96-96V224c0-52.8-43.2-96-96-96z m-576 48h576c26.5 0 48 21.5 48 48s-21.5 48-48 48H224c-26.5 0-48-21.5-48-48s21.5-48 48-48z m576 672H224c-26.5 0-48-21.5-48-48V306.6c14.2 8.3 30.5 13.4 48 13.4h576c17.5 0 33.8-5.1 48-13.4V800c0 26.5-21.5 48-48 48z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M704 432c-26.5 0-48 21.5-48 48 0 16.7 8.6 31.4 21.6 40-11.8 81.2-81.2 144-165.6 144-84.4 0-153.8-62.8-165.6-144 13-8.6 21.6-23.3 21.6-40 0-26.5-21.5-48-48-48s-48 21.5-48 48c0 18.4 10.5 34.3 25.8 42.3C310.8 629 401.8 712 512 712c110.2 0 201.2-83 214.2-189.7 15.2-8 25.8-23.9 25.8-42.3 0-26.5-21.5-48-48-48z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconShangpin.defaultProps = {
  size: 0.2,
};

export default IconShangpin;
