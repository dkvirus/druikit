import React, { CSSProperties } from 'react';
import { BaseSelectProps } from '../BaseSelect';
export interface MonthPickerProps extends BaseSelectProps {
    style?: CSSProperties;
    className?: string;
    value?: {
        year: number;
        month: number;
    };
    onChange?: (opt: {
        year: number;
        month: number;
    }) => void;
    onFormat?: (opt: {
        year: number;
        month: number;
    }) => string;
    label?: string;
}
export declare const MonthPicker: ({ style, className, value, onChange, onFormat, label, ...props }: MonthPickerProps) => React.JSX.Element;
