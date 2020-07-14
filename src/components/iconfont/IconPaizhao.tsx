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

const IconPaizhao: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M879.48705185 218.78708148h-119.54251852l-38.47205925-85.31816296c0.36408889 0.9709037 0.48545185 2.06317037 0.9709037 3.15543703-6.79632592-17.23354075-23.42305185-29.36983703-43.08385186-31.19028147H339.42186667c-17.96171852 1.69908148-33.25345185 12.1362963-40.77795556 27.1853037l-38.71478519 86.04634074h-119.54251851c-47.08882963 0-85.31816297 37.86524445-85.31816296 84.46862223v490.67045925c0 46.60337778 38.10797037 84.46862222 85.31816296 84.46862222h739.22180741c47.08882963 0 85.31816297-37.86524445 85.31816296-84.46862222V303.2557037c-0.24272592-46.72474075-38.3506963-84.46862222-85.43952593-84.46862222zM509.81546667 696.22897778c-87.98814815 0-159.10684445-71.24005925-159.10684445-159.10684445s71.36142222-159.10684445 159.10684445-159.10684444c87.98814815 0 159.22820741 71.24005925 159.22820741 159.10684444s-71.24005925 159.10684445-159.22820741 159.10684445z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconPaizhao.defaultProps = {
  size: 0.2,
};

export default IconPaizhao;
