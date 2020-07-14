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

const IconShouye: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M999.104 450.98L600.035 32.435c-40.64-42.623-107.64-43.327-149.168-1.573L26.05 457.992c-49.706 49.976-24.838 110.289 45.638 109.84l120.296-0.767-35.546-35.309v386.08c0 58.5 47.151 105.99 105.474 105.99h128.081v-70.62H261.912c-19.19 0-34.833-15.754-34.833-35.37v-386.08c0-19.589-15.95-35.433-35.545-35.309l-120.296 0.767c-5.064 0.032-8.343-0.5-9.502-0.988 2.244 0.943 5.348 3.768 7.31 8.527 1.934 4.689 1.74 8.742 0.885 10.858 0.524-1.298 2.532-4.126 6.213-7.827L500.96 80.654c13.497-13.57 34.731-13.348 47.94 0.506l399.07 418.545c3.516 3.688 5.416 6.517 5.92 7.873-0.671-1.806-0.765-5.373 0.947-9.495 1.746-4.205 4.468-6.762 6.392-7.619-1.18 0.526-4.389 1.107-9.352 1.138l0.45 70.618c69.903-0.445 94.938-60.727 46.776-111.24z m-224.866 572.846c58.263 0 105.474-47.533 105.474-105.99V527.598l-35.096 35.309 107.712-0.687-0.45-70.618-107.712 0.687c-19.419 0.124-35.095 15.896-35.095 35.309v390.238c0 19.566-15.697 35.37-34.833 35.37H646.157v70.62h128.081z m-191.756-353.04c0.093 0 0.15 353.196 0.15 353.196h70.642V670.62c0-38.882-31.79-70.452-70.792-70.452h-140.98c-38.988 0-70.792 31.48-70.792 70.452h70.64c0 0.188 141.132 0.168 141.132 0.168z m-141.131-0.167H370.71v353.363h70.64V670.62z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconShouye.defaultProps = {
  size: 0.2,
};

export default IconShouye;
