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

const IconAixin: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 984.27822931c-16.46049223 0-31.65348779-5.06513969-44.94887359-15.82674389-10.76281597-8.86399445-273.49088461-212.08151878-378.58162737-377.31655419-34.81980599-54.44419287-82.93378601-128.51519619-82.933786-233.60715068 0-175.3628913 131.04776602-317.80600986 291.21645002-317.80600986 81.66750107 0 159.5361474 37.35237582 215.24783694 102.55938465 55.07794122-65.84075718 132.31405095-102.55938466 214.61408861-102.55938465 160.80243231 0 291.21766175 142.44311857 291.21766177 317.8072216 0 103.19192126-44.94887359 174.09660636-81.66750109 231.70711743l-1.26628493 1.89882151c-105.0919545 165.23503542-367.82002314 369.08630807-378.5828391 377.31655419-12.66163748 10.12906763-27.85463302 15.82553214-44.31512526 15.82553214z"
        fill={getIconColor(color, 0, '#E5404F')}
      />
    </svg>
  );
};

IconAixin.defaultProps = {
  size: 0.2,
};

export default IconAixin;
