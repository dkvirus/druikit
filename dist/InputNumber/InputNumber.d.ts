import React, { CSSProperties } from 'react';
export declare type InputNumberValue = number | string | undefined | null;
export interface InputNumberProps {
    style?: CSSProperties;
    className?: string;
    value?: InputNumberValue;
    onChange?: (value: string) => void;
    onBlur?: (value: string) => void;
    /**
     * @description 最大值
     */
    max?: number;
    /**
     * @description 最小值
     */
    min?: number;
    /**
     * @description 最大长度
     * @default 9999
     */
    maxLength?: number;
    /**
     * @description 是否允许为空
     */
    empty?: boolean;
    /**
     * @description 禁用
     * @default false
     */
    disabled?: boolean;
    /**
     * @description 提示文字
     */
    placeholder?: string;
    width?: number;
    height?: number;
    padding?: number;
    fontSize?: number;
    /**
     * @default center
     */
    textAlign?: 'left' | 'center' | 'right';
}
/**
 * value = 10.0 在页面上回显会变成 10, 因为数值 10.0 会自动变成数值 10
 * 但业务上有时需要回显也是 10.0, 基于这个原则, value 允许是字符串
 */
export declare const InputNumber: ({ style, className, value, onChange, onBlur, max, min, maxLength, empty, disabled, placeholder, width, height, padding, fontSize, textAlign, }: InputNumberProps) => React.JSX.Element;
