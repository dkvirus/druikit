import React, { CSSProperties } from 'react';
export interface TextProps {
    style?: CSSProperties;
    className?: string;
    fontSize?: number;
    fontSize32?: boolean;
    fontSize16?: boolean;
    fontSize14?: boolean;
    fontSize12?: boolean;
    color?: string;
    /**
     * @default #666666
     */
    color666?: boolean;
    /**
     * @description 蓝色字体
     * @default #01a699
     */
    colorBlue?: boolean;
    /**
     * @description 红色字体
     * @default #d62310
     */
    colorRed?: boolean;
    capitalize?: boolean;
    uppercase?: boolean;
    lowercase?: boolean;
    pointer?: boolean;
    children?: string;
    onClick?: (e: React.MouseEvent) => void;
}
export declare const Text: ({ style, className, fontSize, fontSize32, fontSize16, fontSize14, fontSize12, color, color666, colorBlue, colorRed, capitalize, uppercase, lowercase, pointer, children, ...props }: TextProps) => React.JSX.Element;
