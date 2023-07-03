import React, { CSSProperties, useRef, useState } from 'react';
import { BaseSelect, BaseSelectProps, BaseSelectRefProps } from '../BaseSelect';
import {
  OptionItem,
  SelectDropdownHeader,
  SelectOption,
} from '../SelectOption';

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

  const renderDropdown = (
    <>
      <SelectDropdownHeader title={dropdownTitle} />
      <div style={{ paddingTop: 10, paddingBottom: 10 }}>
        {options.map((item, index) => {
          const key = item.label + index.toString();
          if (typeof item.value === 'string') {
            return (
              <SelectOption
                key={key}
                labelStyle={dropdownLabelStyle}
                labelClassName={labelClassName}
                value={item.value === value}
                disabled={item.disabled}
                onChange={(value) => {
                  if (disabled) return;
                  if (value === true) {
                    setSelectorValue(item.label);
                    selectRef.current?.close();
                    onChange?.(item.value as string);
                  }
                }}
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
            >
              {item.label}
            </SelectOption>
          );
        })}
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
