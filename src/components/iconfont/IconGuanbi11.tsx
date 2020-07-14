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

const IconGuanbi11: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 4.22171675a502.44494992 502.44494992 0 1 0 502.44494992 502.44494992A502.44494992 502.44494992 0 0 0 512 4.22171675z m199.72186759 346.05895926L555.96393311 506.66666667l153.87376593 153.8737659a31.40280939 31.40280939 0 0 1 0 42.07976457 31.40280939 31.40280939 0 0 1-42.70782075 0L512 551.25865598 356.87012171 705.76047808a30.77475318 30.77475318 0 0 1-43.96393312-43.96393312L466.77995451 506.66666667 312.27813241 352.16484456a31.40280939 31.40280939 0 0 1 0-44.5919893 30.14669699 30.14669699 0 0 1 43.96393311 0L512 462.07467736l155.75793448-155.12987828a31.40280939 31.40280939 0 0 1 44.5919893 0 31.40280939 31.40280939 0 0 1 0 43.96393311z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconGuanbi11.defaultProps = {
  size: 0.2,
};

export default IconGuanbi11;
