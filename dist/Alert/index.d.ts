import { CSSProperties, FC } from 'react';
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
declare const Alert: FC<AlertProps>;
export default Alert;
