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

const IconShaixuan: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M794.102 819.99C759.68 852.247 713.397 872 662.5 872 556.185 872 470 785.815 470 679.5S556.185 487 662.5 487 855 573.185 855 679.5c0 23.663-4.27 46.328-12.08 67.268l99.814 67.842c20.098 13.66 25.316 41.026 11.656 61.124-13.66 20.098-41.026 25.316-61.124 11.656l-99.164-67.4zM84 147c-24.3 0-44-19.7-44-44s19.7-44 44-44h834c24.3 0 44 19.7 44 44s-19.7 44-44 44H84z m0 498.5c-24.3 0-44-19.7-44-44s19.7-44 44-44h251c24.3 0 44 19.7 44 44s-19.7 44-44 44H84z m0-249c-24.3 0-44-19.7-44-44s19.7-44 44-44h834c24.3 0 44 19.7 44 44s-19.7 44-44 44H84z m0 499c-24.3 0-44-19.7-44-44s19.7-44 44-44h251c24.3 0 44 19.7 44 44s-19.7 44-44 44H84zM662.5 784c57.714 0 104.5-46.786 104.5-104.5S720.214 575 662.5 575 558 621.786 558 679.5 604.786 784 662.5 784z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconShaixuan.defaultProps = {
  size: 0.2,
};

export default IconShaixuan;
