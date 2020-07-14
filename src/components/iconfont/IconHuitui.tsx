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

const IconHuitui: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M355.46788431 512L730.40759298 137.06167216c23.00756979-23.00756979 23.00756979-60.31098463-1e-8-83.31993525-23.00756979-23.00756979-60.31236547-23.00756979-83.31993525 0l-416.59829548 416.5996763c-23.00756979 23.00618894-23.00756979 60.31098463 0 83.31855442l416.59967632 416.59829547c23.00618894 23.00756979 60.31098463 23.00756979 83.31855441-1e-8 23.00756979-23.00895063 23.00756979-60.31236547 1e-8-83.31993525L355.46788431 512z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconHuitui.defaultProps = {
  size: 0.2,
};

export default IconHuitui;
