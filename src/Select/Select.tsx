import React, { CSSProperties, useRef, useState } from 'react';
import { BaseSelect, BaseSelectProps, BaseSelectRefProps } from '../BaseSelect';
import { Text } from '../Text';
import { SelectOption } from './SelectOption';

export interface OptionItem {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps extends BaseSelectProps {
  style?: CSSProperties;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  options?: OptionItem[];
  label?: string;
  labelStyle?: CSSProperties;
  labelClassName?: string;
  placeholder?: string;
  dropdownTitle?: string;
  dropdownStyle?: CSSProperties;
  dropdownClassName?: string;
}

export const Select = ({
  style,
  className = '',
  value,
  onChange,
  disabled,
  options = [],
  label,
  labelStyle,
  labelClassName,
  placeholder,
  dropdownTitle,
  dropdownStyle,
  dropdownClassName,
  ...props
}: SelectProps) => {
  const selectRef = useRef<BaseSelectRefProps>(null);
  const [selectorValue, setSelectorValue] = useState('');

  /* ************************* dropdown ******************************* */
  const dropdownSty: CSSProperties = {
    padding: 0,
    minWidth: 164,
    ...dropdownStyle,
  };

  const dropdownLabelStyle: CSSProperties = {
    width: 'fit-content',
    whiteSpace: 'nowrap',
    ...labelStyle,
  };

  const dropdownHeader = (
    <Text
      fontSize12
      color666
      bold
      style={{ padding: dropdownTitle ? '10px 15px 0px' : 0 }}
    >
      {dropdownTitle}
    </Text>
  );

  const renderDropdown = (
    <>
      {dropdownHeader}
      <div style={{ paddingTop: 10, paddingBottom: 10 }}>
        {options.map((item) => (
          <SelectOption
            key={item.value}
            labelStyle={dropdownLabelStyle}
            labelClassName={labelClassName}
            value={item.value === value}
            disabled={item.disabled}
            onChange={(value) => {
              if (disabled) return;
              if (value === true) {
                setSelectorValue(item.label);
                selectRef.current?.close();
                onChange?.(item.value);
              }
            }}
          >
            {item.label}
          </SelectOption>
        ))}
      </div>
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
      {...props}
    />
  );
};
