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

const IconHuowu: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M1020.221 259.023l0.058-0.015L512.669 6.225 5.979 258.526H5.03v505.963l507.64 252.79 507.61-252.79V259.023h-0.059zM512.67 67.442l381.637 190.562-145.21 72.977L365.44 140.977l147.23-73.535zM298.95 176.851l388.577 186.487L512.67 447.52 131.028 259.008l167.922-82.157zM68.455 322.952l20.27-0.025-20.27-0.697v-31.655l412.419 205.343v442.368L68.454 732.933v-409.98z m888.427 30.838v379.144l-412.42 205.352V495.918l412.419-205.344v63.216z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconHuowu.defaultProps = {
  size: 0.2,
};

export default IconHuowu;
