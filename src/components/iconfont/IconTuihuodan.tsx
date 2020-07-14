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

const IconTuihuodan: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M815.281 61.338h-81.783c-20.446 0-35.78 15.334-35.78 35.78s15.334 35.78 35.78 35.78h81.783c37.484 0 68.153 30.67 68.153 68.154v681.53c0 37.485-30.669 68.153-68.153 68.153H208.72c-37.484 0-68.153-30.668-68.153-68.153V632.12c0-20.446 15.334-35.78 35.78-35.78h434.476v66.449c0 8.519 8.52 13.63 15.334 8.519l166.975-102.23c6.816-3.407 6.816-13.63 0-18.742l-166.975-102.23c-6.815-5.111-15.334 0-15.334 8.52v68.153H176.346c-59.634 0-107.341 47.707-107.341 107.34v252.167c0 76.672 63.042 139.714 139.714 139.714H815.28c76.672 0 139.714-63.042 139.714-139.714v-681.53c0-78.377-63.042-141.418-139.714-141.418z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M384.213 132.899h260.686c20.445 0 35.78-15.335 35.78-35.78s-15.335-35.781-35.78-35.781h-44.3C588.672 25.558 554.596 0 515.408 0c-40.892 0-73.265 25.557-85.192 61.338h-44.3c-20.445 0-35.78 15.334-35.78 35.78s13.631 35.78 34.077 35.78zM104.785 482.183c20.446 0 35.78-15.334 35.78-35.78V201.052c0-37.485 30.67-68.153 68.154-68.153h86.895c20.446 0 35.78-15.335 35.78-35.78s-15.334-35.781-35.78-35.781h-86.895c-76.672 0-139.714 63.041-139.714 139.714v243.647c0 20.446 15.334 37.484 35.78 37.484z m676.42 248.759H232.572c-20.446 0-35.78 15.334-35.78 35.78s15.334 35.78 35.78 35.78h548.633c20.446 0 35.78-15.334 35.78-35.78s-17.038-35.78-35.78-35.78z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M781.205 315.208H232.572c-20.446 0-35.78 15.334-35.78 35.78s15.334 35.78 35.78 35.78h548.633c20.446 0 35.78-15.334 35.78-35.78 0-18.742-17.038-35.78-35.78-35.78z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </svg>
  );
};

IconTuihuodan.defaultProps = {
  size: 0.2,
};

export default IconTuihuodan;
