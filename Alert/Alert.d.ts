import React, { CSSProperties } from 'react';
export interface AlertProps {
    style?: CSSProperties;
    className?: string;
    message?: string;
    type?: 'error' | 'success' | 'warning' | 'info';
    error?: boolean;
    success?: boolean;
    warning?: boolean;
    info?: boolean;
}
export declare const Alert: ({ style, className, message, type, error, success, warning, info, }: AlertProps) => React.JSX.Element;
