import { CSSProperties, FC } from 'react';
import './styles.css';
export interface SwitchProps {
    style?: CSSProperties;
    className?: string;
    value?: boolean;
    onChange?: (value: boolean) => void;
    disabled?: boolean;
    leftLabel?: string;
    leftLabelStyle?: CSSProperties;
    leftLabelClassName?: string;
    rightLabel?: string;
    rightLabelStyle?: CSSProperties;
    rightLabelClassName?: string;
    label?: string;
    labelStyle?: CSSProperties;
    labelClassName?: string;
    /**
     * @description 开关与左右文本的距离
     * @default 4
     */
    gap?: number;
    size?: 'small' | 'middle' | 'large';
}
declare const Switch: FC<SwitchProps>;
export default Switch;
