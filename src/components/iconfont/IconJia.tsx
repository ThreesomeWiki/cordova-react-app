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

const IconJia: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m204.8 563.2H563.2v153.6c0 30.72-20.48 51.2-51.2 51.2s-51.2-20.48-51.2-51.2V563.2H307.2c-30.72 0-51.2-20.48-51.2-51.2 0-30.72 20.48-51.2 51.2-51.2h153.6V307.2c0-30.72 20.48-51.2 51.2-51.2s51.2 20.48 51.2 51.2v153.6h153.6c30.72 0 51.2 20.48 51.2 51.2 0 30.72-20.48 51.2-51.2 51.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconJia.defaultProps = {
  size: 0.2,
};

export default IconJia;
