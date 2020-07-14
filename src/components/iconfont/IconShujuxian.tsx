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

const IconShujuxian: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M204.864 443.044l20.964-19.744-119.354-126.764-19.147-20.353 20.339-19.133L285.883 89.266l20.325-19.161 19.161 20.353 119.354 126.766 18.483-17.399 207.187 220.06 51.615 150.696 48.049 51.031-160.275 150.886-47.549-50.502-145.682-54.093-211.687-224.859z m71.94-200.832l24.377 25.895 43.159-40.625-24.378-25.895-43.158 40.625z m-56.114 52.82l24.378 25.909 43.172-40.638-24.377-25.895-43.173 40.624z m45.829 89.976l137.51-129.476-100.193-106.44L166.313 278.58l100.206 106.428zM685.19 757.919l185.223 196.754 64.582-60.802-185.223-196.754-64.582 60.802z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconShujuxian.defaultProps = {
  size: 0.2,
};

export default IconShujuxian;
