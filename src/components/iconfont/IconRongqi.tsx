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

const IconRongqi: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M250.5 321.7c-4.5 2.5-8.2 6.2-10.7 10.7-7.5 13.4-2.6 30.4 10.8 37.9l228.5 126.9c16.6 9.2 36.7 9.3 53.5 0.3L769.3 370c4.6-2.5 8.4-6.2 11-10.7 7.6-13.4 2.9-30.4-10.4-38L539.4 190c-17-9.7-37.8-9.7-54.9-0.1l-234 131.8zM538.4 119l308.2 173.7c16.9 9.5 27.3 27.4 27.4 46.7v345.1c0 19.4-10.5 37.2-27.3 46.7L538.4 905.1c-16.4 9.2-36.4 9.2-52.8 0L177.4 731.2c-16.9-9.5-27.3-27.4-27.3-46.8v-345c0-19.4 10.5-37.3 27.4-46.8l308.2-173.7c16.3-9.2 36.3-9.2 52.7 0.1z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconRongqi.defaultProps = {
  size: 0.2,
};

export default IconRongqi;
