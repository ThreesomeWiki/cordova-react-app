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

const IconLianxifangshilogo: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m203.776 799.136c-0.8 0.192-2.656 0.512-6.048 0.512-42.144 0-172.704-43.52-307.296-178.048-150.336-150.272-183.136-291.072-177.92-313.504 12.704-54.752 64.736-83.776 82.112-84.448 16.832 13.376 90.176 118.4 91.2 140.576 0.48 10.528-12.864 32.256-22.624 48.128-14.016 22.816-25.088 40.8-20.736 56.032 11.488 40.128 39.328 83.712 78.336 122.72 40.64 40.608 81.632 66.848 121.856 77.984l1.184 0.32c2.144 0.608 4.448 0.928 6.816 0.928 13.376 0 28.992-9.664 48.704-21.92 16.352-10.144 36.736-22.784 47.968-22.784 22.368 0.992 129.056 75.552 140.608 91.04 1.088 13.408-27.2 69.088-84.16 82.464z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconLianxifangshilogo.defaultProps = {
  size: 0.2,
};

export default IconLianxifangshilogo;
