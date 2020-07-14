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

const IconZhengqueCopy: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 10.53144264c-272.8578915 0-501.46855736 221.23612824-501.46855736 501.46855736s221.23612824 501.46855736 501.46855736 501.46855736 501.46855736-221.23612824 501.46855736-501.46855736S784.8578915 10.53144264 512 10.53144264z m287.60696673 368.72688041L475.12731196 733.23612824c-14.74907522 14.74907522-44.24722565 14.74907522-58.99630087 0L253.89118369 563.62176325c-14.74907522-14.74907522-14.74907522-44.24722565 0-58.99630085 14.74907522-14.74907522 44.24722565-14.74907522 58.99630089 0l132.74167695 132.74167695L733.23612824 312.88748458c14.74907522-14.74907522 44.24722565-14.74907522 58.99630087 0 29.49815043 14.74907522 29.49815043 44.24722565 7.37453762 66.37083847z"
        fill={getIconColor(color, 0, '#CACCCB')}
      />
      <path
        d="M710.4 339.2l-256 281.6-115.2-115.2c-12.8-12.8-38.4-12.8-51.2 0-12.8 12.8-12.8 38.4 0 51.2l147.2 140.8c12.8 12.8 38.4 12.8 51.2 0L768 390.4c12.8-12.8 12.8-38.4 0-51.2-19.2-12.8-44.8-12.8-57.6 0z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </svg>
  );
};

IconZhengqueCopy.defaultProps = {
  size: 0.2,
};

export default IconZhengqueCopy;
