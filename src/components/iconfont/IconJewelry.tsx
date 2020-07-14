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

const IconJewelry: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1028 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M793.353159 127.013285C788.757212 120.978393 781.606701 117.435964 774.021014 117.435964L526.327177 117.435964C518.583824 117.435964 483.890627 117.435964 475.060807 117.435964 466.230987 117.435964 482.176626 161.803936 483.890627 169.360544 484.416564 171.679277 503.502676 167.131636 504.788585 169.360544L666.818369 433.880875 665.166215 413.067087 478.578795 901.572521C476.722143 906.433431 475.512321 910.817907 475.060807 915.080171 473.971201 925.365995 476.431723 935.280759 487.711307 941.927533 498.610029 948.349873 508.106155 946.053523 516.598194 940.610133 520.169202 938.32112 523.548263 935.307471 527.069865 931.519855L946.940048 525.074423C956.582134 515.739556 956.831186 500.355693 947.496316 490.713604 938.161447 481.071516 922.777584 480.822466 913.135497 490.157335L492.371361 897.514955C500.172997 889.074709 528.908982 906.008098 523.97964 918.913632L710.56706 430.408196C713.176959 423.575209 712.570104 415.930089 708.914906 409.594411L547.375448 129.592684 526.327179 166.035869 774.021014 166.035869 754.688869 156.458548 959.305532 425.138701C967.436617 435.81555 982.683459 437.879298 993.360308 429.748213 1004.037157 421.617129 1006.100905 406.370287 997.96982 395.693438L793.353159 127.013285Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M773.224427 175.240885 676.300754 401.396124 661.784107 435.268299 698.635935 435.268297 990.787629 435.268294 990.787629 386.668388 698.635935 386.668393 720.971115 420.540565 817.894789 194.385325 773.224427 175.240885 773.224427 175.240885Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M451.432425 129.592684 289.892969 409.594411 284.288295 419.309178 288.044944 429.876896 461.582175 918.049299C457.173579 905.64761 485.619836 888.843351 494.238928 898.385182L48.971945 405.449026 50.918742 435.569419 244.766091 155.567692 224.786859 166.035869 472.480694 166.035869 451.432425 129.592684 451.432425 129.592684ZM493.528963 153.879148 514.553876 117.435964 472.480694 117.435964 224.786859 117.435964 212.054827 117.435964 204.807629 127.904141 10.96028 407.905867 0 423.737382 12.907077 438.026257 458.174059 930.962415C461.700269 934.866131 465.088402 937.968009 468.692781 940.328418 477.198497 945.898577 486.86492 948.259213 497.834403 941.779134 508.86517 935.26285 511.441311 925.577137 510.594149 915.413478 510.236741 911.125527 509.123525 906.690182 507.374761 901.77079L333.83753 413.598387 331.989505 433.880875 493.528963 153.879148 493.528963 153.879148Z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <path
        d="M191.682382 194.385325 288.606057 420.540565 310.941236 386.668393 52.478105 386.668393 52.478105 435.268297 310.941236 435.268297 347.793063 435.268297 333.276417 401.396124 236.352743 175.240885 191.682382 194.385325 191.682382 194.385325Z"
        fill={getIconColor(color, 3, '#333333')}
      />
      <path
        d="M310.388965 422.56605 966.487683 422.56605C979.908178 422.56605 990.787636 411.68659 990.787636 398.266097 990.787636 384.845604 979.908178 373.966144 966.487683 373.966144L310.388965 373.966144C296.968472 373.966144 286.089012 384.845604 286.089012 398.266097 286.089012 411.68659 296.968472 422.56605 310.388965 422.56605L310.388965 422.56605Z"
        fill={getIconColor(color, 4, '#333333')}
      />
    </svg>
  );
};

IconJewelry.defaultProps = {
  size: 0.2,
};

export default IconJewelry;
