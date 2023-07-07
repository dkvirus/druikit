import { CSSProperties, FC } from 'react';
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
declare const MonthPanel: FC<MonthPanelProps>;
export default MonthPanel;
