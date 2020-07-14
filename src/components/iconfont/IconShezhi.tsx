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

const IconShezhi: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M660.8 912.3H363.2c-50.7 0-97.9-27.3-123.3-71.2L91.1 583.4c-25.3-43.9-25.3-98.4 0-142.3l148.8-257.8c25.3-43.9 72.6-71.2 123.3-71.2h297.7c50.7 0 97.9 27.3 123.3 71.2L933 441.1c25.3 43.9 25.3 98.4 0 142.3L784.1 841.2c-25.3 43.9-72.6 71.1-123.3 71.1zM363.2 192.1c-22.2 0-42.9 11.9-54 31.2L160.3 481.1c-11.1 19.2-11.1 43.1 0 62.3l148.8 257.8c11.1 19.2 31.8 31.2 54 31.2h297.7c22.2 0 42.9-11.9 54-31.2l148.8-257.8c11.1-19.2 11.1-43.1 0-62.3L714.8 223.3c-11.1-19.2-31.8-31.2-54-31.2H363.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M512 655.9c-79.2 0-143.6-64.4-143.6-143.6 0-79.2 64.4-143.6 143.6-143.6S655.6 433 655.6 512.2 591.2 655.9 512 655.9z m0-207.3c-35.1 0-63.6 28.5-63.6 63.6s28.5 63.6 63.6 63.6 63.6-28.5 63.6-63.6-28.5-63.6-63.6-63.6z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconShezhi.defaultProps = {
  size: 0.2,
};

export default IconShezhi;
