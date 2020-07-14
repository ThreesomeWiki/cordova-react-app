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

const IconMubiaox: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M85.9 590.77h-7.129a78.77 78.77 0 0 1 0-157.54h7.129A433.664 433.664 0 0 1 433.232 85.899v-7.129a78.77 78.77 0 0 1 157.538 0v7.129A433.664 433.664 0 0 1 938.104 433.23h7.129a78.77 78.77 0 0 1 0 157.538h-7.129A433.664 433.664 0 0 1 590.772 938.102v7.129a78.77 78.77 0 0 1-157.538 0v-7.129A433.664 433.664 0 0 1 85.9 590.77zM512.002 748.307a236.308 236.308 0 1 0 0-472.616 236.308 236.308 0 0 0 0 472.616z m0-78.77a157.538 157.538 0 1 1 0-315.076 157.538 157.538 0 0 1 0 315.076z"
        fill={getIconColor(color, 0, '#1E1E1E')}
      />
    </svg>
  );
};

IconMubiaox.defaultProps = {
  size: 0.2,
};

export default IconMubiaox;
