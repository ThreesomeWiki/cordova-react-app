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

const IconPuhuojilu1: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 62A450 450 0 1 1 62 512 450 450 0 0 1 512 62z m0 94.73684239A355.26315762 355.26315762 0 1 0 867.26315762 512 355.26315762 355.26315762 0 0 0 512 156.73684238zM488.31578984 298.84210508a47.36842119 47.36842119 0 0 1 47.36842032 47.36842119v146.17894746l128.22631611 128.27368389a47.36842119 47.36842119 0 0 1 2.7947373 63.9947373l-2.7947373 2.98421016a47.36842119 47.36842119 0 0 1-66.97894746 0l-142.10526269-142.1052627-2.27368477-2.41578985A47.36842119 47.36842119 0 0 1 440.94736865 512V512.71052627 346.21052627a47.36842119 47.36842119 0 0 1 47.36842119-47.36842119z"
        fill={getIconColor(color, 0, '#FFA01A')}
      />
    </svg>
  );
};

IconPuhuojilu1.defaultProps = {
  size: 0.2,
};

export default IconPuhuojilu1;
