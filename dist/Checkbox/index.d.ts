import { CSSProperties, FC, ReactNode } from 'react';
export interface CheckboxProps {
    style?: CSSProperties;
    className?: string;
    children?: string | ReactNode;
    value?: boolean;
    onChange?: (value: boolean) => void;
    onClick?: () => void;
    disabled?: boolean;
    labelStyle?: CSSProperties;
    labelClassName?: string;
    labelColor?: string;
    labelSize?: number;
    boxStyle?: CSSProperties;
    boxClassName?: string;
    boxBgColor?: string;
    boxColor?: string;
    boxSize?: number;
    boxVisible?: boolean;
    /**
     * @description 框与文字的位置
     * @default left
     */
    boxPosition?: 'left' | 'right';
    /**
     * @description 框与文字的距离
     * @default 10
     */
    gap?: number;
}
declare const Checkbox: FC<CheckboxProps>;
export default Checkbox;
