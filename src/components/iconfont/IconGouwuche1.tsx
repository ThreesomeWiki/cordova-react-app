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

const IconGouwuche1: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1061 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M505.00742207 868.33461011c35.78858863 0 64.81026815 29.01747126 64.81026814 64.82149023 0 35.80962999-29.02167953 64.80044884-64.81026814 64.80044882-35.79840792 0-64.81587918-28.99081882-64.81587918-64.79904606 0-35.80542173 29.01887402-64.82289297 64.81587918-64.82289299z m290.74423264 0c35.78999138 0 64.80746263 29.01747126 64.80746265 64.82149023 0 35.80962999-29.01747126 64.80044884-64.80746265 64.80044882-35.81243553 0-64.8186847-28.99081882-64.81868468-64.79904606 0-35.80542173 29.00624918-64.82289297 64.81868468-64.82289299z m80.75402618-264.52807098c100.7924375-4.29244233 181.20278771-87.3343683 181.20278771-189.19290261s-80.40754471-184.8990575-181.20278771-189.19570809v-0.20620556H266.0446326l-31.01920824-89.32768875c-6.89175464-47.40764085-49.74042894-84.50079526-97.64324372-84.50079528h-97.23924911c-21.47623924 0-38.89008861 17.40683559-38.89008861 38.88588035 0 21.48325304 17.41384937 38.89008861 38.88868585 38.89008861h97.24205464c9.30449998 0 19.34825394 8.7097302 20.66263906 17.93146742 0.01963863 0.1332621 0.05330484 0.26512143 0.06172139 0.39417525l151.06872036 584.51000806c6.89456015 47.38519671 49.75305377 84.48396216 97.6600768 84.48396217h510.72208276c21.48325304 0 38.8942969-17.4096411 38.89429687-38.89008862 0-21.46221165-17.41104386-38.88447758-38.89429687-38.88447757H406.83954652c-9.31291654 0-19.37630912-8.71393847-20.67947216-17.93287017a4.49724514 4.49724514 0 0 1-0.0645269-0.37874491l-28.20948213-116.37288094h518.61961556v-0.21321936zM285.29329065 304.59385079H876.50427813v0.40960561c56.91694363 4.21809611 101.8206598 51.61451487 101.8206598 109.6115829 0 57.9942625-44.9023134 105.39068126-101.8206598 109.60597185v0.41381389H338.62758797l-53.33429732-220.04097425z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconGouwuche1.defaultProps = {
  size: 0.2,
};

export default IconGouwuche1;
