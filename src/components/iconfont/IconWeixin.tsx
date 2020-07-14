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

const IconWeixin: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M579.799603 511.865001c-11.666932 0-23.339863 10.835937-23.339864 24.174858 0 10.837936 11.666932 21.674873 23.339864 21.674873 17.512897 0 30.016824-10.836937 30.016824-21.674873 0-13.337922-12.503927-24.174858-30.015824-24.174858zM503.099052 399.30766c18.341893 0 30.015824-11.667932 30.015824-29.180829 0-18.342893-11.672932-29.179829-30.015824-29.179829-17.507897 0-34.1838 10.837936-34.1838 29.179829 0 17.513897 16.675902 29.180829 34.1838 29.180829zM512.269998 0.559997C229.651654 0.559997 0.547997 229.663654 0.547997 512.280998c0 282.615344 229.103658 511.719002 511.721001 511.719002 282.616344 0 511.719002-229.103658 511.719002-511.719002C1023.989 229.662654 794.886342 0.559997 512.269998 0.559997z m-96.711433 641.364242c-30.849819 0-53.361687-4.998971-82.541516-13.339922l-84.206507 42.524751 24.181858-71.70558c-59.195653-41.681756-94.215448-94.209448-94.215448-158.407072 0-113.388336 106.718375-200.096828 236.782613-200.096828 115.054326 0 217.604725 68.367599 237.612608 165.084033-8.335951-1.67199-15.841907-2.501985-22.509868-2.501985-113.389336 0-200.928823 85.039502-200.928823 187.588901 0 17.505897 2.501985 33.346805 6.670961 50.023707-6.669961 0.829995-14.175917 0.829995-20.845878 0.829995z m347.667963 81.705521l16.671902 60.032648-63.362628-35.84979c-24.176858 4.997971-47.522722 12.502927-71.69958 12.502927-111.722345 0-200.096828-76.701551-200.096828-171.745994 0-95.045443 88.375482-171.748994 200.096828-171.748993 105.88238 0 200.927823 76.703551 200.927822 171.748993 0 53.354687-35.84979 100.877409-82.537516 135.059209zM338.021019 340.947002c-17.508897 0-35.84979 10.837936-35.84979 29.179829 0 17.512897 18.340893 29.185829 35.84979 29.185829 16.675902 0 30.014824-11.672932 30.014825-29.185829 0-18.341893-13.338922-29.179829-30.014825-29.179829z m372.680817 170.918999c-12.508927 0-23.346863 10.834937-23.346863 24.173858 0 10.837936 10.837936 21.674873 23.346863 21.674873 16.671902 0 29.179829-10.836937 29.179829-21.674873 0-13.337922-12.507927-24.174858-29.179829-24.174858z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconWeixin.defaultProps = {
  size: 0.2,
};

export default IconWeixin;
