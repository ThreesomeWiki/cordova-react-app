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

const IconZu12: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1029 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M965.99488203 714.99042793v95.00368095a152.00589112 152.00589112 0 0 1-152.00589111 152.00589112H214.0059834a152.00589112 152.00589112 0 0 1-152.00589024-152.00589112V333.99785762a31.68025224 31.68025224 0 0 1 3.35988633-14.27835762l0.31976807-0.88052256 79.04769785-188.19997559A111.99775518 111.99775518 0 0 1 247.96632412 62h532.07159502a111.98848623 111.98848623 0 0 1 103.21570723 68.6158295l79.04769785 188.21851435c7.28979434 17.30920781 3.69355781 378.48076523 3.69355781 396.15608408z m-80.17383867-412.99259062l-61.54384834-146.59763203a47.99771367 47.99771367 0 0 0-44.23927588-29.40016377H247.96632412a47.99771367 47.99771367 0 0 0-44.23464141 29.39089482L142.12758799 301.99783731h743.70735791z"
        fill={getIconColor(color, 0, '#00B175')}
      />
      <path
        d="M653.40496338 578.79222295l-51.62175703-72.89331328a42.68214229 42.68214229 0 0 1 0.57002256-47.39988516c9.73208408-12.87415723 25.26171065-12.51267979 34.68329473 0.7785668l74.08896855 104.64771357a69.59367247 69.59367247 0 0 1 0.21317958 75.44219239l-74.18165536 106.40412333c-9.34280068 13.39783594-24.86779277 13.90297763-34.66939219 1.13077529a42.66823887 42.66823887 0 0 1-0.82954424-47.38134813l37.43145-53.70720382H356.21490957c-13.54613467 0-24.52021875-15.00131338-24.52021875-33.51081094s10.97871855-33.51544541 24.52021875-33.51544453h297.19005381z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </svg>
  );
};

IconZu12.defaultProps = {
  size: 0.2,
};

export default IconZu12;
