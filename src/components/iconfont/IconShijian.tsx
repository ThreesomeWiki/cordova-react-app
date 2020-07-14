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

const IconShijian: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M923.4 339.2c-22.6-53.3-54.8-101.2-96-142.3-41.1-41.1-89-73.4-142.3-96-55.2-23.4-113.8-35.2-174.3-35.2s-119.1 11.8-174.3 35.2c-53.3 22.6-101.2 54.8-142.3 96-41.1 41.1-73.4 89-96 142.3C74.8 394.4 63 453.1 63 513.5s11.8 119.1 35.2 174.3c22.6 53.3 54.8 101.2 96 142.3 41.1 41.1 89 73.4 142.3 96 55.2 23.4 113.9 35.2 174.3 35.2 60.4 0 119.1-11.8 174.3-35.2 53.3-22.6 101.2-54.8 142.3-96 41.1-41.1 73.4-89 96-142.3 23.4-55.2 35.2-113.9 35.2-174.3 0-60.4-11.8-119.1-35.2-174.3zM510.8 880.4c-202.3 0-366.9-164.6-366.9-366.9s164.6-366.9 366.9-366.9 366.9 164.6 366.9 366.9-164.5 366.9-366.9 366.9z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M697.5 470.3H554.4V263.2c0-23.6-19.3-42.9-42.9-42.9-23.6 0-42.9 19.3-42.9 42.9v250c0 23.6 19.3 42.9 42.9 42.9h186c23.6 0 42.9-19.3 42.9-42.9-0.1-23.6-19.4-42.9-42.9-42.9z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconShijian.defaultProps = {
  size: 0.2,
};

export default IconShijian;
