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

const IconTousuzixun1: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 85.333c212.053 0 384 166.87 384 372.736 0 141.568-81.323 264.747-201.13 327.851-59.563 30.635-159.915 81.536-300.929 152.747V812.8C239.573 764.544 128 623.957 128 458.112 128 252.16 299.947 85.333 512 85.333zM314.027 481.835a42.667 42.667 0 0 0 0 60.33 279.979 279.979 0 0 0 395.946 0 42.667 42.667 0 0 0-60.33-60.33 194.645 194.645 0 0 1-275.286 0 42.667 42.667 0 0 0-60.33 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconTousuzixun1.defaultProps = {
  size: 0.2,
};

export default IconTousuzixun1;
