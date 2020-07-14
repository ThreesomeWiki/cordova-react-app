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

const IconTedianQuanchangbaoyou: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M291.694 527.203h71.353v142.104h-71.353V527.203zM407.416 527.203h71.352v142.104h-71.352V527.203zM291.694 347.325h71.353v137.907h-71.353V347.325zM407.416 347.325h71.352v137.907h-71.352V347.325z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M510.546 63.815c-246.711 0-446.71 200-446.71 446.71s199.999 446.71 446.71 446.71 446.71-200 446.71-446.71-200-446.71-446.71-446.71z m12.592 680.442h-44.37v-32.978H291.694v42.571h-44.37V305.355h115.723V197.427h44.37v107.928h115.72v438.902z m205.66-44.97c-20.387 2.801-44.97 2.999-73.75 0.6-3.2-16.386-7.598-33.174-13.191-50.366 29.178 4.797 52.96 6.197 71.352 4.198 21.585-1.996 32.378-18.987 32.378-50.966 0-45.569-25.183-92.937-75.549-142.104a9918.216 9918.216 0 0 0 67.155-174.481H628.666v501.259h-45.569V244.196H785.76v41.972c-23.187 57.162-45.172 112.723-65.955 166.687 47.967 48.37 71.952 98.933 71.952 151.697-0.001 56.764-20.987 88.34-62.96 94.736z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconTedianQuanchangbaoyou.defaultProps = {
  size: 0.2,
};

export default IconTedianQuanchangbaoyou;
