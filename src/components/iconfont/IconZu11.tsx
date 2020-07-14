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

const IconZu11: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1028 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M126.01039151 365.99794033v443.99845547a87.99794033 87.99794033 0 0 0 87.99794033 87.99794034h600.006179a87.99794033 87.99794033 0 0 0 88.00257481-87.99794034v-95.00514961a32.00051513 32.00051513 0 1 1 64.00102938 0v95.00514961a152.00823867 152.00823867 0 0 1-152.00823866 152.00823867H214.01296631a152.00823867 152.00823867 0 0 1-152.00823956-152.00823867V334.00205967a31.6807418 31.6807418 0 0 1 3.35993819-14.2785791l0.31977422-0.88053487 79.04891777-188.20288388A111.99948487 111.99948487 0 0 1 247.97383086 62h532.07981455a111.99021592 111.99021592 0 0 1 103.21730245 68.61688945l79.04891865 188.22142178a33.96086543 33.96086543 0 0 1-31.36096846 47.1596291H126.01039151z m759.83728096-64.00103027l-61.55406827-146.5952625a47.99845547 47.99845547 0 0 0-44.23995879-29.40061728H247.97383086a47.99845547 47.99845547 0 0 0-44.23532432 29.39134834L142.13345996 302.00154453h743.71884697z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M644.14993818 578.80484053l-51.6225542-72.89443917a42.68280146 42.68280146 0 0 1 0.57003135-47.40061728c9.73223438-12.87435674 25.26210088-12.51287315 34.68383086 0.77857822l74.09011289 104.64933077a69.59474737 69.59474737 0 0 1 0.21318223 75.44335781l-74.18280058 106.40576689c-9.3429457 13.39804336-24.86817685 13.90319297-34.66992833 1.13079288a42.66889805 42.66889805 0 0 1-0.82955742-47.38208028l37.4320292-53.70803261H346.95529385c-13.54634385 0-24.52059756-15.00154453-24.52059756-33.51132862s10.97888818-33.51596308 24.52059756-33.51596308h297.19464433z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconZu11.defaultProps = {
  size: 0.2,
};

export default IconZu11;
