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

const IconZu6: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1089 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M839.62838 1023.999488h-184.012708a49.715175 49.715175 0 0 1-49.612775-49.612775v-180.32631a67.839966 67.839966 0 0 0-67.788766-67.737566 65.433567 65.433567 0 0 0-65.382367 65.382367v182.527909a49.663975 49.663975 0 0 1-49.612776 49.612775h-174.079913a123.289538 123.289538 0 0 1-122.879938-123.187138v-366.745417a1.638399 1.638399 0 0 0-1.689599-1.638399H50.124775a49.612775 49.612775 0 0 1-33.638383-86.067157l450.559774-416.153392a115.251142 115.251142 0 0 1 155.596723 0l450.559774 416.153392a49.663975 49.663975 0 0 1-33.689583 86.067157h-74.444763a1.638399 1.638399 0 0 0-1.638399 1.638399v366.745417A123.289538 123.289538 0 0 1 839.62838 1023.999488z m-301.414249-345.497427a115.865542 115.865542 0 0 1 115.711942 115.711942v180.17271a1.638399 1.638399 0 0 0 1.689599 1.638399h184.012708a75.315162 75.315162 0 0 0 75.212763-75.212762v-366.745417a49.715175 49.715175 0 0 1 49.612775-49.612775h74.444763a1.331199 1.331199 0 0 0 1.535999-1.024 1.331199 1.331199 0 0 0-0.4096-1.843199l-450.559775-416.153392a67.020766 67.020766 0 0 0-90.521554 0l-450.559775 416.153392a1.382399 1.382399 0 0 0-0.4096 1.843199 1.331199 1.331199 0 0 0 1.535999 1.024h74.444763a49.663975 49.663975 0 0 1 49.612775 49.612775v366.745417a75.315162 75.315162 0 0 0 75.212763 75.212762h174.079913a1.638399 1.638399 0 0 0 1.689599-1.638399v-182.527909a113.459143 113.459143 0 0 1 113.663943-113.356743z"
        fill={getIconColor(color, 0, '#727272')}
      />
    </svg>
  );
};

IconZu6.defaultProps = {
  size: 0.2,
};

export default IconZu6;
