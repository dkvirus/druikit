import React, { CSSProperties, ReactNode } from 'react';
export interface ButtonProps {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    type?: 'danger' | 'default';
    danger?: boolean;
    prefix?: ReactNode;
    suffix?: ReactNode;
    shape?: 'round' | 'square';
    left?: number;
    right?: number;
    gap?: number;
}
export declare const Button: ({ style, className, children, onClick, disabled, loading, type, danger, prefix, suffix, shape, left, right, gap, }: ButtonProps) => React.JSX.Element;
