import React, { CSSProperties } from 'react';
import './styles.css';
export interface MonthPanelValue {
    year: number;
    month: number;
}
export interface MonthPanelProps {
    style?: CSSProperties;
    className?: string;
    value?: MonthPanelValue;
    onChange?: (value: MonthPanelValue) => void;
}
export declare const MonthPanel: ({ style, className, value, onChange, }: MonthPanelProps) => React.JSX.Element;
