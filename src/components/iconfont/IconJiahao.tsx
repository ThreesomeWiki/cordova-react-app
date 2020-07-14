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

const IconJiahao: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M511.488 64.468c-246.974 0-447.184 200.211-447.184 447.185 0 246.972 200.21 447.185 447.184 447.185s447.185-200.213 447.185-447.185c0-246.974-200.21-447.185-447.185-447.185z m223.795 472.027h-198.95v198.953c0 13.608-11.028 24.64-24.846 24.64-13.72 0-24.845-11.311-24.845-24.64V536.495h-198.95c-13.607 0-24.64-11.027-24.64-24.842 0-13.722 11.31-24.845 24.64-24.845h198.953V287.856c0-13.608 11.027-24.64 24.844-24.64 13.72 0 24.845 11.311 24.845 24.64v198.953h198.95c13.611 0 24.643 11.027 24.643 24.845-0.002 13.719-11.313 24.84-24.644 24.84z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconJiahao.defaultProps = {
  size: 0.2,
};

export default IconJiahao;
