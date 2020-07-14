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

const IconPuhuojilu: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M729.28 928A228.48 228.48 0 1 1 960 698.88 229.44 229.44 0 0 1 729.28 928z m0-399.36a171.2 171.2 0 1 0 172.48 171.2 172.16 172.16 0 0 0-172.48-172.16z m-141.76-160H288a28.8 28.8 0 1 1 0-59.84h300.8a28.8 28.8 0 1 1 0 57.28zM470.4 537.28H288a28.8 28.8 0 1 1 0-57.28h182.4a28.8 28.8 0 1 1 0 57.28z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M608 888.96H201.92A104.96 104.96 0 0 1 96 784.32V232.64A105.28 105.28 0 0 1 201.92 128h536.96a105.28 105.28 0 0 1 105.6 104.64V526.4h-57.6V232.64a47.68 47.68 0 0 0-48-47.36H201.92a47.68 47.68 0 0 0-47.68 47.36v551.68A47.68 47.68 0 0 0 201.92 832H608z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M615.68 896H201.92A113.28 113.28 0 0 1 88.64 783.36V232.64A113.28 113.28 0 0 1 201.92 120h536.96a113.28 113.28 0 0 1 113.6 112.64V534.4h-73.6V232.64a39.68 39.68 0 0 0-40-40.64H201.92a39.68 39.68 0 0 0-39.68 40.64v551.68A39.68 39.68 0 0 0 201.92 824h413.76zM201.92 136a96 96 0 0 0-96 96v552.32a96 96 0 0 0 96 96h397.76V840H201.92a55.68 55.68 0 0 1-55.68-55.68V232.64a55.68 55.68 0 0 1 55.68-55.36h536.96a56 56 0 0 1 56 55.36V518.4h41.6V232.64a96 96 0 0 0-97.6-96z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <path
        d="M823.36 749.12H719.68a27.52 27.52 0 0 1-20.16-8.32 28.48 28.48 0 0 1-8.64-20.16V613.12a28.8 28.8 0 0 1 57.6 0v79.04h74.88a28.48 28.48 0 1 1 0 56.96z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </svg>
  );
};

IconPuhuojilu.defaultProps = {
  size: 0.2,
};

export default IconPuhuojilu;
