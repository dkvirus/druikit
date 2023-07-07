import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import BaseSelect, { BaseSelectProps, BaseSelectRefProps } from '../BaseSelect';
import MonthPanel, { MonthPanelValue } from '../MonthPanel';
import { MONTHS_ABBR } from '../utils/dateUtils';

export interface MonthPickerProps extends BaseSelectProps {
  style?: CSSProperties;
  className?: string;
  value?: { year: number; month: number };
  onChange?: (opt: { year: number; month: number }) => void;
  onFormat?: (opt: { year: number; month: number }) => string;
  label?: string;
}

const MonthPicker: FC<MonthPickerProps> = ({
  style,
  className,
  value,
  onChange,
  onFormat, // 自定义月份下拉框显示文字
  label = '',
  ...props
}) => {
  const selectRef = useRef<BaseSelectRefProps>(null);

  const [selectorValue, setSelectorValue] = useState('');

  const handleInputValue = (value: MonthPanelValue) => {
    if (typeof onFormat === 'function') {
      setSelectorValue(onFormat(value));
    } else {
      setSelectorValue(`${MONTHS_ABBR[value.month]}. ${value.year}`);
    }
  };

  const onMonthPanelChange = (value: MonthPanelValue) => {
    handleInputValue(value);
    onChange?.(value);
    selectRef.current?.close();
  };

  useEffect(() => {
    if (!value) return;
    handleInputValue(value);
  }, [value]);

  return (
    <div style={style} className={className}>
      <BaseSelect
        label={label}
        selectorValue={selectorValue}
        renderDropdown={
          <MonthPanel value={value} onChange={onMonthPanelChange} />
        }
        ref={selectRef}
        {...props}
      />
    </div>
  );
};

export default MonthPicker;
