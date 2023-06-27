import React, { CSSProperties } from 'react';
export interface AlertProps {
    style?: CSSProperties;
    className?: string;
    message?: string;
    type?: 'red' | 'green' | 'blue' | 'yellow';
}
export declare const Alert: ({ style, className, message, type, }: AlertProps) => React.JSX.Element;
