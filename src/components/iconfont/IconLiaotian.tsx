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

const IconLiaotian: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M930.503 1019.449a43.804 43.804 0 0 1-22.528-6.258L717.74 899.441A576.54 576.54 0 0 1 512 936.62c-282.311 0-512-198.343-512-442.14C0 250.68 229.689 52.337 512 52.337s512 198.343 512 442.14c0 107.577-44.146 209.294-125.042 289.65l72.334 173.369c7.396 17.75 2.674 38.286-11.69 50.944a43.894 43.894 0 0 1-29.099 11.008zM254.01 498.688v1.195a57.884 57.884 0 0 0 57.913 57.543 57.913 57.913 0 0 0 57.344-58.14c0-32-25.6-58.027-57.344-58.17a57.884 57.884 0 0 0-57.913 57.572z m191.659 0c0 32.882 26.424 59.506 58.993 59.506a59.25 59.25 0 0 0 58.966-59.506 59.25 59.25 0 0 0-58.966-59.506 59.25 59.25 0 0 0-58.993 59.506z m191.687 0v1.195a57.884 57.884 0 0 0 57.913 57.543 57.913 57.913 0 0 0 57.344-58.14c0-32-25.6-58.027-57.344-58.17a57.884 57.884 0 0 0-57.913 57.572z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconLiaotian.defaultProps = {
  size: 0.2,
};

export default IconLiaotian;
