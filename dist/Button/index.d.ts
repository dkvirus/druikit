import { CSSProperties, FC, ReactNode } from 'react';
export interface ButtonProps {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    type?: 'danger' | 'primary' | 'default';
    danger?: boolean;
    primary?: boolean;
    bordered?: boolean;
    prefix?: ReactNode;
    suffix?: ReactNode;
    shape?: 'round' | 'square';
    fullWidth?: boolean;
    left?: number;
    right?: number;
    gap?: number;
}
declare const Button: FC<ButtonProps>;
export default Button;
