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

const IconJuanzhi: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M923.648 232.448q0 25.6-24.064 47.616t-66.048 38.4-97.792 25.6-120.32 9.216-120.832-9.216-98.304-25.6-66.56-38.4-24.576-47.616 24.064-47.616 66.048-38.912 98.304-26.624 120.832-9.728 120.832 9.728 98.304 26.624 66.048 38.912 24.064 47.616z m-308.224-50.176q-38.912 0-65.536 13.312t-26.624 31.744 26.624 31.232 65.536 12.8q37.888 0 65.024-12.8t27.136-31.232-27.136-31.744-65.024-13.312zM306.176 314.368q28.672 22.528 72.704 40.96 37.888 15.36 95.744 28.16t139.776 12.8q82.944 0 141.312-12.8t96.256-28.16q43.008-18.432 71.68-40.96v477.184q0 14.336-16.896 33.28t-52.736 36.352-91.648 29.184-133.632 11.776q-78.848 0-139.264-10.24t-101.376-26.112-61.952-35.84-20.992-38.4V533.504q0-99.328 1.024-219.136zM256 324.608H72.704l79.872 233.472-79.872 233.472H256V324.608z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconJuanzhi.defaultProps = {
  size: 0.2,
};

export default IconJuanzhi;
