import React, { CSSProperties, ReactNode } from 'react';
import './styles.css';
export interface BaseSelectProps {
    style?: CSSProperties;
    className?: string;
    label?: string;
    labelStyle?: CSSProperties;
    labelClassName?: string;
    renderSelector?: ReactNode;
    selectorStyle?: CSSProperties;
    selectorClassName?: string;
    selectorSize?: 'small' | 'middle' | 'large';
    renderDropdown?: ReactNode;
    dropdownStyle?: CSSProperties;
    dropdownClassName?: string;
    disabled?: boolean;
    onOpenChanged?: (open: boolean) => void;
    onClickAway?: () => void;
    /**
     * @description 被选中时下拉框显示文字
     */
    selectorValue?: string;
    /**
     * @description 未被选中时下拉框显示文字
     */
    placeholder?: string;
    placement?: 'bottomLeft' | 'bottomRight';
}
export interface BaseSelectRefProps {
    close: () => void;
    getIsOpen: () => boolean;
}
declare const BaseSelect: React.ForwardRefExoticComponent<BaseSelectProps & React.RefAttributes<BaseSelectRefProps>>;
export default BaseSelect;
