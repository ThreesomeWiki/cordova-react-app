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

const IconJia2: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M832 576H576v256c0 35.328-28.672 64-64 64-35.392 0-64-28.672-64-64V576H192c-35.392 0-64-28.672-64-64s28.608-64 64-64h256V192c0-35.328 28.608-64 64-64 35.328 0 64 28.672 64 64v256h256c35.328 0 64 28.672 64 64s-28.672 64-64 64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconJia2.defaultProps = {
  size: 0.2,
};

export default IconJia2;
