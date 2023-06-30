import React, { CSSProperties, ReactNode } from 'react';
export interface SpinProps {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
    spinning?: boolean;
    size?: 'small' | 'default' | 'large';
    maskStyle?: CSSProperties;
    zIndex?: number;
    minHeight?: number;
}
export declare const Spin: ({ style, className, children, spinning, size, maskStyle, zIndex, minHeight, }: SpinProps) => React.JSX.Element;
