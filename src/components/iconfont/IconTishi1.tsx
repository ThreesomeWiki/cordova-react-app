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

const IconTishi1: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 127.322c-212.088 0-384.019 171.915-384.019 384.018 0 212.07 171.932 384.018 384.018 384.018S896.018 723.41 896.018 511.34c0-212.103-171.931-384.018-384.019-384.018z m0 589.633c-24.735 0-44.775-20.025-44.775-44.687 0-24.666 20.04-44.655 44.774-44.655s44.792 19.99 44.792 44.655c0 24.662-20.057 44.687-44.792 44.687z m44.79-193.577c0 24.664-20.057 44.67-44.79 44.67s-44.775-20.007-44.775-44.67V314.9c0-24.664 20.04-44.654 44.774-44.654s44.792 19.99 44.792 44.654v208.478z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconTishi1.defaultProps = {
  size: 0.2,
};

export default IconTishi1;
