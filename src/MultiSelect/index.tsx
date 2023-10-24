import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import BaseSelect, { BaseSelectProps, BaseSelectRefProps } from '../BaseSelect';
import Divider from '../Divider';
import SelectOption, {
  OptionItem,
  SelectButtonGroup,
  SelectDropdownHeader,
  SelectOkButton,
} from '../SelectOption';

export interface MultiSelectProps extends BaseSelectProps {
  style?: CSSProperties;
  className?: string;
  value?: string[];
  onChange?: (value: string[]) => void;
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
  selectorTextWhenSelectAll?: string;
  dropdownTitle?: string;
  dropdownMaxHeight?: number;
  dropdownStyle?: CSSProperties;
  dropdownClassName?: string;
  dropdownLabelStyle?: CSSProperties;
  dropdownLabelClassName?: string;
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
  boxPosition?: 'left' | 'right';
}

function getOpts(options: OptionItem[], value: string[]) {
  const newOptions = options.map((o) => o);
  newOptions.forEach((o) => {
    if (o.disabled) return;
    o.checked = value.includes(o.value || '');
  });
  return newOptions;
}

function getSelectorValue(options: OptionItem[], selectorText = 'All') {
  const newOptions = options.filter((o) => !o.disabled && o.checked);
  if (options.every((o) => !o.disabled && o.checked)) {
    return selectorText;
  }
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

const MultiSelect: FC<MultiSelectProps> = ({
  style,
  className,
  value = [],
  onChange,
  disabled,
  options = [],
  size = 'middle',
  label,
  labelStyle,
  labelClassName,
  placeholder,
  selectorTextWhenSelectAll = 'All',
  dropdownTitle,
  dropdownMaxHeight = 300,
  dropdownStyle,
  dropdownClassName,
  dropdownLabelStyle,
  dropdownLabelClassName,
  selectAll = true,
  clearAll = true,
  minCount = 0,
  maxCount = 9999,
  boxPosition,
  ...props
}) => {
  const selectRef = useRef<BaseSelectRefProps>(null);
  const [opts, setOpts] = useState<OptionItem[]>([]);
  const [selectorValue, setSelectorValue] = useState('');

  useEffect(() => {
    const newOpts = getOpts(options, value);
    if (JSON.stringify(opts) === JSON.stringify(newOpts)) return;
    setOpts(newOpts);
  }, [options, value]);

  useEffect(() => {
    setSelectorValue(getSelectorValue(opts, selectorTextWhenSelectAll));
  }, [opts]);

  /* ************************* dropdown ******************************* */
  const dropdownSty: CSSProperties = {
    padding: 0,
    minWidth: 164,
    maxHeight: 330,
    ...dropdownStyle,
  };

  const dropdownLabelSty: CSSProperties = {
    width: 'fit-content',
    whiteSpace: 'nowrap',
    ...dropdownLabelStyle,
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
    setSelectorValue(getSelectorValue(newOpts, selectorTextWhenSelectAll));
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
    setSelectorValue(getSelectorValue(newOpts, selectorTextWhenSelectAll));
  };

  const onOk = () => {
    const selectedValue = getSelectedValue(opts) as string[];
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
        {selectAll && clearAll ? (
          <Divider fullLength gap={0} color="#eee" />
        ) : null}
        <div style={{ paddingTop: 10, paddingBottom: 10 }}>
          {opts.map((item, index) => {
            const selectedValue = getSelectedValue(opts);
            const minCountNotAllowed =
              selectedValue.length === minCount &&
              selectedValue.includes(item.value);
            const maxCountNotAllowed =
              selectedValue.length === maxCount &&
              !selectedValue.includes(item.value);
            const key = item.label + index.toString();
            if (typeof item.value === 'string') {
              return (
                <SelectOption
                  key={key}
                  labelStyle={dropdownLabelSty}
                  labelClassName={dropdownLabelClassName}
                  value={item.checked}
                  onChange={(checked) => onClick(checked, item)}
                  disabled={
                    minCountNotAllowed || maxCountNotAllowed || item.disabled
                  }
                  boxVisible
                  boxPosition={boxPosition}
                >
                  {item.label}
                </SelectOption>
              );
            }
            return (
              <SelectOption
                key={key}
                groupTitle
                labelClassName={item.labelClassName}
                boxPosition={boxPosition}
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
      labelStyle={labelStyle}
      labelClassName={labelClassName}
      selectorValue={selectorValue}
      selectorSize={size}
      placeholder={placeholder}
      renderDropdown={renderDropdown}
      dropdownStyle={dropdownSty}
      dropdownClassName={dropdownClassName}
      onClickAway={() => {
        // 当前是关闭状态, 直接返回
        if (!selectRef.current?.getIsOpen()) return;
        onOk();
      }}
      {...props}
    />
  );
};

export default MultiSelect;
