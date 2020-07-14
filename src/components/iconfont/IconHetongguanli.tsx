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

const IconHetongguanli: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M671.28533333 493.6c39.136-45.30133333 81.48266667-105.67466667 80.97066667-171.89333333-1.06666667-139.168-107.73333333-250.464-239.72266667-250.16533334s-238.688 113.06666667-238.688 252.23466667c0 66.98666667 43.40266667 127.86133333 83.79733334 173.024a30.208 30.208 0 0 1 1.46133333 38.144L305.14133333 583.46666667c-32.93866667 43.072-3.86133333 97.36533333 48.61866667 97.36533333H678.4c52.48 0 81.55733333-54.28266667 48.61866667-97.36533333l-56.768-52.21333334a30.176 30.176 0 0 1 1.03466666-37.65333333zM104.53333333 864.064V791.46666667c0-36.52266667 27.584-66.41066667 61.30133334-66.41066667h694.464c33.70666667 0 61.29066667 29.86666667 61.29066666 66.41066667v72.53333333z m66.25066667 24.90666667h684.544v63.808H170.784z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconHetongguanli.defaultProps = {
  size: 0.2,
};

export default IconHetongguanli;
