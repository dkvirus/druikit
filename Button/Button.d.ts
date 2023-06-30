import React, { CSSProperties, ReactNode } from 'react';
export interface ButtonProps {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    type?: 'danger' | 'primary' | 'default';
    danger?: boolean;
    primary?: boolean;
    bordered?: boolean;
    prefix?: ReactNode;
    suffix?: ReactNode;
    shape?: 'round' | 'square';
    fullWidth?: boolean;
    left?: number;
    right?: number;
    gap?: number;
}
export declare const Button: ({ style, className, children, onClick, disabled, loading, type, danger, primary, bordered, prefix, suffix, shape, fullWidth, left, right, gap, }: ButtonProps) => React.JSX.Element;
