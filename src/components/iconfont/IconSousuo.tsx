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

const IconSousuo: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M950.82 899.62L782.61 731.54c64.647-74.732 100.073-169.116 100.073-268.8 0-109.9-42.796-213.205-120.501-290.78S581.172 51.33 471.402 51.33c-109.899 0-213.204 42.795-290.78 120.5-77.705 77.705-120.5 181.01-120.5 290.78 0 109.9 42.795 213.204 120.5 290.78 77.705 77.705 181.01 120.5 290.78 120.5 90.764 0 177.002-29.22 248.113-83.134l170.15 170.15c8.404 8.403 19.523 12.67 30.642 12.67s22.11-4.267 30.642-12.67c16.809-16.938 16.809-44.348-0.129-61.286zM146.618 462.61c0-179.07 145.713-324.654 324.655-324.654 179.07 0 324.654 145.713 324.654 324.654 0.13 179.07-145.454 324.784-324.525 324.784S146.618 641.68 146.618 462.61z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconSousuo.defaultProps = {
  size: 0.2,
};

export default IconSousuo;
