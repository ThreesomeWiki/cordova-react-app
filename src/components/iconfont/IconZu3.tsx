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

const IconZu3: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M812.9024 1024H211.0464C125.2352 1024 69.7856 977.92 69.7856 906.24V327.68a141.4656 141.4656 0 0 1 141.2608-141.2608h79.872v46.5408h-79.872A94.7712 94.7712 0 0 0 116.3776 327.68v578.56c0 64.4608 66.2016 71.68 94.6688 71.68h601.856c28.5184 0 94.72-6.9632 94.72-71.68V327.68a94.8224 94.8224 0 0 0-94.72-94.72h-79.8208v-46.5408h79.8208A141.4144 141.4144 0 0 1 954.1632 327.68v578.56c0 71.4752-55.4496 117.76-141.2608 117.76z"
        fill={getIconColor(color, 0, '#727272')}
      />
      <path
        d="M696.9856 337.4592H324.0448a52.1728 52.1728 0 0 1-52.0704-52.0704V156.928a52.1728 52.1728 0 0 1 52.0704-52.1216h30.72a6.144 6.144 0 0 0 5.12-4.1984 162.7136 162.7136 0 0 1 300.6976 0 6.144 6.144 0 0 0 5.376 4.1984h30.72a52.1728 52.1728 0 0 1 52.0704 52.1216v128.5632a52.1216 52.1216 0 0 1-51.7632 51.968zM324.0448 151.296a5.5296 5.5296 0 0 0-5.5296 5.5296v128.5632a5.5808 5.5808 0 0 0 5.5296 5.5296h372.9408a5.5296 5.5296 0 0 0 5.5296-5.5296V156.928a5.5296 5.5296 0 0 0-5.5296-5.5296h-30.72a52.5824 52.5824 0 0 1-48.384-32.9728 116.1728 116.1728 0 0 0-214.6816 0 52.5824 52.5824 0 0 1-48.384 32.9728z"
        fill={getIconColor(color, 1, '#727272')}
      />
      <path
        d="M733.0816 512H290.9184a23.296 23.296 0 1 1 0-46.5408h442.1632a23.296 23.296 0 1 1 0 46.5408z"
        fill={getIconColor(color, 2, '#727272')}
      />
      <path
        d="M733.0816 668.928H290.9184a23.296 23.296 0 1 1 0-46.5408h442.1632a23.296 23.296 0 1 1 0 46.5408z"
        fill={getIconColor(color, 3, '#727272')}
      />
      <path
        d="M465.92 826.1632H290.9184a23.296 23.296 0 1 1 0-46.5408h175.0016a23.296 23.296 0 1 1 0 46.5408z"
        fill={getIconColor(color, 4, '#727272')}
      />
    </svg>
  );
};

IconZu3.defaultProps = {
  size: 0.2,
};

export default IconZu3;
