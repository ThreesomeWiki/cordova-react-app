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

const IconClose: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M825.06434274 976.26318076L512 663.19883804l-313.06434274 313.06434272c-43.2028793 43.2028793-113.32929209 43.2028793-156.53217135 0-43.28114538-43.28114538-43.2028793-113.32929209 0-156.53217135L355.46782863 506.66666667 42.40348591 193.60232393c-43.28114538-43.28114538-43.2028793-113.32929209 0-156.53217135s113.25102598-43.28114538 156.53217135 0l313.06434274 313.06434272L825.06434274 37.07015258c43.2028793-43.2028793 113.25102598-43.28114538 156.53217135 0 43.2028793 43.2028793 43.2028793 113.32929209 0 156.53217135l-313.06434272 313.06434274 313.06434272 313.06434274c43.2028793 43.2028793 43.2028793 113.32929209 0 156.53217135s-113.32929209 43.2028793-156.53217135 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconClose.defaultProps = {
  size: 0.2,
};

export default IconClose;
