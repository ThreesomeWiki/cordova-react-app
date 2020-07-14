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

const IconYuyin1: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M674.806 77.126a46.008 46.008 0 0 0-66.176 0 46.008 46.008 0 0 0 0 63.025 520.588 520.588 0 0 1 0 735.504 47.269 47.269 0 0 0 0 66.807 47.269 47.269 0 0 0 66.807 0 614.496 614.496 0 0 0-0.63-865.336z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M467.453 242.882a47.269 47.269 0 0 0-63.025 0 46.639 46.639 0 0 0 0 63.026 299.37 299.37 0 0 1 0 422.268 47.269 47.269 0 0 0 0 63.026 46.639 46.639 0 0 0 63.025 0 393.908 393.908 0 0 0 0-548.32z m-277.31 214.916a78.151 78.151 0 0 0 0 110.925 78.782 78.782 0 1 0 0-110.925z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconYuyin1.defaultProps = {
  size: 0.2,
};

export default IconYuyin1;
