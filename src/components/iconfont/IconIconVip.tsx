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

const IconIconVip: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M573.446 434.375c-26.929 11.085-51.613 25.868-74.055 44.346-22.441 18.48-41.842 39.601-58.21 63.361-16.366 23.757-29.04 49.763-38.016 78.012-8.976 28.248-13.464 57.949-13.464 89.099 0 27.456 3.565 53.72 10.692 78.8 7.125 25.08 17.027 48.712 29.701 70.885H408.71c-15.31 0-33.127-0.524-53.458-1.582-20.325-1.057-41.312-2.511-62.96-4.36a2550.747 2550.747 0 0 1-64.547-6.33c-21.388-2.376-40.79-4.888-58.212-7.526-17.427-2.637-32.21-5.28-44.352-7.922-12.146-2.633-19.801-5.276-22.965-7.916-5.81-4.226-10.163-17.293-13.07-39.201-2.902-21.915-1.717-50.034 3.563-84.347 2.108-13.201 6.47-24.03 13.065-32.474 6.604-8.45 14.655-15.706 24.16-21.776 9.501-6.076 20.065-10.96 31.682-14.655a1141.222 1141.222 0 0 1 35.64-10.695c12.14-3.433 23.89-7.129 35.237-11.09 11.355-3.958 21.782-8.84 31.287-14.649 11.086-6.867 19.67-13.597 25.74-20.196 6.07-6.6 10.433-13.066 13.069-19.406a50.933 50.933 0 0 0 3.958-19.798c0-6.866-0.261-14.517-0.794-22.966-1.056-12.144-5.277-21.778-12.67-28.906-7.393-7.126-15.573-14.393-24.551-21.78-4.224-3.697-8.049-8.845-11.484-15.45a197.006 197.006 0 0 1-9.107-20.192 1353.6 1353.6 0 0 1-7.917-24.554c-3.698-1.052-7.394-2.902-11.09-5.543-3.169-2.636-6.6-6.332-10.296-11.086-3.697-4.753-6.86-11.618-9.501-20.596-2.641-8.973-3.702-17.156-3.17-24.546 0.529-7.393 2.109-13.996 4.75-19.8 2.116-5.81 5.543-11.357 10.299-16.633 0-20.064 1.052-40.127 3.164-60.19 2.113-16.9 5.81-35.112 11.091-54.648 5.28-19.54 13.464-36.964 24.55-52.274 10.562-14.787 21.913-26.795 34.056-36.035 12.145-9.24 24.816-16.499 38.018-21.775 13.198-5.286 26.262-8.846 39.2-10.697 12.936-1.85 25.474-2.772 37.615-2.772 15.316 0 30.493 1.716 45.543 5.148 15.047 3.434 29.173 8.05 42.372 13.86 13.202 5.808 24.943 12.408 35.245 19.8 10.29 7.393 18.347 14.783 24.15 22.175 13.73 16.895 23.76 35.507 30.098 55.833 6.337 20.33 10.829 39.733 13.462 58.215 2.644 21.116 3.961 42.501 3.961 64.15 3.697 2.64 6.6 6.071 8.713 10.295 2.112 3.698 3.83 8.45 5.147 14.255 1.322 5.808 1.455 12.937 0.4 21.385-1.057 11.62-3.303 20.726-6.733 27.326-3.435 6.599-7.26 11.746-11.488 15.442-4.75 4.222-9.765 7.129-15.045 8.712a245.178 245.178 0 0 0-3.165 10.291l-3.963 11.095c-1.058 3.693-2.38 7.652-3.96 11.88z m113.25 25.336c34.323 0 66.66 6.603 97.02 19.8 30.359 13.204 56.764 31.155 79.198 53.857 22.443 22.704 40.264 49.233 53.458 79.592 13.203 30.364 19.802 62.699 19.802 97.023 0 34.32-6.594 66.659-19.802 97.018-13.199 30.359-31.015 56.884-53.458 79.59-22.434 22.71-48.838 40.53-79.198 53.464-30.36 12.936-62.698 19.4-97.02 19.4-34.846 0-67.45-6.47-97.81-19.4-30.356-12.938-56.76-30.754-79.198-53.464-22.44-22.706-40.26-49.233-53.458-79.59-13.203-30.36-19.801-62.698-19.801-97.018 0-34.324 6.6-66.66 19.8-97.023 13.2-30.358 31.02-56.888 53.459-79.592 22.438-22.702 48.842-40.653 79.198-53.856 30.359-13.199 62.963-19.8 97.81-19.8z m145.725 201.167c3.173-10.556 1.717-20.192-4.354-28.91-6.071-8.71-14.121-14.913-24.155-18.61-10.03-3.693-20.064-3.958-30.099-0.79-10.029 3.17-17.418 11.353-22.17 24.55a1722.206 1722.206 0 0 1-7.528 24.954 936.888 936.888 0 0 0-7.127 24.151c-2.373 8.451-5.275 17.555-8.712 27.329-3.43 9.765-7.788 20.986-13.068 33.657-5.278 13.724-12.804 20.196-22.571 19.4-9.768-0.792-17.292-6.464-22.571-17.027-5.81-10.56-11.224-21.91-16.235-34.052a12233.838 12233.838 0 0 1-14.654-35.64 1971.518 1971.518 0 0 1-12.674-31.68c-3.693-9.507-6.861-17.165-9.506-22.977-4.22-8.443-11.214-13.194-20.982-14.248-9.768-1.056-19.278 0.396-28.513 4.352-9.24 3.96-16.895 10.167-22.967 18.614-6.07 8.45-6.997 17.689-2.772 27.719a4259.535 4259.535 0 0 0 12.668 35.64 2001.121 2001.121 0 0 0 15.05 40.393 2008.94 2008.94 0 0 1 15.048 40.393c4.753 13.197 8.973 24.55 12.67 34.052 7.92 20.063 19.935 35.115 36.034 45.144 16.11 10.036 33 15.314 50.69 15.839 17.685 0.53 34.583-3.434 50.688-11.878 16.107-8.448 27.853-21.12 35.241-38.015a2697.616 2697.616 0 0 0 17.818-43.165 3664.94 3664.94 0 0 0 17.43-43.955c5.54-14.256 10.692-27.986 15.44-41.186 4.754-13.2 8.713-24.55 11.88-34.054z m0 0"
        fill={getIconColor(color, 0, '#2C2C2C')}
      />
    </svg>
  );
};

IconIconVip.defaultProps = {
  size: 0.2,
};

export default IconIconVip;
