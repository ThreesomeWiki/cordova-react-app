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

const IconXiaoxi: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M128 832a32 32 0 0 1 0-64h768a32 32 0 0 1 0 64zM480 96a32 32 0 0 1 64 0v64a32 32 0 0 1-64 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M572.48 811.52A32 32 0 0 1 632 788.48a116.8 116.8 0 0 1 8 43.52 128 128 0 0 1-256 0 116.8 116.8 0 0 1 8-43.52 32 32 0 0 1 59.52 23.04A59.84 59.84 0 0 0 448 832a64 64 0 0 0 128 0 59.84 59.84 0 0 0-3.52-20.48z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M256 800h-64V395.84C192 246.72 337.28 128 512 128a352 352 0 0 1 224 76.48 247.04 247.04 0 0 1 96 192V800h-64V395.84a183.36 183.36 0 0 0-73.28-141.76A288 288 0 0 0 512 192c-142.08 0-256 93.44-256 203.84z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </svg>
  );
};

IconXiaoxi.defaultProps = {
  size: 0.2,
};

export default IconXiaoxi;
