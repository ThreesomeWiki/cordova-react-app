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

const IconJinru: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M367.95068533 932.95392771l-88.96297142-88.81568174 332.72740471-332.72740472-332.13824595-331.99095629 88.81568173-88.96297141 420.9539277 420.9539277z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconJinru.defaultProps = {
  size: 0.2,
};

export default IconJinru;
