import React, { CSSProperties, ReactNode } from 'react';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Flex } from '../Flex';
import { CloseOutlined } from '../icons';
import { Text } from '../Text';
import { classnames } from '../utils/cssUtils';
import './styles.css';

export interface OptionItem {
  label: string;
  value: string;
  disabled?: boolean;
  checked?: boolean;
}

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

export interface SelectDropdownHeaderProps {
  title?: string;
  onClick?: () => void;
}

export const SelectDropdownHeader = ({
  title,
  onClick,
}: SelectDropdownHeaderProps) => {
  if (!title) return null;

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      padding="10px 15px 0"
    >
      <Text fontSize12 color666 bold>
        {title}
      </Text>
      <Flex
        pointer
        width={15}
        height={15}
        justifyContent="center"
        alignItems="center"
        onClick={onClick}
      >
        {onClick ? <CloseOutlined size={12} color="#666" /> : null}
      </Flex>
    </Flex>
  );
};

export const SelectButtonGroup = ({
  clearAll = true,
  onClearAll,
  selectAll = true,
  onSelectAll,
}: {
  clearAll?: boolean;
  onClearAll?: () => void;
  selectAll?: boolean;
  onSelectAll?: () => void;
}) => {
  if (!clearAll && !selectAll) return <div style={{ height: 10, width: 1 }} />;

  const clearBtnCls = classnames({
    ['select-button-group_item']: true,
    ['select-button-group_item-clear']: true,
    ['select-button-group_item-hover']: clearAll,
  });

  const selectBtnCls = classnames({
    ['select-button-group_item']: true,
    ['select-button-group_item-select']: true,
    ['select-button-group_item-hover']: selectAll,
  });

  return (
    <div className="select-button-group_wrapper">
      <div
        className={clearBtnCls}
        onClick={() => {
          if (!clearAll) return;
          onClearAll?.();
        }}
      >
        {clearAll ? 'Clear all' : ''}
      </div>
      <div
        className={selectBtnCls}
        onClick={() => {
          if (!selectAll) return;
          onSelectAll?.();
        }}
      >
        {selectAll ? 'Select all' : ''}
      </div>
    </div>
  );
};

export const SelectOkButton = ({
  onClick,
  disabled,
}: {
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <Button
      shape="square"
      primary
      fullWidth
      onClick={onClick}
      disabled={disabled}
    >
      OK
    </Button>
  );
};
