import { CSSProperties, DOMAttributes, FunctionComponent } from 'react';
interface Props extends DOMAttributes<SVGElement> {
    size?: number;
    color?: string | string[];
    style?: CSSProperties;
    className?: string;
}
declare const IconShezhi: FunctionComponent<Props>;
export default IconShezhi;
