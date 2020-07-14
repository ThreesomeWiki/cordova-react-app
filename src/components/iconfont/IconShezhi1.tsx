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

const IconShezhi1: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M943.8 474.6L759.3 155c-13-22.6-37.3-36.6-63.4-36.6h-369c-26.1 0-50.4 14-63.4 36.6L78.9 474.6c-13 22.6-13 50.6 0 73.2l184.5 319.6c13 22.6 37.3 36.6 63.4 36.6h369c26.1 0 50.4-14 63.4-36.6l184.5-319.6c13.1-22.6 13.1-50.6 0.1-73.2z m-55.4 41.2L703.9 835.4c-1.6 2.8-4.7 4.6-8 4.6h-369c-3.3 0-6.4-1.8-8-4.6L134.3 515.8c-1.6-2.8-1.6-6.4 0-9.2L318.8 187c1.6-2.8 4.7-4.6 8-4.6h369c3.3 0 6.4 1.8 8 4.6l184.5 319.6c1.7 2.8 1.7 6.4 0.1 9.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M510.5 319.7c-106.1 0-192.4 86.3-192.4 192.4s86.3 192.4 192.4 192.4c106.1 0 192.4-86.3 192.4-192.4s-86.3-192.4-192.4-192.4z m0 320.9c-70.8 0-128.4-57.6-128.4-128.4s57.6-128.4 128.4-128.4 128.4 57.6 128.4 128.4-57.6 128.4-128.4 128.4z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconShezhi1.defaultProps = {
  size: 0.2,
};

export default IconShezhi1;
