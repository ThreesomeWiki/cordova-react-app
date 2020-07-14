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

const IconCross: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M784.077 810.179a26.112 26.112 0 0 1-18.36-7.619L511.994 548.838 258.284 802.55a25.866 25.866 0 0 1-18.253 7.46 25.923 25.923 0 0 1-18.289-7.491c-4.956-4.884-7.716-11.407-7.767-18.365s2.611-13.522 7.49-18.478l253.681-253.681L221.44 258.284c-9.902-10.051-9.902-26.456 0.03-36.542a25.85 25.85 0 0 1 18.56-7.767 25.913 25.913 0 0 1 18.284 7.49L511.99 475.152 765.706 221.44c4.92-4.915 11.459-7.629 18.422-7.629s13.501 2.709 18.427 7.629a26.107 26.107 0 0 1-0.005 36.844L548.838 512 802.55 765.711a25.897 25.897 0 0 1 7.618 18.386 26.092 26.092 0 0 1-26.045 26.087h-0.046z"
        fill={getIconColor(color, 0, '#2C2C2C')}
      />
    </svg>
  );
};

IconCross.defaultProps = {
  size: 0.2,
};

export default IconCross;
