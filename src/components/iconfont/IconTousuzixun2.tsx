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

const IconTousuzixun2: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 56.88853333c226.18986667 0 409.6 177.99466667 409.6 397.58506667 0 151.00586667-86.74453333 282.3968-214.53866667 349.70773333-63.53386667 32.67733333-170.576 86.97173333-320.99093333 162.93013334V832.85333333C221.4112 781.38026667 102.4 631.4208 102.4 454.51946667 102.4 234.83733333 285.81013333 56.88853333 512 56.88853333zM300.8288 479.824a45.51146667 45.51146667 0 0 0 0 64.352 298.64426667 298.64426667 0 0 0 422.3424 0 45.51146667 45.51146667 0 0 0-64.352-64.352 207.62133333 207.62133333 0 0 1-293.6384 0 45.51146667 45.51146667 0 0 0-64.352 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconTousuzixun2.defaultProps = {
  size: 0.2,
};

export default IconTousuzixun2;
