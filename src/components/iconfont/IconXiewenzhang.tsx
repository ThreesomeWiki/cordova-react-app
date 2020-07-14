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

const IconXiewenzhang: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M42.5 514.4a469.5 469.5 0 1 0 939 0 469.5 469.5 0 1 0-939 0z"
        fill={getIconColor(color, 0, '#242424')}
      />
      <path
        d="M780.5 737.2c0 22.6-18.3 41-41 41H464.4c-22.6 0-41-18.3-41-41 0-22.6 18.3-41 41-41h275.1c22.6 0.1 41 18.4 41 41z m0-116c0 22.6-18.3 41-41 41H583.4c-22.6 0-41-18.3-41-41 0-22.6 18.3-41 41-41h156.1c22.6 0.1 41 18.4 41 41z m-163.7-206l-267.7 301-113.2 23.4c-6.1 1.3-11.2-3.5-10.3-9.8l16.5-114.1 265.1-297.9c6.1-6.8 16-8 22.1-2.5l87.5 77.8c6.1 5.3 6.1 15.3 0 22.1z m77.2-86.7l-41 46.1c-3.3 3.7-9 4-12.7 0.7L544 289.8c-3.7-3.3-4-9-0.7-12.7l41.1-46.2c14.9-16.7 40.5-18.2 57.2-3.3l49.2 43.7c16.6 14.9 18.1 40.5 3.2 57.2z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </svg>
  );
};

IconXiewenzhang.defaultProps = {
  size: 0.2,
};

export default IconXiewenzhang;
