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

const IconYijianfankui: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M360.39 557.544h184.92v30.82H360.39v-30.82z m0-76.562h308.2v30.82h-308.2v-30.82z m0-76.564h308.2v30.82h-308.2v-30.82z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M512 64.021c-247.272 0-447.725 200.452-447.725 447.724S264.728 959.47 512 959.47s447.725-200.453 447.725-447.724S759.27 64.021 511.999 64.021z m249.05 556.136c0 34.042-27.599 61.64-61.64 61.64h-154.1v123.281l-123.28-123.28h-92.46c-34.04 0-61.64-27.6-61.64-61.64v-246.56c0-34.04 27.6-61.64 61.64-61.64h369.84c34.042 0 61.64 27.6 61.64 61.64v246.56z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconYijianfankui.defaultProps = {
  size: 0.2,
};

export default IconYijianfankui;
