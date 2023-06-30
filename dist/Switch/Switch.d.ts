import React, { CSSProperties } from 'react';
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
export declare const Switch: ({ style, className, value, onChange, disabled, leftLabel, rightLabel, label, labelStyle, labelClassName, gap, }: SwitchProps) => React.JSX.Element;
