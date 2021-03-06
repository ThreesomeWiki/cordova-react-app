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

const IconHuanyipi: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 972.8c-199.68 0-368.64-128-435.2-307.2H307.2v-51.2H0v307.2h51.2v-184.32c81.92 168.96 256 286.72 460.8 286.72 245.76 0 455.68-174.08 501.76-409.6h-51.2c-46.08 204.8-230.4 358.4-450.56 358.4zM972.8 102.4v184.32C890.88 117.76 716.8 0 512 0 266.24 0 56.32 174.08 10.24 409.6h51.2c46.08-204.8 230.4-358.4 450.56-358.4 199.68 0 368.64 128 435.2 307.2H716.8v51.2h307.2V102.4h-51.2z"
        fill={getIconColor(color, 0, '#666666')}
      />
    </svg>
  );
};

IconHuanyipi.defaultProps = {
  size: 0.2,
};

export default IconHuanyipi;
