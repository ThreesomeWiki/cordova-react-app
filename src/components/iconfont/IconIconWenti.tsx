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

const IconIconWenti: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M469.33 768h85.33v-85.33h-85.33V768zM512 85.33C276.48 85.33 85.33 276.48 85.33 512S276.48 938.67 512 938.67 938.67 747.52 938.67 512 747.52 85.33 512 85.33z m0 768c-188.16 0-341.33-153.17-341.33-341.33S323.84 170.67 512 170.67 853.33 323.84 853.33 512 700.16 853.33 512 853.33zM512 256c-94.29 0-170.67 76.37-170.67 170.67h85.33c0-46.93 38.4-85.33 85.33-85.33s85.33 38.4 85.33 85.33c0 85.33-128 74.67-128 213.33h85.33c0-96 128-106.67 128-213.33C682.67 332.37 606.29 256 512 256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconIconWenti.defaultProps = {
  size: 0.2,
};

export default IconIconWenti;
