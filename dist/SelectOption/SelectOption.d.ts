import React, { CSSProperties, ReactNode } from 'react';
import './styles.css';
export interface OptionItem {
    label: string;
    value: string;
    disabled?: boolean;
    checked?: boolean;
}
export interface OptionProps {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
    value?: boolean;
    onChange?: (value: boolean) => void;
    disabled?: boolean;
    labelStyle?: CSSProperties;
    labelClassName?: string;
    boxVisible?: boolean;
}
export declare const SelectOption: ({ style, className, children, value, onChange, disabled, labelStyle, labelClassName, boxVisible, }: OptionProps) => React.JSX.Element;
export interface SelectDropdownHeaderProps {
    title?: string;
    onClick?: () => void;
}
export declare const SelectDropdownHeader: ({ title, onClick, }: SelectDropdownHeaderProps) => React.JSX.Element | null;
export declare const SelectButtonGroup: ({ clearAll, onClearAll, selectAll, onSelectAll, }: {
    clearAll?: boolean | undefined;
    onClearAll?: (() => void) | undefined;
    selectAll?: boolean | undefined;
    onSelectAll?: (() => void) | undefined;
}) => React.JSX.Element;
export declare const SelectOkButton: ({ onClick, disabled, }: {
    onClick?: (() => void) | undefined;
    disabled?: boolean | undefined;
}) => React.JSX.Element;
