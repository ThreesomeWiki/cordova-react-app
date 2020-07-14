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

const IconYinhangka: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M960.4 345.4v-13.2c0-82.4-67-149.4-149.4-149.4H213.6c-82.4 0-149.4 67-149.4 149.4v13.2h896.2zM64.2 478v215.5c0 82.4 67 149.4 149.4 149.4H811c82.4 0 149.4-67 149.4-149.4V478H64.2z m770.7 142.7l-36 63.4c-4.4 7.8-12.7 12.6-21.7 12.6H621.7c-19.1 0-31.1-20.6-21.7-37.2l36-63.4c4.4-7.8 12.7-12.6 21.7-12.6h155.5c19.1 0 31.1 20.6 21.7 37.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconYinhangka.defaultProps = {
  size: 0.2,
};

export default IconYinhangka;
