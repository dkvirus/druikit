import { CSSProperties, FC } from 'react';
export interface DividerProps {
    style?: CSSProperties;
    className?: string;
    type?: 'vertical' | 'horizontal';
    vertical?: boolean;
    horizontal?: boolean;
    color?: string;
    thickness?: number;
    length?: number | string;
    fullLength?: boolean;
    gap?: number;
}
declare const Divider: FC<DividerProps>;
export default Divider;
