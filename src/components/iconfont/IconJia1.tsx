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

const IconJia1: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1025 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M874.971 149.943C776.23 54.857 648.23 0 512.914 0S245.943 54.857 150.857 149.943c-201.143 201.143-201.143 522.971 0 724.114C245.943 969.143 377.6 1024 512.914 1024s266.972-54.857 362.057-149.943c201.143-201.143 201.143-522.971 0-724.114m-51.2 672.914c-84.114 84.114-193.828 128-310.857 128s-226.743-43.886-310.857-128c-171.886-171.886-171.886-449.828 0-621.714 84.114-84.114 193.829-128 310.857-128s226.743 43.886 310.857 128c171.886 171.886 171.886 449.828 0 621.714"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M549.486 475.429V288.914c0-21.943-14.629-36.571-36.572-36.571s-36.571 14.628-36.571 36.571V475.43H289.829c-21.943 0-36.572 14.628-36.572 36.571 0 10.971 3.657 18.286 10.972 25.6s14.628 10.971 25.6 10.971h186.514v186.515c0 10.971 3.657 18.285 10.971 25.6 7.315 7.314 14.629 10.971 25.6 10.971 21.943 0 36.572-14.628 36.572-36.571V548.57H736c21.943 0 36.571-14.628 36.571-36.571S757.943 475.429 736 475.429H549.486z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconJia1.defaultProps = {
  size: 0.2,
};

export default IconJia1;
