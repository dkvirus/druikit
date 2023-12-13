import React, {
  CSSProperties,
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
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
  onClick?: (value: string) => void;
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
  dropdownHeight?: number;
  showSearch?: boolean;
}

const getSelectorValue = (value: string, options: OptionItem[]) => {
  if (!value) return '';
  return options.find((item) => item.value === value)?.label || '';
};

const getFilterOptions = (options: any[], searchValue?: string) => {
  if (!searchValue) {
    return [...options];
  }
  const filterOptions = options.filter(
    (item) =>
      item.label.toLowerCase().indexOf(searchValue.trim().toLowerCase()) !== -1,
  );
  return [...filterOptions];
};

const Select: FC<SelectProps> = ({
  style,
  className = '',
  value = '',
  onChange,
  onClick,
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
  dropdownHeight = 200,
  showSearch = false,
  ...props
}) => {
  const selectRef = useRef<BaseSelectRefProps>(null);
  const [selectorValue, setSelectorValue] = useState(
    getSelectorValue(value, options),
  );

  useEffect(() => {
    if (!value) return;
    setSelectorValue(getSelectorValue(value, options));
  }, [value, options]);

  /* ************************* dropdown ******************************* */
  const dropdownSty: CSSProperties = {
    padding: 0,
    minWidth: 164,
    maxHeight: dropdownHeight,
    overflow: 'auto',
    ...dropdownStyle,
  };

  const dropdownLabelSty: CSSProperties = {
    width: 'fit-content',
    whiteSpace: 'nowrap',
    ...dropdownLabelStyle,
  };

  // 下拉弹窗 (dropdown) 中搜索框填写值
  const [searchValue, setSearchValue] = useState('');
  // 下拉框选项列表
  const [dropdownOptions, setDropdownOptions] = useState<any[]>([]);

  useEffect(() => {
    setDropdownOptions(options || []);
  }, [options]);

  useEffect(() => {
    const newOptions = getFilterOptions(options, searchValue);
    setDropdownOptions([...newOptions]);
  }, [searchValue]);

  let searchEl: ReactNode = null;

  if (showSearch) {
    searchEl = (
      <div
        style={{
          padding: '10px 15px 0px',
        }}
      >
        <input
          style={{
            outline: 'none',
            border: '1px solid #d9d9d9',
            borderRadius: 4,
            padding: '4px 6px',
            width: '100%',
            color: '#666',
            fontSize: 12,
          }}
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    );
  }

  const renderDropdown = (
    <>
      <SelectDropdownHeader title={dropdownTitle} />
      {searchEl}
      <div style={{ paddingTop: 10, paddingBottom: 10 }}>
        {dropdownOptions.map((item, index) => {
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
                onClick={() => onClick?.(item.value)}
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
      onOpenChanged={(open) => {
        if (open && showSearch && searchValue) {
          setDropdownOptions(getFilterOptions(options, searchValue));
        }
      }}
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
