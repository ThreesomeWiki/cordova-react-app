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

const IconJia11: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512.1546875 961.690625c-25.95058594 0-51.28242188-5.62324219-51.28242188-32.86669922V557.72949219H94.92294922C74.03310547 557.72949219 62 538.04902345 62 512.7453125c0-23.39208985 8.85673828-45.51855469 30.92695313-45.51855469h373.54042968V100.5734375C466.46738281 75.91835938 484.82685547 62 512.0421875 62c25.30371094 0 44.98417969 11.24648437 44.98417969 32.86669922v366.06181641h378.06767578c25.30371094 0 26.59658203 30.33632813 26.59658203 51.22617187s-6.97236327 44.98417969-32.27607422 44.98417969H557.11074219v371.71318359c0.646875 21.45234375-18.97734375 32.83857422-44.95605469 32.83857422z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconJia11.defaultProps = {
  size: 0.2,
};

export default IconJia11;
