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

const IconJian: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M929.70453333 554.3552H113.1744c-25.00053333 0-45.38986667-20.26666667-45.38986667-45.3888s20.26773333-45.38986667 45.38986667-45.38986667h816.53013333c25.00053333 0 45.38986667 20.26666667 45.38986667 45.38986667s-20.26666667 45.3888-45.38986667 45.3888z"
        fill={getIconColor(color, 0, '#4D4D4D')}
      />
    </svg>
  );
};

IconJian.defaultProps = {
  size: 0.2,
};

export default IconJian;
