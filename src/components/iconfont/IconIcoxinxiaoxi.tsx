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

const IconIcoxinxiaoxi: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M876.494 769.305c-30.392-45.639-46.457-98.747-46.457-153.493V430.598c0-116.757-65.388-224.611-168.126-279.97C629.78 80.531 573.601 37.86 512 37.86S394.22 80.532 362.089 150.525c-102.738 55.36-168.126 163.214-168.126 279.97V615.71c0 54.848-16.065 107.956-46.457 153.492-9.516 14.224-10.437 32.643-2.353 47.788 8.084 15.144 23.842 24.559 41.033 24.559h159.428c13.098 80.123 82.58 141.52 166.284 141.52s153.288-61.397 166.283-141.52H837.61c17.191 0 32.95-9.415 41.034-24.56 8.288-15.042 7.367-33.46-2.15-47.684zM512 890.052c-24.15 0-45.74-11.358-59.555-29.061h119.11c-13.814 17.703-35.406 29.061-59.555 29.061z m-249.579-141.52c16.168-42.16 24.661-86.98 24.661-132.822V430.495c0-86.876 51.37-166.897 130.98-203.94 11.052-5.116 19.648-14.428 23.945-25.787 16.066-42.466 43.592-69.992 70.095-69.992s54.03 27.424 70.095 69.992c4.298 11.359 12.894 20.568 23.945 25.787 79.51 37.043 130.98 117.064 130.98 203.94V615.71c0 45.74 8.391 90.663 24.662 132.822H262.42z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconIcoxinxiaoxi.defaultProps = {
  size: 0.2,
};

export default IconIcoxinxiaoxi;
