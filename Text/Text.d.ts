import { Property } from 'csstype';
import React, { CSSProperties } from 'react';
export interface TextProps {
    style?: CSSProperties;
    className?: string;
    children?: string;
    fontSize?: number;
    fontSize32?: boolean;
    fontSize16?: boolean;
    fontSize14?: boolean;
    fontSize12?: boolean;
    fontWeight?: Property.FontWeight;
    bold?: boolean;
    bolder?: boolean;
    color?: string;
    color333?: boolean;
    color666?: boolean;
    color999?: boolean;
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
    onClick?: (e: React.MouseEvent) => void;
}
export declare const Text: ({ style, className, children, fontSize, fontSize32, fontSize16, fontSize14, fontSize12, fontWeight, bold, bolder, color, color333, color666, color999, colorBlue, colorRed, capitalize, uppercase, lowercase, pointer, ...props }: TextProps) => React.JSX.Element;
