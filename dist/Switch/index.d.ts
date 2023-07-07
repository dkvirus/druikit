import { CSSProperties, FC } from 'react';
import './styles.css';
export interface SwitchProps {
    style?: CSSProperties;
    className?: string;
    value?: boolean;
    onChange?: (value: boolean) => void;
    disabled?: boolean;
    leftLabel?: string;
    rightLabel?: string;
    label?: string;
    labelStyle?: CSSProperties;
    labelClassName?: string;
    /**
     * @description 开关与左右文本的距离
     * @default 4
     */
    gap?: number;
}
declare const Switch: FC<SwitchProps>;
export default Switch;
