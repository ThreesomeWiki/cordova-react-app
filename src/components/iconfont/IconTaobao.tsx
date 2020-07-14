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

const IconTaobao: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M489.705 353.044l30.544 27.967-15.272 16.529H702.16l0.628 45.784-122.74 0.628v59.14l121.452 1.916v29.884H580.676l-0.628 106.84c40.693 1.257 54.048-15.9 54.048-15.9l-13.983-27.999 73.122-42.61 38.777 86.478V381.576C685.6 262.01 489.674 352.95 489.674 352.95zM511.985 0C229.234 0 0 229.266 0 512.016S229.235 1024 511.984 1024C794.765 1024 1024 794.765 1024 512.016S794.765 0 511.984 0zM256.321 242.936c33.718 0 61.056 27.338 61.056 61.056s-27.338 61.056-61.056 61.056-61.056-27.339-61.056-61.056 27.339-61.056 61.056-61.056z m62.313 340.914L229.58 767.018l-95.402-61.056 125.945-137.384c17.786-22.908 0-50.875 0-50.875l-92.856-80.13 40.725-55.965s44.527 34.346 93.485 82.675 17.157 119.567 17.157 119.567z m525.37 91.568s-7.635 108.129-113.187 105.584-105.615 0-105.615 0l-30.543 0.03s-17.786-24.824 0.66-61.715c0 0 38.776-6.379 45.124 15.272h44.527s43.239-8.265 46.413-76.328l-61.056 45.784-22.248-45.156s-80.79 64.859-146.937 60.428H411.46s-58.51-15.24-61.684-92.228v-59.8h91.6s-9.553 94.146 44.527 89.684l1.257-120.855H349.776v-30.544H487.16l-0.629-60.428-19.734-0.628-55.965 55.337-36.891-33.058 69.32-68.692-1.917-31.172-87.137 80.13-52.792-52.791s69.949-45.156 92.857-151.368l78.213 19.734-12.695 41.322s340.883-124.657 384.153 92.857v278.57z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconTaobao.defaultProps = {
  size: 0.2,
};

export default IconTaobao;
