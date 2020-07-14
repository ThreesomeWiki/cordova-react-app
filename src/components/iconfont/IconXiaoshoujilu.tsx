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

const IconXiaoshoujilu: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 1023.99755a475.418672 475.418672 0 0 1-458.41372-602.138318 54.855847 54.855847 0 1 1 105.871705 29.074919A365.706979 365.706979 0 1 0 512 182.869899a361.50199 361.50199 0 0 0-169.688526 41.507884 54.855847 54.855847 0 1 1-50.832858-96.363731A475.418672 475.418672 0 1 1 512 1023.99855z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M566.855847 297.519579H512a18.284949 18.284949 0 0 0-18.284949 18.284949v224.727372a18.284949 18.284949 0 0 1-18.285949 18.285949H305.740576a18.284949 18.284949 0 0 0-18.284949 18.284949v54.855847a18.284949 18.284949 0 0 0 18.284949 18.285949h261.115271a18.284949 18.284949 0 0 0 18.285949-18.285949V315.804528a18.284949 18.284949 0 0 0-18.285949-18.284949z m-164.568541 22.856936a54.855847 54.855847 0 0 1-19.929944-3.65699l-151.403577-59.244834a54.855847 54.855847 0 0 1-31.084913-71.129801L259.113706 34.941312a54.855847 54.855847 0 0 1 102.214715 39.862889L321.100533 175.189921l100.38672 39.31389a54.855847 54.855847 0 0 1-19.199947 105.872704z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconXiaoshoujilu.defaultProps = {
  size: 0.2,
};

export default IconXiaoshoujilu;
