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

const IconTongzhi: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1184 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M670.432 1024a92.96 92.96 0 0 1-50.24-14.976L355.52 841.12c-1.184-0.832-2.528-1.696-3.584-2.56a68.608 68.608 0 0 0-33.152-8.736H134.72C60.48 829.824 0 758.4 0 670.752V353.376c0-87.776 60.48-159.04 134.72-159.04h184.064a69.792 69.792 0 0 0 37.536-11.424L620.992 14.976a92.064 92.064 0 0 1 98.528-1.28A124.8 124.8 0 0 1 775.744 121.6l-0.384 184.32-0.416 596.48a125.248 125.248 0 0 1-56.224 107.968A93.088 93.088 0 0 1 670.432 1024z m357.376-180.48a45.056 45.056 0 0 1-33.024-14.56 51.936 51.936 0 0 1 0-70.144 365.312 365.312 0 0 0 0-493.664 51.936 51.936 0 0 1 0-70.144 44.8 44.8 0 0 1 65.92 0 469.024 469.024 0 0 1 0 633.952 44.576 44.576 0 0 1-32.896 14.56z m0 0l-157.12-114.592a45.056 45.056 0 0 1-33.024-14.528 51.936 51.936 0 0 1 0-70.144 195.936 195.936 0 0 0 0-264.608 51.936 51.936 0 0 1 0-70.144 44.8 44.8 0 0 1 65.92 0 299.84 299.84 0 0 1 0 404.896 44.576 44.576 0 0 1-32.896 14.528z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconTongzhi.defaultProps = {
  size: 0.2,
};

export default IconTongzhi;
