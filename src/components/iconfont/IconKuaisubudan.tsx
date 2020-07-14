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

const IconKuaisubudan: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M180.5 180v-80c0-19.882 16.118-36 36-36s36 16.118 36 36v80H333c19.882 0 36 16.118 36 36s-16.118 36-36 36h-80.5v81c0 19.882-16.118 36-36 36s-36-16.118-36-36v-81H99c-19.882 0-36-16.118-36-36s16.118-36 36-36h81.5z m238.418-36c-22.092 0-40-17.909-40-40s17.908-40 40-40H800c61.856 0 112 50.144 112 112v672c0 61.856-50.144 112-112 112H320c-61.856 0-112-50.144-112-112V476.903c0-22.091 17.909-40 40-40s40 17.909 40 40V848c0 17.673 14.327 32 32 32h480c17.673 0 32-14.327 32-32V176c0-17.673-14.327-32-32-32H418.918zM398 384c-22.091 0-40-17.909-40-40s17.909-40 40-40h324c22.091 0 40 17.909 40 40s-17.909 40-40 40H398z m0 198c-22.091 0-40-17.909-40-40s17.909-40 40-40h324c22.091 0 40 17.909 40 40s-17.909 40-40 40H398z m0 198c-22.091 0-40-17.909-40-40s17.909-40 40-40h244c22.091 0 40 17.909 40 40s-17.909 40-40 40H398z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconKuaisubudan.defaultProps = {
  size: 0.2,
};

export default IconKuaisubudan;
