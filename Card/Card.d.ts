import React, { CSSProperties, ReactNode } from 'react';
import './styles.css';
export interface CardProps {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
    width?: number | string;
    fullWidth?: boolean;
    height?: number | string;
    fullHeight?: boolean;
    /**
     * @description 有刘海,卡片上变有条状样式
     * @default true
     */
    fringed?: boolean;
    fringeStyle?: CSSProperties;
    fringeClassName?: string;
    fringeHeight?: number;
}
export declare const Card: ({ style, className, children, width, fullWidth, height, fullHeight, fringed, fringeStyle, fringeClassName, fringeHeight, }: CardProps) => React.JSX.Element;
