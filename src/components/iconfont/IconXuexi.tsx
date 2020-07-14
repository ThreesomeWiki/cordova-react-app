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

const IconXuexi: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M942.162 357.827v157.655l35.922 43.622-69.448 62.874-63.877-62.874 38.318-44.442V383.795C677.888 471.04 621.998 498.708 576.512 519.68c-45.507 20.972-78.234 20.972-123.74 3.359-44.728-17.613-249.918-98.96-356.885-151.798-71.065-35.226-75.858-57.877 1.577-88.064C198.062 243.773 354.53 180.04 442.368 145.654c51.896-21.811 79.831-33.546 127.734-9.216 85.442 36.884 270.663 112.353 368.066 154.296 84.644 38.564 27.956 51.16 3.994 67.093zM586.875 585.093c49.5-20.971 116.572-56.197 190.013-88.883v259.953S682.68 860.16 515.81 860.16c-178.831 0-275.456-103.997-275.456-103.997v-243.2c56.71 23.49 119.767 44.441 196.403 71.27 47.125 18.473 107.008 24.33 150.119 0.86z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconXuexi.defaultProps = {
  size: 0.2,
};

export default IconXuexi;
