import React, { CSSProperties, ReactNode } from 'react';
export interface CheckboxProps {
    style?: CSSProperties;
    className?: string;
    value?: boolean;
    onChange?: (value: boolean) => void;
    children?: string | ReactNode;
    labelColor?: string;
    labelSize?: number;
    labelStyle?: CSSProperties;
    labelClassName?: string;
    boxStyle?: CSSProperties;
    boxClassName?: string;
    boxBgColor?: string;
    boxColor?: string;
    boxSize?: number;
    boxPosition?: 'left' | 'right';
    gap?: number;
}
export declare const Checkbox: ({ style, className, value, onChange, children, labelStyle, labelClassName, labelColor, labelSize, boxStyle, boxClassName, boxBgColor, boxColor, boxSize, boxPosition, gap, }: CheckboxProps) => React.JSX.Element;
