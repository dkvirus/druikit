import { CSSProperties, FC } from 'react';
import { BaseSelectProps } from '../BaseSelect';
import { OptionItem } from '../SelectOption';
export interface SelectProps extends BaseSelectProps {
    style?: CSSProperties;
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    onClick?: (value: string) => void;
    disabled?: boolean;
    options?: OptionItem[];
    /**
     * @description 下拉框大小
     * @default middle
     */
    size?: 'small' | 'middle' | 'large';
    label?: string;
    labelStyle?: CSSProperties;
    labelClassName?: string;
    placeholder?: string;
    dropdownTitle?: string;
    dropdownStyle?: CSSProperties;
    dropdownClassName?: string;
    dropdownLabelStyle?: CSSProperties;
    dropdownLabelClassName?: string;
    dropdownHeight?: number;
    showSearch?: boolean;
}
declare const Select: FC<SelectProps>;
export default Select;
