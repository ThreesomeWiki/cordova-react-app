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

const IconZhibo: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1079 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M630.784 536.243c0-113.877-92.535-206.182-206.686-206.182s-206.677 92.305-206.677 206.182 92.527 206.165 206.677 206.165 206.686-92.287 206.686-206.165z m374.502-239.326v481.425c0 16.299-6.391 30.106-19.174 41.438-11.367 9.216-24.508 13.824-39.416 13.824-13.491 0-25.574-4.25-36.215-12.749L766.643 710.332v38.246c0 33.298-11.896 61.824-35.678 85.556-23.808 23.73-52.395 35.6-85.768 35.6h-449.57c-33.382 0-61.96-11.87-85.751-35.6-23.8-23.732-35.695-52.259-35.695-85.556v-416.58c0-33.297 11.904-61.816 35.695-85.564 23.79-23.73 52.369-35.6 85.751-35.6h449.57c33.374 0 61.97 11.87 85.769 35.6 23.782 23.749 35.677 52.258 35.677 85.564v32.939l143.821-110.541c10.659-8.491 22.742-12.732 36.233-12.732 16.341 0 30.174 5.495 41.532 16.46 11.374 11 17.058 23.928 17.058 38.793zM366.191 404.266l172.962 129.399-172.962 129.408V404.267z"
        fill={getIconColor(color, 0, '#8A8A8A')}
      />
    </svg>
  );
};

IconZhibo.defaultProps = {
  size: 0.2,
};

export default IconZhibo;
