import React, { CSSProperties, ReactNode } from 'react';
export interface ButtonProps {
    style?: CSSProperties;
    className?: string;
    left?: number;
    right?: number;
    children?: ReactNode;
    onClick?: () => void;
    type?: 'red' | 'default';
    prefix?: ReactNode;
    suffix?: ReactNode;
    shape?: 'round' | 'square';
}
export declare const Button: ({ style, className, children, onClick, type, prefix, suffix, shape, left, right, }: ButtonProps) => React.JSX.Element;
