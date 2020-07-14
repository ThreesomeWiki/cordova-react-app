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

const IconJilu: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M438.77 288.03H259.7v89.53h179.07v-89.53zM707.38 467.1H259.7v89.53h447.67V467.1zM80.63 64.19v895.35h805.81V64.19H80.63zM796.91 870H170.17V153.73h626.74V870z m-89.53-223.83H259.7v89.53h447.67v-89.53z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconJilu.defaultProps = {
  size: 0.2,
};

export default IconJilu;
