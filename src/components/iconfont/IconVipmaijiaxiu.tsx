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

const IconVipmaijiaxiu: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M984.96 374.4L837.12 81.28a64 64 0 0 0-56.96-35.2h-521.6c-23.04 0-44.8 12.8-55.68 33.28L40.32 371.84c-12.8 22.4-10.24 50.56 5.76 71.04l410.24 511.36c12.16 14.72 30.08 23.68 49.28 23.68h0.64c19.2 0 37.12-8.32 49.28-23.04l421.76-511.36c16-19.2 19.2-46.72 7.68-69.12zM506.88 812.8L172.8 396.16l123.52-222.72h444.16l111.36 220.8L506.88 812.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M622.08 318.08L507.52 472.32l-108.8-152.96a62.976 62.976 0 0 0-88.96-14.72c-28.8 20.48-35.84 60.16-15.36 88.96l159.36 224.64c12.16 16.64 30.72 26.88 51.2 26.88h0.64a64 64 0 0 0 51.2-25.6l167.68-224.64a63.744 63.744 0 0 0-13.44-89.6 63.488 63.488 0 0 0-88.96 12.8z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconVipmaijiaxiu.defaultProps = {
  size: 0.2,
};

export default IconVipmaijiaxiu;
