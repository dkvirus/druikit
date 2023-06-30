import React, { CSSProperties } from 'react';
import { BaseSelectProps } from '../BaseSelect';
import { OptionItem } from '../SelectOption';
export interface SelectProps extends BaseSelectProps {
    style?: CSSProperties;
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    options?: OptionItem[];
    label?: string;
    labelStyle?: CSSProperties;
    labelClassName?: string;
    placeholder?: string;
    dropdownTitle?: string;
    dropdownStyle?: CSSProperties;
    dropdownClassName?: string;
}
export declare const Select: ({ style, className, value, onChange, disabled, options, label, labelStyle, labelClassName, placeholder, dropdownTitle, dropdownStyle, dropdownClassName, ...props }: SelectProps) => React.JSX.Element;
