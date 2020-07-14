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

const IconWodedingyue: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M825.28047792 962a88.78520215 88.78520215 0 0 1-39.39343417-9.2984502l-260.50658203-128.82852861a48.34194258 48.34194258 0 0 0-32.04465909 0l-254.95750722 128.07865371a88.73521084 88.73521084 0 0 1-128.528579-79.28678584v-679.88668535A130.9781707 130.9781707 0 0 1 240.6779123 61.95000869h542.55957276a130.9781707 130.9781707 0 0 1 130.8281959 130.82819503v73.03782656a45.89235088 45.89235088 0 1 1-91.78470264 0V192.77820372a39.09348457 39.09348457 0 0 0-39.09348457-39.04349327H240.62792011a39.09348457 39.09348457 0 0 0-39.09348456 39.04349326v674.88751846l256.7072162-128.62856162a139.97667041 139.97667041 0 0 1 101.98300255-0.24995831l3.79936669 1.6997168 258.25695733 127.72871192v-259.60673233a45.89235088 45.89235088 0 1 1 91.78470264 0v264.55590703a88.88518565 88.88518565 0 0 1-88.63522734 88.78520303z"
        fill={getIconColor(color, 0, '#494A4A')}
      />
      <path
        d="M814.53226924 492.32827901H503.73406953a44.99250117 44.99250117 0 1 1 0-89.98500323h310.8981832a44.99250117 44.99250117 0 1 1 0 89.98500323z"
        fill={getIconColor(color, 1, '#494A4A')}
      />
      <path
        d="M654.35896513 646.90251612a44.99250117 44.99250117 0 0 1-44.99250117-44.99250118V291.11181435a44.99250117 44.99250117 0 1 1 89.98500235 0v310.89818409a44.99250117 44.99250117 0 0 1-44.99250118 44.89251768z"
        fill={getIconColor(color, 2, '#494A4A')}
      />
    </svg>
  );
};

IconWodedingyue.defaultProps = {
  size: 0.2,
};

export default IconWodedingyue;
