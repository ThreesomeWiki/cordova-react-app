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

const IconWeidengluTouxiang: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M363.776 551.68a239.104 239.104 0 0 0 297.216-0.512c161.92 82.624 184.512 234.112 189.248 284.544A468.8 468.8 0 0 0 982.656 508.8a470.656 470.656 0 1 0-941.312 0.064c0 127.104 50.624 242.24 132.48 326.912 4.736-48.512 28.672-201.152 189.952-284.096zM512 177.6c102.016 0 184.96 82.944 184.96 184.896S614.016 547.328 512 547.328c-101.952 0-184.896-82.816-184.896-184.832S410.048 177.6 512 177.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconWeidengluTouxiang.defaultProps = {
  size: 0.2,
};

export default IconWeidengluTouxiang;
