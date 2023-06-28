import { Property } from 'csstype';
import { CSSProperties } from 'react';
export declare function getFontSize({ fontSize, fontSize32, fontSize16, fontSize14, fontSize12, }: {
    fontSize?: number;
    fontSize32?: boolean;
    fontSize16?: boolean;
    fontSize14?: boolean;
    fontSize12?: boolean;
}): CSSProperties;
export declare function getFontWeight({ fontWeight, bold, bolder, }: {
    fontWeight?: Property.FontWeight;
    bold?: boolean;
    bolder?: boolean;
}): CSSProperties;
export declare function getColor({ color, color333, color666, color999, colorBlue, colorRed, }: {
    color?: string;
    color333?: boolean;
    color666?: boolean;
    color999?: boolean;
    colorBlue?: boolean;
    colorRed?: boolean;
}): CSSProperties;
export declare function getTextTransform({ capitalize, uppercase, lowercase, }: {
    capitalize?: boolean;
    uppercase?: boolean;
    lowercase?: boolean;
}): CSSProperties;
