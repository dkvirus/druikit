import { CSSProperties } from 'react';
export declare function getFontSize({ fontSize, fontSize32, fontSize16, fontSize14, fontSize12, }: {
    fontSize?: number;
    fontSize32?: boolean;
    fontSize16?: boolean;
    fontSize14?: boolean;
    fontSize12?: boolean;
}): CSSProperties;
export declare function getColor({ color, color666, colorBlue, colorRed, }: {
    color?: string;
    color666?: boolean;
    colorBlue?: boolean;
    colorRed?: boolean;
}): CSSProperties;
export declare function getTextTransform({ capitalize, uppercase, lowercase, }: {
    capitalize?: boolean;
    uppercase?: boolean;
    lowercase?: boolean;
}): CSSProperties;
