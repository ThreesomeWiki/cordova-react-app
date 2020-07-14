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

const IconIcAddPx: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M951.85055395 574.78895319h-377.06160076v377.06160076H449.12907714v-377.06160076h-377.06160073V449.12907714h377.06160073v-377.06160073h125.65987605v377.06160073h377.06160076z"
        fill={getIconColor(color, 0, '#494A4A')}
      />
    </svg>
  );
};

IconIcAddPx.defaultProps = {
  size: 0.2,
};

export default IconIcAddPx;
