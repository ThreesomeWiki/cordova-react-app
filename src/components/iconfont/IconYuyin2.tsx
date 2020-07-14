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

const IconYuyin2: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M250.823 256c0-141.369 110.933-256 247.751-256 136.818 0 247.751 114.631 247.751 256v170.667c0 141.369-110.933 256-247.75 256-136.819 0-247.752-114.631-247.752-256V256zM498.574 85.333c-91.25 0-165.205 76.402-165.205 170.667v170.667c0 94.265 73.955 170.666 165.148 170.666 91.222 0 165.177-76.401 165.177-170.666V256c0-94.265-73.955-170.667-165.177-170.667z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M122.197 469.618c22.642-2.674 43.122 14.08 45.739 37.461C183.751 648.676 321.052 768 498.546 768c177.55 0 314.823-119.324 330.638-260.892a42.61 42.61 0 0 1 24.377-35.272 40.192 40.192 0 0 1 41.671 5.007c11.947 9.358 18.062 24.69 15.929 40.078-21.59 193.792-202.837 336.412-412.615 336.412-209.75 0-390.97-142.592-412.587-336.44-2.617-23.382 13.597-44.516 36.238-47.275z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M496.498 768c22.812 0 41.301 19.115 41.301 42.667v170.666c0 23.552-18.489 42.667-41.301 42.667-22.813 0-41.302-19.115-41.302-42.667V810.667c0-23.552 18.49-42.667 41.302-42.667z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <path
        d="M290.048 981.333c0-23.552 18.489-42.666 41.273-42.666h330.325c14.763 0 28.388 8.135 35.783 21.333 7.367 13.198 7.367 29.468 0 42.667-7.395 13.198-21.02 21.333-35.783 21.333H331.321c-22.784 0-41.273-19.115-41.273-42.667z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </svg>
  );
};

IconYuyin2.defaultProps = {
  size: 0.2,
};

export default IconYuyin2;
