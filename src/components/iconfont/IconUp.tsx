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

const IconUp: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M518.47171976 326.78539593l421.47860487 420.91311477a43.35423932 43.35423932 0 0 0 62.20390859-0.75398679 45.61619963 45.61619963 0 0 0-0.75398677-63.58621767l-452.58055915-451.95223683a43.35423932 43.35423932 0 0 0-61.88974743 0.3769934l-464.70717969 475.63998786a45.67903187 45.67903187 0 0 0 0 63.4605532 43.35423932 43.35423932 0 0 0 62.20390857 0l434.04505101-444.09820794z"
        fill={getIconColor(color, 0, '#555555')}
      />
    </svg>
  );
};

IconUp.defaultProps = {
  size: 0.2,
};

export default IconUp;
