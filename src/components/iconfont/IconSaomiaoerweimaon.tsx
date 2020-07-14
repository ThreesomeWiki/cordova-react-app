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

const IconSaomiaoerweimaon: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M96 544v-64c0-8.837 7.163-16 16-16h800c8.837 0 16 7.163 16 16v64c0 8.837-7.163 16-16 16H112c-8.837 0-16-7.163-16-16z m92.936-323.064V416c0 8.837-7.163 16-16 16H112c-8.837 0-16-7.163-16-16V160c0-35.346 28.654-64 64-64h256c8.837 0 16 7.163 16 16v60.936c0 8.837-7.163 16-16 16H220.936c-17.673 0-32 14.327-32 32z m646.128 0c0-17.673-14.327-32-32-32H608c-8.837 0-16-7.163-16-16V112c0-8.837 7.163-16 16-16h256c35.346 0 64 28.654 64 64v256c0 8.837-7.163 16-16 16h-60.936c-8.837 0-16-7.163-16-16V220.936z m0 582.128V608c0-8.837 7.163-16 16-16H912c8.837 0 16 7.163 16 16v256c0 35.346-28.654 64-64 64H608c-8.837 0-16-7.163-16-16v-60.936c0-8.837 7.163-16 16-16h195.064c17.673 0 32-14.327 32-32z m-646.128 0c0 17.673 14.327 32 32 32H416c8.837 0 16 7.163 16 16V912c0 8.837-7.163 16-16 16H160c-35.346 0-64-28.654-64-64V608c0-8.837 7.163-16 16-16h60.936c8.837 0 16 7.163 16 16v195.064z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconSaomiaoerweimaon.defaultProps = {
  size: 0.2,
};

export default IconSaomiaoerweimaon;
