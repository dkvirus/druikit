import React, { CSSProperties } from 'react';
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
export declare const Divider: ({ style, className, type, vertical, horizontal, color, thickness, length, fullLength, gap, }: DividerProps) => React.JSX.Element;
