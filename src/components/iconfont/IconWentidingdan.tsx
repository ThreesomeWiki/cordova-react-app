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

const IconWentidingdan: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M467 782h90v-90H467zM512 62a450 450 0 1 0 450 450 450 450 0 0 0-450-450z m0 810A360 360 0 1 1 872 512 360.5000001 360.5000001 0 0 1 512 872zM512 242a180 180 0 0 0-180 180h90a90 90 0 0 1 180 0c0 90-135 78.75-135 225h90c0-101.25 135-112.5 135-225A180 180 0 0 0 512 242z m0 0"
        fill={getIconColor(color, 0, '#494A4A')}
      />
    </svg>
  );
};

IconWentidingdan.defaultProps = {
  size: 0.2,
};

export default IconWentidingdan;
