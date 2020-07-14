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

const IconZu9: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M220.450853 209.547568h583.002344a127.37178 127.37178 0 0 1 127.37178 127.37178v614.333345a49.351445 49.351445 0 0 1-49.351445 49.351445H220.450853a127.37178 127.37178 0 0 1-127.37178-127.218196V336.919348a127.37178 127.37178 0 0 1 127.37178-127.37178z"
        fill={getIconColor(color, 0, '#00B175')}
      />
      <path
        d="M812.821781 1024H211.031075C125.229184 1024 69.7856 977.924999 69.7856 906.252776V327.755543a141.450253 141.450253 0 0 1 141.245475-141.245475h601.790706A141.450253 141.450253 0 0 1 954.067255 327.755543v578.497233c-0.153583 71.672224-55.443584 117.747224-141.245474 117.747224zM211.031075 232.789846a94.812113 94.812113 0 0 0-94.709724 94.709724v578.497233c0 64.453807 66.245612 71.416251 94.709724 71.416252h601.790706c28.464112 0 94.709724-6.962445 94.709724-71.416252v-578.497233a94.812113 94.812113 0 0 0-94.709724-94.709724z"
        fill={getIconColor(color, 1, '#171717')}
      />
      <path
        d="M645.518333 128.097205a139.453669 139.453669 0 0 0-270.101894 0H295.245938v197.815337h430.494091V128.097205z"
        fill={getIconColor(color, 2, '#00B175')}
      />
      <path
        d="M749.13589 349.154821H272.106048V104.803733h86.518613a162.695947 162.695947 0 0 1 304.043811 0h86.467418z m-430.494091-46.535751h383.958341V151.390678h-74.948668l-4.505112-17.5085a116.211391 116.211391 0 0 0-225.255559 0l-4.453917 17.5085H318.437021z"
        fill={getIconColor(color, 3, '#171717')}
      />
      <path
        d="M733.00964 535.349019H290.89441a23.293473 23.293473 0 1 1 0-46.586946h442.11523a23.293473 23.293473 0 0 1 0 46.586946z"
        fill={getIconColor(color, 4, '#171717')}
      />
      <path
        d="M733.00964 680.997216H290.89441a23.293473 23.293473 0 1 1 0-46.535751h442.11523a23.293473 23.293473 0 0 1 0 46.535751z"
        fill={getIconColor(color, 5, '#171717')}
      />
      <path
        d="M465.877024 826.184663H290.89441a23.293473 23.293473 0 1 1 0-46.535751h174.982614a23.293473 23.293473 0 1 1 0 46.535751z"
        fill={getIconColor(color, 6, '#171717')}
      />
    </svg>
  );
};

IconZu9.defaultProps = {
  size: 0.2,
};

export default IconZu9;
