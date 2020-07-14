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

const IconZu10: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 0A512 512 0 1 1 0 512 512 512 0 0 1 512 0z"
        fill={getIconColor(color, 0, '#00B175')}
      />
      <path
        d="M393.837714 768v-201.142857h113.371429v-176.566857h73.728v58.843428H768v34.340572h-187.062857v83.382857h128.914286a60.16 60.16 0 0 1 38.473142 61.842286v83.346285A54.857143 54.857143 0 0 1 706.194286 768h-312.356572z m73.837715-34.340571h186.038857s20.699429-8.374857 20.699428-23.625143v-79.36a35.218286 35.218286 0 0 0-20.699428-29.257143h-186.038857zM256 768a357.997714 357.997714 0 0 0 17.408-49.042286 365.202286 365.202286 0 0 0 12.141714-69.851428v-322.56h207.945143a75.154286 75.154286 0 0 0-28.452571-31.451429L531.309714 256a178.212571 178.212571 0 0 1 36.864 43.885714 67.693714 67.693714 0 0 1 11.849143 26.550857H768v34.340572H359.387429v140.946286s-3.108571 132.973714-35.913143 192.219428c-10.971429 19.565714-36.571429 55.881143-36.571429 55.881143L266.203429 768z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </svg>
  );
};

IconZu10.defaultProps = {
  size: 0.2,
};

export default IconZu10;
