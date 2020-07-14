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

const IconDianputuoguan: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1228 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M62.00600029 212.00000029a148.65000029 148.65000029 0 0 1 147.29999942-150.00000029h785.40000029A148.65000029 148.65000029 0 0 1 1142.00600029 212.00000029v429.99999961a148.65000029 148.65000029 0 0 1-147.30000029 150.00000029H209.30599971A148.65000029 148.65000029 0 0 1 62.00600029 641.9999999z m147.29999942-50.0000001a49.5500001 49.5500001 0 0 0-49.1000001 50.0000001v429.99999961a49.5500001 49.5500001 0 0 0 49.1000001 50.0000001h785.45000039a49.5500001 49.5500001 0 0 0 49.10000009-50.0000001V212.00000029a49.5500001 49.5500001 0 0 0-49.10000009-50.0000001H209.25599961zM62.00600029 911.9999999a49.5500001 49.5500001 0 0 1 49.1000001-50.0000001h981.79999981a48.94999981 48.94999981 0 0 1 42.54999961 25.00000049 50.7999999 50.7999999 0 0 1 0 50.0000001 48.94999981 48.94999981 0 0 1-42.54999961 24.99999961H111.10600039A49.5500001 49.5500001 0 0 1 62.00600029 911.9999999z"
        fill={getIconColor(color, 0, '#42BCA3')}
      />
      <path
        d="M533.3559998 260.20000039a53.0499999 53.0499999 0 0 1 55.60000049-50.0000001h55.59999961a50.2999998 50.2999998 0 1 1 0 99.99999932h-55.59999961a53.0499999 53.0499999 0 0 1-55.60000048-49.99999922z"
        fill={getIconColor(color, 1, '#42BCA3')}
      />
    </svg>
  );
};

IconDianputuoguan.defaultProps = {
  size: 0.2,
};

export default IconDianputuoguan;
