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

const IconXinshouzhidao: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M702.82789044 90.125H263.79664072A95.57812463 95.57812463 0 0 0 168.45289072 186.12499963v651.56250037a95.62499973 95.62499973 0 0 0 95.34375 95.99999963h439.1249999a152.99999973 152.99999973 0 0 0 152.71875001-153.37499963V243.49999963A153.04687482 153.04687482 0 0 0 702.82789044 90.125zM397.39039045 166.95312509h114.60937554v277.35937454l-37.50000073-22.68749981a37.92187491 37.92187491 0 0 0-39.28124927-1e-8l-37.50000073 22.68749982zM779.14039035 780.59374973a76.50000027 76.50000027 0 0 1-76.359375 76.68750064H263.79664072a19.12500027 19.12500027 0 0 1-19.03125009-19.31250064v-651.56249954a19.03125009 19.03125009 0 0 1 19.03125009-19.31249982H321.17164072v345.0468749a38.15625037 38.15625037 0 0 0 57.796875 32.81249982l75.74999963-45.75000036 75.79687555 45.75000036a38.20312463 38.20312463 0 0 0 57.796875-32.81249982V166.95312509h114.60937472a76.50000027 76.50000027 0 0 1 76.359375 76.68749982z"
        fill={getIconColor(color, 0, '#42BCA3')}
      />
    </svg>
  );
};

IconXinshouzhidao.defaultProps = {
  size: 0.2,
};

export default IconXinshouzhidao;
