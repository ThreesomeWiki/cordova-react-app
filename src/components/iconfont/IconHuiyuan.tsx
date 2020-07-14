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

const IconHuiyuan: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m307.2-716.8h-256v102.4h33.946C568.525 479.386 539.853 548.096 512 613.53c-27.853-65.434-56.525-134.144-85.146-203.93H460.8V307.2h-256v102.4h111.616C421.325 666.573 512 870.4 512 870.4s90.624-203.827 195.584-460.8H819.2V307.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconHuiyuan.defaultProps = {
  size: 0.2,
};

export default IconHuiyuan;
