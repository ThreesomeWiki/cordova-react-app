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

const IconKanjian: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1399 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M1349.93804 465.455c-15.515 0-31.03-6.207-40.34-21.722-136.532-220.315-366.157-350.642-614.4-350.642-245.139 0-471.66 130.327-608.193 344.436-12.412 21.721-43.442 27.928-65.164 15.515C0.12104 440.63-6.08596 409.6 6.32604 387.88 161.47804 145.842 419.03004 0 695.20004 0c279.273 0 539.927 148.945 691.976 394.085 12.412 21.721 6.206 49.648-15.516 65.163-6.206 3.104-12.412 6.207-21.72 6.207z"
        fill={getIconColor(color, 0, '#212121')}
      />
      <path
        d="M682.78704 775.758c-155.152 0-279.273-124.122-279.273-279.273s124.121-279.273 279.273-279.273 279.272 124.121 279.272 279.273-124.12 279.273-279.272 279.273z m0-465.455c-102.4 0-186.182 83.782-186.182 186.182s83.782 186.182 186.182 186.182 186.182-83.782 186.182-186.182-83.782-186.182-186.182-186.182z"
        fill={getIconColor(color, 1, '#212121')}
      />
      <path
        d="M695.19904 1024c-276.17 0-533.721-145.842-688.873-387.879C-6.08596 614.4 0.12004 586.473 21.84104 570.958c21.722-12.413 49.649-6.206 65.164 15.515 136.533 217.212 366.158 344.436 611.297 344.436 248.242 0 477.867-130.327 614.4-350.642 12.412-21.722 43.442-27.928 65.164-15.515 21.72 12.412 27.927 43.442 15.515 65.163C1235.12604 878.158 977.57504 1024 695.19904 1024z"
        fill={getIconColor(color, 2, '#212121')}
      />
    </svg>
  );
};

IconKanjian.defaultProps = {
  size: 0.2,
};

export default IconKanjian;
