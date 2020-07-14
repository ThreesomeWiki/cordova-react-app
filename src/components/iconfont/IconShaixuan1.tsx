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

const IconShaixuan1: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M129.02 195.557l228.587 230.057a8.171 8.171 0 0 1 2.41 5.76v376.157c0 25.78 13.483 49.68 35.545 63l134.17 80.893a73.54 73.54 0 0 0 111.535-62.999V433.131a8.171 8.171 0 0 1 2.778-6.128l260.903-227.892a73.54 73.54 0 0 0-48.414-128.94H181.193a73.54 73.54 0 0 0-52.172 125.386z m46.372-46.126a8.171 8.171 0 0 1 5.801-13.932h675.341a8.171 8.171 0 0 1 5.393 14.3L601.065 377.771a73.54 73.54 0 0 0-25.167 55.4v455.335a8.171 8.171 0 0 1-12.42 7.027l-134.17-80.894a8.171 8.171 0 0 1-3.922-7.027V431.415a73.54 73.54 0 0 0-21.367-51.845L175.35 149.472z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M736.705 584.95h163.422a32.684 32.684 0 1 0 0-65.368H736.705a32.684 32.684 0 1 0 0 65.368z m-1.552 122.567h163.422a32.684 32.684 0 1 0 0-65.369H735.153a32.684 32.684 0 1 0 0 65.369z m-7.11 122.566h163.423a32.684 32.684 0 1 0 0-65.368H728.044a32.684 32.684 0 1 0 0 65.368z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconShaixuan1.defaultProps = {
  size: 0.2,
};

export default IconShaixuan1;
