import React, { CSSProperties, FC, ReactNode } from 'react';
import './styles.css';
export interface OptionItem {
    label: string;
    labelClassName?: string;
    value?: string;
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
    groupTitle?: boolean;
}
declare const SelectOption: FC<OptionProps>;
export default SelectOption;
export interface SelectDropdownHeaderProps {
    title?: string;
    onClick?: () => void;
}
export declare const SelectDropdownHeader: FC<SelectDropdownHeaderProps>;
export declare const SelectButtonGroup: ({ clearAll, onClearAll, selectAll, onSelectAll, }: {
    clearAll?: boolean | undefined;
    onClearAll?: (() => void) | undefined;
    selectAll?: boolean | undefined;
    onSelectAll?: (() => void) | undefined;
}) => React.JSX.Element;
export declare const SelectOkButton: ({ style, className, onClick, disabled, }: {
    style?: React.CSSProperties | undefined;
    className?: string | undefined;
    onClick?: (() => void) | undefined;
    disabled?: boolean | undefined;
}) => React.JSX.Element;
