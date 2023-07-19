import React, { CSSProperties, FC, useRef, useState } from 'react';
import BaseSelect, { BaseSelectProps, BaseSelectRefProps } from '../BaseSelect';
import SelectOption, {
  OptionItem,
  SelectDropdownHeader,
} from '../SelectOption';

export interface SelectProps extends BaseSelectProps {
  style?: CSSProperties;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
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
  dropdownTitle?: string;
  dropdownStyle?: CSSProperties;
  dropdownClassName?: string;
  dropdownLabelStyle?: CSSProperties;
  dropdownLabelClassName?: string;
}

const getSelectorValue = (value: string, options: OptionItem[]) => {
  if (!value) return '';
  return options.find((item) => item.value === value)?.label || '';
};

const Select: FC<SelectProps> = ({
  style,
  className = '',
  value = '',
  onChange,
  disabled,
  options = [],
  size = 'middle',
  label,
  labelStyle,
  labelClassName,
  placeholder,
  dropdownTitle,
  dropdownStyle,
  dropdownClassName,
  dropdownLabelStyle,
  dropdownLabelClassName,
  ...props
}) => {
  const selectRef = useRef<BaseSelectRefProps>(null);
  const [selectorValue, setSelectorValue] = useState(
    getSelectorValue(value, options),
  );

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
                labelStyle={dropdownLabelSty}
                labelClassName={dropdownLabelClassName}
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
      labelStyle={labelStyle}
      labelClassName={labelClassName}
      selectorValue={selectorValue}
      selectorSize={size}
      placeholder={placeholder}
      renderDropdown={renderDropdown}
      dropdownStyle={dropdownSty}
      dropdownClassName={dropdownClassName}
      {...props}
    />
  );
};

export default Select;
