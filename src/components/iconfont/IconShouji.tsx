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

const IconShouji: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M708.928 0H315.072C247.168 0 192 52.16 192 116.352v791.296C192 971.84 247.168 1024 315.072 1024h393.856C776.832 1024 832 971.84 832 907.648V116.352C832 52.16 776.832 0 708.928 0zM512 977.472c-40.832 0-73.856-31.232-73.856-69.824 0-38.656 33.024-69.824 73.856-69.824 40.832 0 73.856 31.168 73.856 69.76 0 38.656-33.024 69.888-73.856 69.888z m221.568-186.24H290.432v-651.52h443.136V791.36z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconShouji.defaultProps = {
  size: 0.2,
};

export default IconShouji;
