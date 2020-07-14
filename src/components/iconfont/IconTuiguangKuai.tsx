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

const IconTuiguangKuai: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M19.39907206 496.57396528L1019.391773 4.608227 362.40149119 691.44108039c-8.09866824 8.47297642-20.88186023 10.70748293-31.45323107 5.5011962L19.39907206 543.66874188c-19.72490764-9.69798507-19.72490764-37.39679153 0-47.0947766zM1019.391773 4.608227v988.4231749c0 19.5774529-20.9385736 32.30393154-38.72388422 23.5473883L617.66833785 837.99975294c-13.29361228-6.54472207-18.62466838-22.48117706-11.8757782-35.5139079L1019.391773 4.608227zM568.81544701 870.66665001l-57.40526598 112.96167631c-10.28780404 20.24667057-40.03963425 19.123746-48.71677878-1.83751294l-92.97588723-224.53954662 199.09793199 113.41538325z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconTuiguangKuai.defaultProps = {
  size: 0.2,
};

export default IconTuiguangKuai;
