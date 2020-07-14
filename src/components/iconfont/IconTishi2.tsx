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

const IconTishi2: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 884.82702222a372.82702222 372.82702222 0 1 0 0-745.65404444 372.82702222 372.82702222 0 0 0 0 745.65404444z m0 82.85085393c-251.65824 0-455.67787615-204.01963615-455.67787615-455.67787615S260.34176 56.32212385 512 56.32212385 967.67787615 260.34176 967.67787615 512 763.65824 967.67787615 512 967.67787615z m-41.42482015-497.1026963h82.8496403V760.55134815h-82.8496403V470.57517985z m103.56265718-124.27567407a62.13783703 62.13783703 0 1 1-124.31693748-0.04126341 62.13783703 62.13783703 0 0 1 124.31693748 0.04126341z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconTishi2.defaultProps = {
  size: 0.2,
};

export default IconTishi2;
