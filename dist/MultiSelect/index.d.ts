import { CSSProperties, FC } from 'react';
import { BaseSelectProps } from '../BaseSelect';
import { OptionItem } from '../SelectOption';
export interface MultiSelectProps extends BaseSelectProps {
    style?: CSSProperties;
    className?: string;
    value?: string[];
    onChange?: (value: string[]) => void;
    disabled?: boolean;
    options?: OptionItem[];
    label?: string;
    labelStyle?: CSSProperties;
    labelClassName?: string;
    placeholder?: string;
    dropdownTitle?: string;
    dropdownMaxHeight?: number;
    dropdownStyle?: CSSProperties;
    dropdownClassName?: string;
    /**
     * @description 显示 Select All 按钮
     * @default true
     */
    selectAll?: boolean;
    /**
     * @description 显示 Clear All 按钮
     * @default true
     */
    clearAll?: boolean;
    /**
     * 最少选中数目
     */
    minCount?: number;
    /**
     * 最多选中数目
     */
    maxCount?: number;
}
declare const MultiSelect: FC<MultiSelectProps>;
export default MultiSelect;
