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

const IconTousuyujianyi1: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M925.01333333 100.64782223c22.7328 22.7328 34.4064 50.85866667 35.0208 84.44586667v532.00213333c-0.6144 33.5872-12.288 61.57653333-35.0208 83.968-22.7328 22.39146667-50.85866667 34.2016-84.44586666 35.49866667h-597.33333334l-137.216 119.46666666c-6.21226667 5.59786667-12.9024 8.3968-20.0704 8.3968s-12.62933333-2.79893333-16.31573333-8.3968c-2.52586667-3.14026667-4.02773333-6.21226667-4.64213333-9.35253333-0.6144-3.14026667-0.95573333-6.21226667-0.95573334-9.35253333V185.0936889c0.6144-33.5872 12.288-61.71306667 35.0208-84.44586667s50.85866667-34.4064 84.44586667-35.0208h657.06666667c33.5872 0.6144 61.71306667 12.288 84.44586666 35.0208zM756.5312 384.3640889c11.81013333-10.24 17.74933333-23.00586667 17.74933333-38.2976 0-15.22346667-4.98346667-27.8528-14.9504-37.81973334s-22.7328-15.22346667-38.2976-15.83786666H308.56533333c-14.9504 0.6144-27.51146667 5.9392-37.81973333 15.83786666-10.24 9.96693333-15.42826667 22.528-15.42826667 37.81973334 0 15.22346667 5.12 27.98933333 15.42826667 38.2976s22.86933333 15.42826667 37.81973333 15.42826666h406.9376c15.49653333-0.06826667 29.21813333-5.18826667 41.02826667-15.42826666z m0 197.35893333c11.81013333-9.96693333 17.74933333-22.7328 17.74933333-38.2976 0-15.5648-4.98346667-28.33066667-14.9504-38.2976s-22.7328-15.22346667-38.2976-15.83786667H308.56533333c-14.9504 0.6144-27.51146667 5.9392-37.81973333 15.83786667-10.24 9.96693333-15.42826667 22.7328-15.42826667 38.2976 0 15.5648 5.12 28.33066667 15.42826667 38.2976 10.24 9.96693333 22.86933333 15.22346667 37.81973333 15.83786667h406.9376c15.49653333-0.54613333 29.21813333-5.87093333 41.02826667-15.83786667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconTousuyujianyi1.defaultProps = {
  size: 0.2,
};

export default IconTousuyujianyi1;
