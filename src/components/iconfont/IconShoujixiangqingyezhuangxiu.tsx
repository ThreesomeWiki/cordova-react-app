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

const IconShoujixiangqingyezhuangxiu: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M331.089 429.327H696.56V511.1H331.09v-81.772zM331.089 277.179H696.56v81.772H331.09V277.18zM331.089 581.475H696.56v81.773H331.09v-81.773z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M160.869 98.636s-0.706-3.295-0.482-7.865c0.505-10.332 5.766-27.18 34.693-27.18H825.894s38.383-8.344 39.217 35.045v745.407L748.294 953.63s-13.351 12.795-36.714-4.45l-91.786-94.01-96.236 94.01s-20.582 15.019-37.27 1.112l-97.349-95.122-92.34 93.454s-22.252 13.351-37.272-2.224l-98.986-102.911m81.744-695.9l-3.616 695.343 41.304 37.548L381.57 774.092c13.352-12.516 22.53-1.669 22.53-1.669L514.66 884.235l105.97-118.07c11.265-10.43 16.27-1.25 16.27-1.25l95.54 119.32 56.463-55.766v-680.88H240.416m167.002-48.953c-6.682 0-12.098 5.418-12.098 12.099s5.417 12.099 12.098 12.099c6.682 0 12.099-5.418 12.099-12.099s-5.417-12.099-12.099-12.099z m221.537 12.099c0-6.682-5.418-12.099-12.099-12.099h-170.22c-6.683 0-12.1 5.418-12.1 12.099 0 6.682 5.418 12.099 12.1 12.099h170.22c6.681 0 12.099-5.417 12.099-12.099z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconShoujixiangqingyezhuangxiu.defaultProps = {
  size: 0.2,
};

export default IconShoujixiangqingyezhuangxiu;
