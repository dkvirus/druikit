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
  onItemChange?: (value: string[]) => void;
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
   * @description 最少选中数目
   */
  minCount?: number;
  /**
   * @description 最多选中数目
   */
  maxCount?: number;
  formatMinCountMessage?: (count: number) => string;
  formatMaxCountMessage?: (count: number) => string;
  boxPosition?: 'left' | 'right';
  /**
   * @description 点击 ok 按钮时关闭下拉框
   */
  okClosable?: boolean;
  /**
   * @description 点击下拉框外部是否关闭下拉框
   */
  clickAwayClosable?: boolean;
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

// function getUnselectedValue(options: OptionItem[]) {
//   const newOptions = options.filter((o) => !o.disabled && !o.checked);
//   const value = newOptions.map((o) => o.value);
//   return value;
// }

const MultiSelect: FC<MultiSelectProps> = ({
  style,
  className,
  value = [],
  onChange,
  onItemChange,
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
  formatMinCountMessage,
  formatMaxCountMessage,
  boxPosition,
  okClosable = true,
  clickAwayClosable = false,
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
    newOpts.forEach((item) => {
      item.checked = false;
    });
    setOpts(newOpts);
    setSelectorValue(getSelectorValue(newOpts, selectorTextWhenSelectAll));
  };

  /**
   * 考虑 maxCount
   */
  const onSelectAll = () => {
    const newOpts = opts.map((o) => o);
    newOpts.forEach((item) => {
      if (!item.disabled) {
        item.checked = true;
      }
    });
    setOpts(newOpts);
    setSelectorValue(getSelectorValue(newOpts, selectorTextWhenSelectAll));
  };

  const onOk = () => {
    if (okDisabled) return;
    const selectedValue = getSelectedValue(opts) as string[];
    if (
      JSON.stringify(value.sort()) === JSON.stringify(selectedValue.sort()) &&
      okClosable
    ) {
      selectRef.current?.close();
      return;
    }
    onChange?.(selectedValue);
    selectRef.current?.close();
  };

  const [okDisabled, setOkDisabled] = useState(false);
  const [showMaxCountMessage, setShowMaxCountMessage] = useState(false);
  const [showMinCountMessage, setShowMinCountMessage] = useState(false);

  useEffect(() => {
    const newOpts = opts.map((o) => o);
    const selectedValue = getSelectedValue(newOpts);
    setOkDisabled(
      selectedValue?.length > maxCount || selectedValue?.length < minCount,
    );
    setShowMaxCountMessage(selectedValue?.length > maxCount);
    setShowMinCountMessage(selectedValue?.length < minCount);
    onItemChange?.(selectedValue.filter((item) => item) as string[]);
  }, [opts]);

  const countMessageSty: CSSProperties = {
    fontSize: 12,
    color: 'red',
    paddingInline: 15,
    marginTop: 8,
  };

  const renderDropdown = (
    <>
      <SelectDropdownHeader
        title={dropdownTitle}
        onClick={() => selectRef.current?.close()}
      />

      {showMaxCountMessage ? (
        <div style={countMessageSty}>
          {typeof formatMaxCountMessage === 'function'
            ? formatMaxCountMessage(maxCount)
            : `Maximum ${maxCount}.`}
        </div>
      ) : null}

      {showMinCountMessage ? (
        <div style={countMessageSty}>
          {typeof formatMinCountMessage === 'function'
            ? formatMinCountMessage(minCount)
            : `Minimum ${minCount}.`}
        </div>
      ) : null}

      <div style={{ maxHeight: dropdownMaxHeight, overflow: 'auto' }}>
        <SelectButtonGroup
          clearAll={clearAll}
          onClearAll={onClearAll}
          selectAll={selectAll}
          onSelectAll={onSelectAll}
        />
        {selectAll || clearAll ? (
          <Divider fullLength gap={0} color="#eee" />
        ) : null}
        <div style={{ paddingTop: 10, paddingBottom: 10 }}>
          {opts.map((item, index) => {
            const key = item.label + index.toString();
            const disabled = item.disabled;
            if (typeof item.value === 'string') {
              return (
                <SelectOption
                  key={key}
                  labelStyle={dropdownLabelSty}
                  labelClassName={dropdownLabelClassName}
                  value={item.checked}
                  onChange={(checked) => onClick(checked, item)}
                  disabled={disabled}
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
      <SelectOkButton onClick={onOk} disabled={okDisabled} />
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
      clickAwayClosable={clickAwayClosable}
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
