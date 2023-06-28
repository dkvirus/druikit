import React, { CSSProperties, ReactNode } from 'react';
export interface CheckboxProps {
    style?: CSSProperties;
    className?: string;
    children?: string | ReactNode;
    value?: boolean;
    onChange?: (value: boolean) => void;
    disabled?: boolean;
    labelStyle?: CSSProperties;
    labelClassName?: string;
    labelColor?: string;
    labelSize?: number;
    boxStyle?: CSSProperties;
    boxClassName?: string;
    boxBgColor?: string;
    boxColor?: string;
    boxSize?: number;
    /**
     * @description 框与文字的位置
     * @default left
     */
    boxPosition?: 'left' | 'right';
    /**
     * @description 框与文字的距离
     * @default 10
     */
    gap?: number;
}
export declare const Checkbox: ({ style, className, children, value, onChange, disabled, labelStyle, labelClassName, labelColor, labelSize, boxStyle, boxClassName, boxBgColor, boxColor, boxSize, boxPosition, gap, }: CheckboxProps) => React.JSX.Element;
