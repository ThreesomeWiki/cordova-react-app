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

const IconXiaoxituisongpeizhi1: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M979.2 467.2H780.8c-25.6 0-38.4 19.2-38.4 38.4v6.4c0 19.2 19.2 38.4 38.4 38.4h198.4c19.2 0 38.4-19.2 38.4-38.4v-6.4c0-19.2-19.2-38.4-38.4-38.4zM524.8 128c-64 44.8-192 115.2-275.2 179.2v6.4c-19.2 0-25.6 19.2-83.2 19.2H57.6c-32 0-51.2 12.8-51.2 44.8V640c0 32 19.2 44.8 51.2 44.8h115.2c57.6 0 64 19.2 76.8 25.6v6.4c89.6 64 211.2 134.4 275.2 179.2 19.2 12.8 83.2 38.4 83.2-44.8V166.4c0-76.8-64-51.2-83.2-38.4zM704 313.6c12.8 19.2 32 25.6 44.8 12.8l160-134.4c12.8-12.8 19.2-38.4 6.4-57.6l-6.4-12.8c-12.8-19.2-32-25.6-44.8-12.8L704 243.2c-12.8 12.8-19.2 38.4-6.4 57.6l6.4 12.8z m51.2 384c-12.8-12.8-38.4-6.4-44.8 12.8l-6.4 12.8c-12.8 19.2-6.4 44.8 6.4 57.6l166.4 134.4c12.8 12.8 38.4 6.4 44.8-12.8l6.4-12.8c12.8-19.2 6.4-44.8-6.4-57.6L755.2 697.6z"
        fill={getIconColor(color, 0, '#040000')}
      />
    </svg>
  );
};

IconXiaoxituisongpeizhi1.defaultProps = {
  size: 0.2,
};

export default IconXiaoxituisongpeizhi1;
