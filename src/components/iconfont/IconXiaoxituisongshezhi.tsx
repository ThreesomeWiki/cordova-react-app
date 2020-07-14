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

const IconXiaoxituisongshezhi: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M808.192 185.344C731.776 107.52 634.944 67.136 517.696 64.192c-117.824 2.944-216.576 44.16-296.192 123.84S100.608 366.336 97.664 484.16c0.576 56.576 10.944 109.056 31.04 157.504 20.096 48.448 47.104 91.008 80.96 127.744 6.4 9.344 9.216 21.12 8.32 35.456-0.896 14.272-9.216 28.736-24.96 43.328-2.944 2.944-8.64 6.592-17.088 10.944-8.448 4.352-19.712 8.32-33.664 11.84-2.368 0-3.776 0.896-4.352 2.624l-0.896 2.624c11.072 5.824 21.312 10.944 30.656 15.296 9.344 4.352 19.52 6.848 30.656 7.424 27.392-0.576 48.704-3.968 63.872-10.048 15.168-6.144 29.44-12.096 42.88-17.92 8.768-2.944 17.792-4.352 27.136-4.352 9.344 0 16.896 1.472 22.72 4.352 22.72 8.192 46.656 14.72 71.744 19.712 25.088 4.928 51.648 7.744 79.616 8.32 117.824-3.52 216.576-44.928 296.192-124.224s120.896-177.92 123.84-295.744c-2.368-117.952-41.728-215.808-118.144-293.696zM720.64 477.696c0 17.728-9.216 33.408-23.104 42.496l-140.48 140.48c-19.712 19.712-52.032 19.712-71.744 0L480 655.296c-19.712-19.712-19.712-52.032 0-71.744l55.104-55.104H354.048c-27.904 0-50.752-22.848-50.752-50.752v-7.552c0-27.904 22.848-50.752 50.752-50.752h181.056L480 364.288c-19.712-19.712-19.712-52.032 0-71.744l5.312-5.312c19.712-19.712 52.032-19.712 71.744 0l140.48 140.48c13.888 9.088 23.104 24.704 23.104 42.496v7.488z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconXiaoxituisongshezhi.defaultProps = {
  size: 0.2,
};

export default IconXiaoxituisongshezhi;
