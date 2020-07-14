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

const IconZu7: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1088 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M605.7472 47.8208l450.56 416.1536a25.6 25.6 0 0 1-17.408 44.4416h-74.4448a25.6 25.6 0 0 0-25.6 25.6v366.7456a99.2256 99.2256 0 0 1-99.1744 99.2256h-184.0128a25.6 25.6 0 0 1-25.6-25.6v-180.1728a91.7504 91.7504 0 0 0-91.7504-91.7504 89.344 89.344 0 0 0-89.344 89.3952v182.528a25.6 25.6 0 0 1-25.6 25.6h-174.08a99.2256 99.2256 0 0 1-99.1744-99.2256V534.016a25.6 25.6 0 0 0-25.6-25.6H50.0736a25.6 25.6 0 0 1-17.408-44.4416l450.56-416.1536a90.6752 90.6752 0 0 1 122.5216 0z"
        fill={getIconColor(color, 0, '#00B175')}
      />
      <path
        d="M839.68 1024h-184.0128a49.664 49.664 0 0 1-49.6128-49.6128v-180.1728a67.84 67.84 0 0 0-67.7888-67.7376 65.4336 65.4336 0 0 0-65.3824 65.3824v182.528a49.664 49.664 0 0 1-49.6128 49.6128h-174.08a123.3408 123.3408 0 0 1-123.1872-123.1872v-366.7456a1.6384 1.6384 0 0 0-1.6384-1.6384H49.92a49.6128 49.6128 0 0 1-33.6384-86.0672L466.8416 30.208a115.2 115.2 0 0 1 155.5456 0l450.56 416.1536a49.6128 49.6128 0 0 1-33.6384 86.0672h-74.4448a1.6384 1.6384 0 0 0-1.6896 1.6384v366.7456A123.2896 123.2896 0 0 1 839.68 1024z m-301.4144-345.4976a115.8656 115.8656 0 0 1 115.712 115.712v180.1728a1.6384 1.6384 0 0 0 1.6896 1.6384H839.68a75.3152 75.3152 0 0 0 75.2128-75.2128v-366.7456a49.7152 49.7152 0 0 1 49.6128-49.6128h74.4448c0.6144 0 1.1264 0 1.536-1.0752a1.3312 1.3312 0 0 0-0.4096-1.792l-450.56-416.1536a67.0208 67.0208 0 0 0-90.5216 0l-450.56 416.1536a1.3312 1.3312 0 0 0-0.4096 1.792c0.4096 1.0752 0.9216 1.0752 1.536 1.0752h74.4448a49.7152 49.7152 0 0 1 49.6128 49.6128v366.7456a75.3152 75.3152 0 0 0 75.2128 75.2128h174.08a1.6384 1.6384 0 0 0 1.6384-1.6384v-182.528a113.4592 113.4592 0 0 1 113.7152-113.3568z"
        fill={getIconColor(color, 1, '#171717')}
      />
    </svg>
  );
};

IconZu7.defaultProps = {
  size: 0.2,
};

export default IconZu7;
