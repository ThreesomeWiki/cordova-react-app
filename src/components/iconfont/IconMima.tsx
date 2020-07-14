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

const IconMima: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M780.995 419.328H376.919V269.64c0-49.577 60.319-104.745 134.661-104.745 74.368 0 134.759 55.168 134.759 104.745v44.928h0.527a52.296 52.296 0 0 0 51.773 44.897c26.445 0 48.22-19.507 51.866-44.897h0.594v-44.923c0-115.712-107.28-209.526-239.514-209.526-132.213 0-239.462 93.814-239.462 209.526v149.683h-29.957c-49.552 0-89.754 40.207-89.754 89.79v359.219c0 49.582 40.202 89.774 89.754 89.774h538.829c49.617 0 89.784-40.192 89.784-89.774v-359.22c0-49.582-40.167-89.789-89.784-89.789z m-224.477 331.52v40.94c0 25.712-20.121 46.545-44.938 46.545-24.755 0-44.907-20.833-44.907-46.545v-40.935c-35.364-16.573-59.889-52.173-59.889-93.43 0-57.118 46.96-103.434 104.796-103.434 57.897 0 104.796 46.316 104.796 103.434 0 41.252-24.463 76.857-59.858 93.43z"
        fill={getIconColor(color, 0, '#272636')}
      />
    </svg>
  );
};

IconMima.defaultProps = {
  size: 0.2,
};

export default IconMima;
