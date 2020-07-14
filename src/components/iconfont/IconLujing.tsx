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

const IconLujing: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1055 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M987.48895713 397.50294834a66.85845557 66.85845557 0 0 0-53.53216436-43.86459463l-241.68924316-35.93736563-105.04357559-218.13455654a67.87773369 67.87773369 0 0 0-121.46331006 0L360.66812802 317.70098808 118.92992363 353.6428045A66.76498388 66.76498388 0 0 0 65.45562208 397.50294834a64.06767862 64.06767862 0 0 0 15.57849638 66.31988379l177.149758 176.8515416-41.07381767 245.35241543a64.56173994 64.56173994 0 0 0 27.52052608 63.96085459 68.25161778 68.25161778 0 0 0 71.09580674 3.80115352l210.73254521-113.4515127 210.75925078 113.4515127a68.71452188 68.71452188 0 0 0 71.09580674-3.80115352 64.59289717 64.59289717 0 0 0 27.4938205-63.95195302l-41.10497578-245.33461055c194.70449795-194.35732031 200.71779786-219.96391729 192.79056885-243.1847795z"
        fill={getIconColor(color, 0, '#00B175')}
      />
    </svg>
  );
};

IconLujing.defaultProps = {
  size: 0.2,
};

export default IconLujing;
