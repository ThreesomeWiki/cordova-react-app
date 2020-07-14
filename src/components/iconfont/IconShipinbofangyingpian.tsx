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

const IconShipinbofangyingpian: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M880.85600971 61.42250059H142.79726076C68.72300087 61.42250059 8.60476095 121.54074052 8.60476095 195.61500041v603.86624914c0 74.07425989 60.11823991 134.19249981 134.19249981 134.19249981h738.05874895c74.07425989 0 134.19249981-60.11823991 134.19249981-134.19249981V195.61500041c0-74.07425989-60.11823991-134.19249981-134.19249981-134.19249982zM730.35912118 526.7349937L394.9449679 727.4869734c-5.36769999 3.15352375-11.33926623 4.76383374-17.31083247 4.76383375-5.70318125 0-11.40636248-1.40902125-16.50567748-4.36125625A33.36990055 33.36990055 0 0 1 344.08601048 698.76977845V297.26581902c0-12.07732498 6.50833623-23.14820621 17.04244747-29.11977246 10.46701499-5.97156624 23.48368747-5.7702775 33.81650995 0.40257749l335.41415328 200.75197972A33.44538382 33.44538382 0 0 1 746.6635099 498.01779873a33.36256188 33.36256188 0 0 1-16.30438872 28.71719497z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconShipinbofangyingpian.defaultProps = {
  size: 0.2,
};

export default IconShipinbofangyingpian;
