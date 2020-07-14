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

const IconShanchu: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M202.667 256H160a32 32 0 0 1 0-64h704a32 32 0 0 1 0 64H266.667v565.333A53.333 53.333 0 0 0 320 874.667h384a53.333 53.333 0 0 0 53.333-53.334V352a32 32 0 0 1 64 0v469.333c0 64.8-52.533 117.334-117.333 117.334H320c-64.8 0-117.333-52.534-117.333-117.334V256z m224-106.667a32 32 0 0 1 0-64h170.666a32 32 0 0 1 0 64H426.667z m-32 288a32 32 0 0 1 64 0v256a32 32 0 0 1-64 0v-256z m170.666 0a32 32 0 0 1 64 0v256a32 32 0 0 1-64 0v-256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconShanchu.defaultProps = {
  size: 0.2,
};

export default IconShanchu;
