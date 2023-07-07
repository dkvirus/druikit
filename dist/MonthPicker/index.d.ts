import { CSSProperties, FC } from 'react';
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
declare const MonthPicker: FC<MonthPickerProps>;
export default MonthPicker;
