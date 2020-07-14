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

const IconJiantouArrow: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M1024 512C1024 229.236 794.764 0 512 0S0 229.236 0 512s229.236 512 512 512 512-229.236 512-512zM550.307 268.567l66.094 66.095-180.968 181.062L632.599 712.89l-65.815 65.815-263.308-263.307 246.83-246.83z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconJiantouArrow.defaultProps = {
  size: 0.2,
};

export default IconJiantouArrow;
