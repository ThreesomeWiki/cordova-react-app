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

const IconDown: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M1004.55981005 247.58102834c-18.20140024-18.20140024-47.87217593-18.20140024-66.07357615 0L513.24667127 672.19725534 88.13177571 247.58102834c-18.20140024-18.20140024-47.87217593-18.20140024-66.07357615 0-18.20140024 18.20140024-18.20140024 47.87217593 0 66.0735761l454.66100413 454.03766853c0.99733698 1.24667127 2.11934113 2.49334249 3.36601237 3.74001371 9.10070011 9.10070011 21.19341122 13.71338369 33.28612232 13.58871661 12.0927111 0 24.06075508-4.4880165 33.2861223-13.58871661 1.24667127-1.24667127 2.24400826-2.36867538 3.36601239-3.74001371l454.66100412-454.03766853c17.95206596-18.20140024 17.95206596-47.87217593-0.12466714-66.0735761z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconDown.defaultProps = {
  size: 0.2,
};

export default IconDown;
