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

const IconHuodong: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M511.49476514 1.43182818C232.6051343 1.43182818 6.76516151 227.77703584 6.76516151 506.66666667s225.83997278 505.23483849 504.72960363 505.23483849C790.88963083 1011.90150516 1017.23483849 785.5562975 1017.23483849 506.66666667S790.88963083 1.43182818 511.49476514 1.43182818z m214.21957152 808.37574155L512 680.97268591 298.28566334 809.80756973l56.58630188-243.01795727-188.45259474-163.1908528 248.57554052-21.21986326L512 153.00227973l97.005089 228.87138187 248.57554052 21.21986321-188.45259474 163.19085279L725.71433666 809.80756973z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconHuodong.defaultProps = {
  size: 0.2,
};

export default IconHuodong;
