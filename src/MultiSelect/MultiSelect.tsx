import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { BaseSelect, BaseSelectProps, BaseSelectRefProps } from '../BaseSelect';
import { Divider } from '../Divider';
import {
  OptionItem,
  SelectButtonGroup,
  SelectDropdownHeader,
  SelectOkButton,
  SelectOption,
} from '../SelectOption';

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

function getOpts(options: OptionItem[], value: string[]) {
  const newOptions = options.map((o) => o);
  newOptions.forEach((o) => {
    if (o.disabled) return;
    o.checked = value.includes(o.value);
  });
  return newOptions;
}

function getSelectorValue(options: OptionItem[]) {
  const newOptions = options.filter((o) => !o.disabled && o.checked);
  const value = newOptions.map((o) => o.value);
  if (value.length > 1) {
    const label = newOptions[0].label;
    return `${label.length > 7 ? label.slice(0, 6) + '...' : label}, +${
      value.length - 1
    }`;
  } else if (value.length === 1) {
    return newOptions[0].label;
  } else {
    return '';
  }
}

function getSelectedValue(options: OptionItem[]) {
  const newOptions = options.filter((o) => !o.disabled && o.checked);
  const value = newOptions.map((o) => o.value);
  return value;
}

function getUnselectedValue(options: OptionItem[]) {
  const newOptions = options.filter((o) => !o.disabled && !o.checked);
  const value = newOptions.map((o) => o.value);
  return value;
}

export const MultiSelect = ({
  style,
  className,
  value = [],
  onChange,
  disabled,
  options = [],
  label,
  labelStyle,
  labelClassName,
  placeholder,
  dropdownTitle,
  dropdownMaxHeight = 300,
  dropdownStyle,
  dropdownClassName,
  selectAll = true,
  clearAll = true,
  minCount = 0,
  maxCount = 9999,
  ...props
}: MultiSelectProps) => {
  const selectRef = useRef<BaseSelectRefProps>(null);
  const [opts, setOpts] = useState<OptionItem[]>([]);
  const [selectorValue, setSelectorValue] = useState('');

  useEffect(() => {
    const newOpts = getOpts(options, value);
    if (JSON.stringify(opts) === JSON.stringify(newOpts)) return;
    setOpts(newOpts);
  }, [options, value]);

  useEffect(() => {
    setSelectorValue(getSelectorValue(opts));
  }, [opts]);

  /* ************************* dropdown ******************************* */
  const dropdownSty: CSSProperties = {
    padding: 0,
    minWidth: 164,
    maxHeight: 330,
    ...dropdownStyle,
  };

  const dropdownLabelStyle: CSSProperties = {
    width: 'fit-content',
    whiteSpace: 'nowrap',
    ...labelStyle,
  };

  const onClick = (checked: boolean, item: OptionItem) => {
    if (item.disabled) return;
    const newOpts = opts.map((o) => o);
    newOpts.forEach((o) => {
      if (o.value === item.value) {
        item.checked = !item.checked;
      }
    });
    setOpts(newOpts);
  };

  /**
   * 考虑 minCount
   */
  const onClearAll = () => {
    const newOpts = opts.map((o) => o);
    const selectedValue = getSelectedValue(newOpts).slice(0, minCount);
    newOpts.forEach((o) => {
      o.checked = selectedValue.includes(o.value);
    });
    setOpts(newOpts);
    setSelectorValue(getSelectorValue(newOpts));
  };

  /**
   * 考虑 maxCount
   */
  const onSelectAll = () => {
    const newOpts = opts.map((o) => o);
    const selectedValue = getSelectedValue(newOpts);
    const unselectedValue = getUnselectedValue(newOpts).slice(
      0,
      maxCount - selectedValue.length,
    );
    newOpts.forEach((o) => {
      if (unselectedValue.includes(o.value)) {
        o.checked = true;
      }
    });
    setOpts(newOpts);
    setSelectorValue(getSelectorValue(newOpts));
  };

  const onOk = () => {
    const selectedValue = getSelectedValue(opts);
    if (JSON.stringify(value.sort()) === JSON.stringify(selectedValue.sort())) {
      return;
    }
    onChange?.(selectedValue);
    selectRef.current?.close();
  };

  const renderDropdown = (
    <>
      <SelectDropdownHeader
        title={dropdownTitle}
        onClick={() => selectRef.current?.close()}
      />
      <div style={{ maxHeight: dropdownMaxHeight, overflow: 'auto' }}>
        <SelectButtonGroup
          clearAll={clearAll}
          onClearAll={onClearAll}
          selectAll={selectAll}
          onSelectAll={onSelectAll}
        />
        <Divider fullLength gap={0} color="#eee" />
        <div style={{ paddingTop: 10, paddingBottom: 10 }}>
          {opts.map((item) => {
            const selectedValue = getSelectedValue(opts);
            const minCountNotAllowed =
              selectedValue.length === minCount &&
              selectedValue.includes(item.value);
            const maxCountNotAllowed =
              selectedValue.length === maxCount &&
              !selectedValue.includes(item.value);
            return (
              <SelectOption
                key={item.value}
                labelStyle={dropdownLabelStyle}
                labelClassName={labelClassName}
                value={item.checked}
                onChange={(checked) => onClick(checked, item)}
                disabled={
                  minCountNotAllowed || maxCountNotAllowed || item.disabled
                }
                boxVisible
              >
                {item.label}
              </SelectOption>
            );
          })}
        </div>
      </div>
      <SelectOkButton onClick={onOk} />
    </>
  );

  return (
    <BaseSelect
      ref={selectRef}
      style={style}
      className={className}
      disabled={disabled}
      label={label}
      selectorValue={selectorValue}
      placeholder={placeholder}
      renderDropdown={renderDropdown}
      dropdownStyle={dropdownSty}
      dropdownClassName={dropdownClassName}
      onClickAway={onOk}
      {...props}
    />
  );
};
