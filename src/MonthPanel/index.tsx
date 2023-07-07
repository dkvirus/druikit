import React, { CSSProperties, FC, useEffect, useState } from 'react';
import { classnames } from '../utils/cssUtils';
import { MONTHS_ABBR } from '../utils/dateUtils';
import './styles.css';

export interface MonthPanelValue {
  year: number;
  // 0-11
  month: number;
}

export interface MonthPanelProps {
  style?: CSSProperties;
  className?: string;
  value?: MonthPanelValue;
  onChange?: (value: MonthPanelValue) => void;
}

const MonthPanel: FC<MonthPanelProps> = ({
  style,
  className = '',
  value,
  onChange,
}) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const yearArr = [
    2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
  ];
  const monthArr = MONTHS_ABBR;

  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [showMonth, setShowMonth] = useState(true);

  useEffect(() => {
    if (!value?.year) return;
    setYear(value.year);
    setMonth(value.month);
  }, [value]);

  const onClickMonth = (monthIndex: any) => {
    setMonth(monthIndex);
    onChange?.({ year, month: monthIndex });
  };

  const monthPanelBody = monthArr.map((item, index) => {
    const disabled =
      year > currentYear || (year === currentYear && index > currentMonth);
    const cls = classnames({
      ['month-panel_panel-item']: true,
      ['month-panel_panel-item-active']: index === month,
      ['month-panel_panel-item-disabled']: disabled,
    });
    return (
      <div
        key={item}
        className={cls}
        onClick={() => {
          if (disabled) return;
          onClickMonth(index);
        }}
      >
        {item}
      </div>
    );
  });

  const onClickYear = (y: any) => {
    setYear(y);
    if (y === currentYear && month > currentMonth) {
      setMonth(currentMonth);
      onChange?.({ year, month: currentMonth });
    }
    setShowMonth(true);
  };

  const yearPanelBody = yearArr.map((item) => {
    const disabled = item > currentYear;
    const cls = classnames({
      ['month-panel_panel-item']: true,
      ['month-panel_panel-item-active']: item === year,
      ['month-panel_panel-item-disabled']: disabled,
    });
    return (
      <div
        key={item}
        className={cls}
        onClick={() => {
          if (disabled) return;
          onClickYear(item);
        }}
      >
        {item}
      </div>
    );
  });

  const cls = classnames({
    ['month-panel_wrapper']: true,
    [className]: true,
  });

  return (
    <div style={style} className={cls}>
      <div className="month-panel_header">
        <div
          className="month-panel_header-year"
          onClick={() => setShowMonth(!showMonth)}
        >
          {showMonth ? year : monthArr[month]}
        </div>
      </div>
      <div className="month-panel_body">
        {showMonth ? monthPanelBody : yearPanelBody}
      </div>
    </div>
  );
};

export default MonthPanel;
