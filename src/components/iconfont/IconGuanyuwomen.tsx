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

const IconGuanyuwomen: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M1010 476.8c0-12.8-1-25.4-2.2-38.2v-0.8c-0.4-11.6-1-23.4-2.6-35-2.6-20.8-5.4-41.6-9.6-62-5.6-27.4-11.6-54.8-19.2-81.6-9.4-33.6-22.8-65.6-40.4-95.8-16-27.8-36.2-51.4-61.8-70.6-18.6-14-38.8-25-59.8-34.8-24.8-11.4-50.4-20.4-76.8-27.6C699.2 20 660 12.2 620.2 8.6c-23.2-2.2-46.6-5-70-5.6-12.2-0.4-24.4-0.4-36.6-0.2-9.8-0.2-19.4-0.2-29.2 0-9.6 0.2-19.4 0.8-29 1.6-13.4 0.6-26.8 1.8-40.2 3.2-6.2 0.6-12.6 1.4-18.8 2.2-6.8 0.8-13.8 1.6-20.6 2.8-5 0.6-9.8 1.4-14.8 2.2-32.6 4.8-64.6 12.6-96 22.4-32.6 10.4-64.2 23.4-93.6 41.4-22.4 13.8-43 30.2-59.6 50.8-16 20-28.8 42-39.4 65.2C60 222.6 50 251.4 42.2 281c-12.4 46-19.4 93.2-24 140.6-2.2 23.4-3 46.8-3.6 70.4-0.2 6.6-0.2 13.2 0 19.6 0 6.6-0.2 13.2 0 19.6 0.6 23.4 1.4 47 3.6 70.4 4.4 47.4 11.6 94.4 24 140.6 8 29.6 17.8 58.4 30.6 86.4 10.8 23.2 23.6 45.2 39.4 65.2 16.6 20.6 37 37 59.6 50.8 29.4 18 60.8 31 93.6 41.4 31.4 9.8 63.4 17.8 96 22.4 5 0.8 9.8 1.4 14.8 2.2 6.8 1.2 13.6 2 20.6 2.8 6.2 0.8 12.6 1.6 18.8 2.2 13.4 1.4 26.8 2.4 40.2 3.2 9.6 0.8 19.4 1.2 29 1.6 9.8 0.2 19.4 0.2 29.2 0 12.2 0.2 24.4 0.2 36.6-0.2 23.4-0.6 46.6-3.6 70-5.6 39.8-3.6 78.8-11.4 117.4-21.8 26.2-7 52-16 76.8-27.6 21-9.8 41.2-21 59.8-34.8 25.6-19.2 45.8-42.8 61.8-70.6 17.4-30.4 31-62.2 40.4-95.8 7.4-26.8 13.6-54.2 19.2-81.6 4.2-20.4 6.8-41.2 9.6-62 1.6-11.6 2.2-23.4 2.6-35v-0.8c1.2-12.8 2.2-25.4 2.2-38.2 0-11.6 0-23.2-0.2-34.8-0.2-11.8-0.2-23.2-0.2-34.8z m-337.2-62.4c37.8 0 68.6 29.6 68.6 66.2s-30.8 66.2-68.6 66.2c-38 0-68.6-29.6-68.6-66.2s30.6-66.2 68.6-66.2z m-250-171.8c56.8 0 102.8 44.4 102.8 99.2 0 54.8-46 99.2-102.8 99.2S320 396.6 320 341.8c-0.2-54.8 46-99.2 102.8-99.2z m201.4 516.6H217.4c-0.2-5-0.4-10-0.4-15.2 0-151.8 91.2-275 203.8-275 112.6 0 203.8 123 203.8 275 0 5.2-0.2 10.2-0.4 15.2z m183 0H683.6c0.2-5 0.4-10 0.4-15.2 0-65-15.4-125-41.2-174.2 9.2-2.6 18.8-4.2 28.6-4.2 75 0 136 82.2 136 183.6 0 3.2 0 6.6-0.2 10z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconGuanyuwomen.defaultProps = {
  size: 0.2,
};

export default IconGuanyuwomen;
