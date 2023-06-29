import React, { CSSProperties, ReactNode } from 'react';
import { Checkbox } from '../Checkbox';
import { classnames } from '../utils/cssUtils';
import './SelectOption.css';

export interface OptionProps {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  value?: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
  labelStyle?: CSSProperties;
  labelClassName?: string;
  boxVisible?: boolean;
}

export const SelectOption = ({
  style,
  className = '',
  children,
  value,
  onChange,
  disabled,
  labelStyle,
  labelClassName = '',
  boxVisible = false,
}: OptionProps) => {
  const cls = classnames(['select-option_wrapper', className]);

  const labelCls = classnames({
    ['select-option_label-active']: value === true,
    ['select-option_label']: true,
    [labelClassName]: true,
  });

  return (
    <Checkbox
      className={cls}
      style={style}
      labelStyle={labelStyle}
      labelClassName={labelCls}
      boxVisible={boxVisible}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      {children}
    </Checkbox>
  );
};
