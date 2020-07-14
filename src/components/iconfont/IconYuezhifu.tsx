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

const IconYuezhifu: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M511.998 2.621C230.675 2.621 2.622 230.675 2.622 511.997c0 281.327 228.054 509.382 509.376 509.382 281.327 0 509.382-228.054 509.382-509.382-0.001-281.322-228.055-509.376-509.382-509.376zM680.153 575.71c22.603 0 41.109 18.506 41.109 41.11s-18.505 41.11-41.109 41.11H553.108v105.964c0 22.603-18.5 41.11-41.109 41.11-22.603 0-41.106-18.506-41.106-41.11V657.93H343.939c-22.603 0-41.106-18.506-41.106-41.11s18.501-41.11 41.106-41.11h127.049v-60.756H343.939c-22.603 0-41.106-18.501-41.106-41.106 0-22.609 18.501-41.109 41.106-41.109h91.279L324.864 304.07c-14.685-17.165-12.684-43.206 4.485-57.892 17.169-14.69 43.206-12.688 57.895 4.481L512.092 396.21l124.852-145.551c14.69-17.169 40.727-19.17 57.897-4.481 17.169 14.687 19.17 40.727 4.479 57.892L588.968 432.739h91.279c22.603 0 41.109 18.5 41.109 41.109 0 22.603-18.505 41.106-41.109 41.106H553.106v60.756h127.045z m0 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconYuezhifu.defaultProps = {
  size: 0.2,
};

export default IconYuezhifu;
