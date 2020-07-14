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

const IconLishijilu: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M974.755 315.345c108.614 232.914 7.843 509.79-225.094 618.403A465.455 465.455 0 0 1 230.4 847.546a46.545 46.545 0 0 1 64.489-67.118 372.364 372.364 0 0 0 415.418 68.957C896.652 762.508 977.268 541.02 890.39 354.676c-86.9-186.344-308.387-266.938-494.755-180.06a371.805 371.805 0 0 0-188.462 199.377l63.069 5.306a23.273 23.273 0 0 1 17.198 36.468l-123.857 178.27a46.313 46.313 0 0 1-41.588 19.781 41.635 41.635 0 0 1-35.77-26.926l-73.333-195.84a23.273 23.273 0 0 1 23.738-31.372l74.473 6.26A464.896 464.896 0 0 1 356.305 90.252c232.96-108.637 509.836-7.867 618.45 225.07z m-445.021-82.618a46.545 46.545 0 0 1 46.406 43.055l0.14 3.49V508.16l139.473 79.802a46.545 46.545 0 0 1 18.967 60.277l-1.676 3.258a46.545 46.545 0 0 1-60.276 18.944l-3.258-1.676-151.18-86.481a69.818 69.818 0 0 1-35.002-55.925l-0.14-4.678V279.273a46.545 46.545 0 0 1 46.546-46.546z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconLishijilu.defaultProps = {
  size: 0.2,
};

export default IconLishijilu;
