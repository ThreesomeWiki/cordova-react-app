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

const IconYuyin: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M983.8 312.7C958 251.7 921 197 874 150c-47-47-101.8-83.9-162.7-109.7C648.2 13.5 581.1 0 512 0S375.8 13.5 312.7 40.2C251.7 66 197 102.9 150 150c-47 47-83.9 101.8-109.7 162.7C13.5 375.8 0 442.9 0 512s13.5 136.2 40.2 199.3C66 772.3 102.9 827 150 874c47 47 101.8 83.9 162.7 109.7 63.1 26.7 130.2 40.2 199.3 40.2s136.2-13.5 199.3-40.2C772.3 958 827 921 874 874c47-47 83.9-101.8 109.7-162.7 26.7-63.1 40.2-130.2 40.2-199.3s-13.4-136.2-40.1-199.3z m-55.3 375.2c-22.8 53.8-55.4 102.2-96.9 143.7s-89.9 74.1-143.7 96.9C632.2 952.1 573 964 512 964s-120.2-11.9-175.9-35.5c-53.8-22.8-102.2-55.4-143.7-96.9s-74.1-89.9-96.9-143.7C71.9 632.2 60 573 60 512s11.9-120.2 35.5-175.9c22.8-53.8 55.4-102.2 96.9-143.7s89.9-74.1 143.7-96.9C391.8 71.9 451 60 512 60s120.2 11.9 175.9 35.5c53.8 22.8 102.2 55.4 143.7 96.9s74.1 89.9 96.9 143.7C952.1 391.8 964 451 964 512s-11.9 120.2-35.5 175.9z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M264 416c-16.5 0-30 13.5-30 30v132c0 16.5 13.5 30 30 30s30-13.5 30-30V446c0-16.5-13.5-30-30-30z m124-64c-16.5 0-30 13.5-30 30v260c0 16.5 13.5 30 30 30s30-13.5 30-30V382c0-16.5-13.5-30-30-30z m124-96c-16.5 0-30 13.5-30 30v452c0 16.5 13.5 30 30 30s30-13.5 30-30V286c0-16.5-13.5-30-30-30z m248 160c-16.5 0-30 13.5-30 30v132c0 16.5 13.5 30 30 30s30-13.5 30-30V446c0-16.5-13.5-30-30-30z m-124-64c-16.5 0-30 13.5-30 30v260c0 16.5 13.5 30 30 30s30-13.5 30-30V382c0-16.5-13.5-30-30-30z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconYuyin.defaultProps = {
  size: 0.2,
};

export default IconYuyin;
