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

const IconGouwuche: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M531.8656 763.4944a232.1408 232.1408 0 0 1-144.7936-48.5376C267.5712 623.3088 240.5376 430.08 240.5376 398.7456a366.2848 366.2848 0 0 1 11.6736-92.7744q-7.9872-7.168-15.5648-14.848c-67.1744-67.1744-105.7792-57.6512-111.7184-51.712l-43.52-43.4176c2.9696-2.9696 74.8544-71.68 198.656 51.712 102.4 102.4 261.12 140.8 395.3664 96.0512 101.1712-33.6896 165.1712-37.376 207.6672-11.776 28.16 16.896 45.2608 45.568 52.224 87.552v2.7648C949.3504 503.7056 974.6432 655.36 615.424 751.8208a321.7408 321.7408 0 0 1-83.5584 11.6736zM305.9712 347.5456a297.7792 297.7792 0 0 0-4.096 51.2c0 23.1424 25.3952 194.56 123.6992 268.288 47.5136 35.84 104.3456 44.1344 174.08 25.3952 305.3568-81.92 287.4368-189.1328 275.5584-259.8912v-2.7648c-5.12-30.72-15.7696-40.96-23.3472-45.056-24.6784-14.848-77.312-9.0112-156.5696 17.408-128.4096 42.5984-275.456 20.1728-389.3248-54.5792zM361.7792 920.9856a95.3344 95.3344 0 1 1 95.3344-95.3344 95.5392 95.5392 0 0 1-95.3344 95.3344z m0-129.3312a33.8944 33.8944 0 1 0 33.8944 33.8944 33.9968 33.9968 0 0 0-33.8944-33.8944zM775.5776 920.9856a95.3344 95.3344 0 1 1 95.3344-95.3344 95.4368 95.4368 0 0 1-95.3344 95.3344z m0-129.3312a33.8944 33.8944 0 1 0 33.8944 33.8944 33.9968 33.9968 0 0 0-33.8944-33.8944z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconGouwuche.defaultProps = {
  size: 0.2,
};

export default IconGouwuche;
