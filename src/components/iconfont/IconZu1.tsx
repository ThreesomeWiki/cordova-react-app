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

const IconZu1: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1028 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M514.355199 1023.995904h-4.403165a511.995904 511.995904 0 0 1 4.147167-1023.991808h4.403165a511.995904 511.995904 0 0 1-4.147167 1023.991808z m0-966.28987a454.293966 454.293966 0 0 0-3.73757 908.587932h3.942369a454.293966 454.293966 0 0 0 3.68637-908.587932z"
        fill={getIconColor(color, 0, '#727272')}
      />
      <path
        d="M514.2528 829.437461h-2.662379a317.437461 317.437461 0 0 1-260.810713-140.440477 36.044512 36.044512 0 1 1 59.852321-40.191678 245.143639 245.143639 0 0 0 201.521588 108.491932H514.2528a245.246038 245.246038 0 0 0 201.21439-105.112759 36.044512 36.044512 0 0 1 59.135527 41.266869A317.437461 317.437461 0 0 1 514.2528 829.437461z"
        fill={getIconColor(color, 1, '#727272')}
      />
    </svg>
  );
};

IconZu1.defaultProps = {
  size: 0.2,
};

export default IconZu1;
