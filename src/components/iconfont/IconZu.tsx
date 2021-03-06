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

const IconZu: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 1024a140.1856 140.1856 0 0 1-70.1952-18.7392l-321.8944-185.856A140.6976 140.6976 0 0 1 49.7152 697.856V326.144a140.6976 140.6976 0 0 1 70.1952-121.5488L441.8048 18.7392a140.7488 140.7488 0 0 1 140.3392 0l321.8944 185.856a140.6976 140.6976 0 0 1 70.1952 121.5488v371.712a140.6976 140.6976 0 0 1-70.1952 121.5488l-321.8944 185.856a140.1344 140.1344 0 0 1-70.144 18.7392z m0-976.0768a92.16 92.16 0 0 0-46.08 12.3392L144.0256 246.0672a92.7744 92.7744 0 0 0-46.08 80.0768v371.712a92.7744 92.7744 0 0 0 46.08 80.0768l321.8944 185.8048a92.6208 92.6208 0 0 0 92.4672 0l321.8432-185.8048a92.7744 92.7744 0 0 0 46.08-80.0768V326.144a92.7744 92.7744 0 0 0-46.08-80.0768L558.3872 60.2624a92.416 92.416 0 0 0-46.3872-12.3392z"
        fill={getIconColor(color, 0, '#727272')}
      />
      <path
        d="M535.9104 1000.2432l-47.872-0.256 2.0992-415.2832a97.28 97.28 0 0 0-54.2208-87.5008L434.7904 496.64l-368.64-204.3392 23.2448-41.8816 368.0768 204.032a145.5104 145.5104 0 0 1 80.5376 130.5088z"
        fill={getIconColor(color, 1, '#727272')}
      />
      <path
        d="M490.5472 1000.2944l-2.1504-415.3344a145.7664 145.7664 0 0 1 80.2816-130.3552l367.8208-215.8592 24.2688 41.3184-370.176 217.1904a97.28 97.28 0 0 0-54.272 87.4496l2.1504 415.3344z"
        fill={getIconColor(color, 2, '#727272')}
      />
      <path
        d="M598.3232 317.3376a24.064 24.064 0 0 1-12.4416-3.4816L310.3744 146.1248a23.9616 23.9616 0 0 1 24.9344-40.96l275.5072 167.7312a23.9104 23.9104 0 0 1-12.4928 44.3904z"
        fill={getIconColor(color, 3, '#727272')}
      />
    </svg>
  );
};

IconZu.defaultProps = {
  size: 0.2,
};

export default IconZu;
