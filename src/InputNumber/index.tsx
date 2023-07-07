import React, { CSSProperties, FC, useEffect, useState } from 'react';
import { numberUtils } from '../utils/numberUtils';

export type InputNumberValue = number | string | undefined | null;

export interface InputNumberProps {
  style?: CSSProperties;
  className?: string;
  value?: InputNumberValue;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  /**
   * @description 最大值
   */
  max?: number;
  /**
   * @description 最小值
   */
  min?: number;
  /**
   * @description 最大长度
   * @default 9999
   */
  maxLength?: number;
  /**
   * @description 是否允许为空
   */
  empty?: boolean;
  /**
   * @description 禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 提示文字
   */
  placeholder?: string;
  width?: number;
  height?: number;
  padding?: number;
  fontSize?: number;
  /**
   * @default center
   */
  textAlign?: 'left' | 'center' | 'right';
}

/**
 * value = 10.0 在页面上回显会变成 10, 因为数值 10.0 会自动变成数值 10
 * 但业务上有时需要回显也是 10.0, 基于这个原则, value 允许是字符串
 */
const InputNumber: FC<InputNumberProps> = ({
  style,
  className,
  value,
  onChange,
  onBlur,
  max,
  min,
  maxLength = 9999,
  empty = true,
  disabled,
  placeholder,
  width = 88,
  height = 30,
  padding = 11,
  fontSize = 14,
  textAlign = 'left',
}) => {
  const handleEmpty = (): string => {
    if (empty) return '';
    return min ? String(min) : '0';
  };

  const handleData = (inputValue?: InputNumberValue) => {
    if (
      !numberUtils.isNumberOfStringType(inputValue) ||
      inputValue === null ||
      String(inputValue) === ''
    ) {
      return handleEmpty();
    }
    const valueNum = Number(inputValue);
    if (typeof max === 'number' && max < valueNum) {
      return String(max);
    }
    if (typeof min === 'number' && min > valueNum) {
      return String(min);
    }
    return String(inputValue).slice(0, maxLength);
  };

  const [data, setData] = useState<string>(handleData(value));

  useEffect(() => {
    setData(handleData(value));
  }, [value]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value.trim().slice(0, maxLength);
    if (inputValue === '') return setData('');
    setData(inputValue);
    onChange?.(inputValue);
  };

  const onInputBlur = () => {
    const inputValue = handleData(data);
    setData(inputValue);
    onBlur?.(inputValue);
  };

  const sty: CSSProperties = {
    border: '.5px solid #979797',
    borderRadius: 5,
    color: '#666',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'Nunito Sans, sans-serif',
    width,
    height,
    fontSize,
    paddingLeft: padding,
    paddingRight: padding,
    textAlign,
  };

  return (
    <input
      style={{ ...sty, ...style }}
      className={className}
      value={data}
      onChange={onInputChange}
      onBlur={onInputBlur}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
};

export default InputNumber;
