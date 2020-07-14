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

const IconTousuyujianyi: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M899.2 169.024c21.312 21.312 32.256 47.68 32.832 79.168v498.752c-0.576 31.488-11.52 57.728-32.832 78.72-21.312 20.992-47.68 32.064-79.168 33.28h-560l-128.64 112c-5.824 5.248-12.096 7.872-18.816 7.872s-11.84-2.624-15.296-7.872c-2.368-2.944-3.776-5.824-4.352-8.768-0.576-2.944-0.896-5.824-0.896-8.768V248.192c0.576-31.488 11.52-57.856 32.832-79.168s47.68-32.256 79.168-32.832h616c31.488 0.576 57.856 11.52 79.168 32.832zM741.248 435.008c11.072-9.6 16.64-21.568 16.64-35.904 0-14.272-4.672-26.112-14.016-35.456s-21.312-14.272-35.904-14.848H321.28c-14.016 0.576-25.792 5.568-35.456 14.848-9.6 9.344-14.464 21.12-14.464 35.456 0 14.272 4.8 26.24 14.464 35.904s21.44 14.464 35.456 14.464h381.504c14.528-0.064 27.392-4.864 38.464-14.464z m0 185.024c11.072-9.344 16.64-21.312 16.64-35.904 0-14.592-4.672-26.56-14.016-35.904s-21.312-14.272-35.904-14.848H321.28c-14.016 0.576-25.792 5.568-35.456 14.848-9.6 9.344-14.464 21.312-14.464 35.904 0 14.592 4.8 26.56 14.464 35.904 9.6 9.344 21.44 14.272 35.456 14.848h381.504c14.528-0.512 27.392-5.504 38.464-14.848z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconTousuyujianyi.defaultProps = {
  size: 0.2,
};

export default IconTousuyujianyi;
