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

const IconWuxing: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M493.9 77c162.3-0.8 98.2 190.6 208.5 234.6 26.6 10.6 64.1 1 96.6 6.1 71.6 11.4 148.1 14.9 159.5 85.9 19 118.7-150.7 159.3-170.2 236.1-21.2 83.6 112.5 256.8-19.9 297.5-112.6 34.6-167.9-81.5-249.9-95.1-93.2-15.3-155.7 161.9-280.7 85.9-100.6-61.1 28.7-202.6 0-296-22.9-74.3-153.9-93-171.7-193.2-17.7-99.5 80.2-109.6 153.3-121.1 45.4-7.2 94.8 7.2 122.7-15.3 59.4-47.9 53-163.7 115-210.1 12.3-5.1 24.5-10.2 36.8-15.3z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconWuxing.defaultProps = {
  size: 0.2,
};

export default IconWuxing;
