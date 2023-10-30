import React, { CSSProperties, FC, ReactNode } from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Flex from '../Flex';
import Text from '../Text';
import { CloseOutlined } from '../icons';
import { classnames } from '../utils/cssUtils';
import './styles.css';

export interface OptionItem {
  label: string;
  labelClassName?: string;
  value?: string;
  disabled?: boolean;
  checked?: boolean;
}

export interface OptionProps {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  value?: boolean;
  onChange?: (value: boolean) => void;
  onClick?: () => void;
  disabled?: boolean;
  labelStyle?: CSSProperties;
  labelClassName?: string;
  boxVisible?: boolean;
  boxPosition?: 'left' | 'right';
  groupTitle?: boolean;
}

const SelectOption: FC<OptionProps> = ({
  style,
  className = '',
  children,
  value,
  onChange,
  onClick,
  disabled,
  labelStyle,
  labelClassName = '',
  boxVisible = false,
  boxPosition = 'left',
  groupTitle = false,
}) => {
  const cls = classnames({
    ['select-option_wrapper']: true,
    ['select-option_wrapper-hover']: !disabled && !groupTitle,
    [className]: true,
  });

  const labelCls = classnames({
    ['select-option_label-active']: value === true,
    ['select-option_label']: true,
    [labelClassName]: true,
  });

  const labelSty: CSSProperties = { ...labelStyle };
  if (groupTitle) {
    labelSty.fontSize = 14;
    labelSty.cursor = 'auto';
  }

  return (
    <Checkbox
      className={cls}
      style={style}
      labelStyle={labelSty}
      labelClassName={labelCls}
      boxVisible={boxVisible}
      boxPosition={boxPosition}
      value={value}
      onChange={onChange}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Checkbox>
  );
};

export default SelectOption;

export interface SelectDropdownHeaderProps {
  title?: string;
  onClick?: () => void;
}

export const SelectDropdownHeader: FC<SelectDropdownHeaderProps> = ({
  title,
  onClick,
}) => {
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
  // if (!clearAll && !selectAll) return <div style={{ height: 10, width: 1 }} />;
  if (!clearAll && !selectAll) return null;

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
  style,
  className,
  onClick,
  disabled,
}: {
  style?: CSSProperties;
  className?: string;
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
      className={className}
      style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0, ...style }}
    >
      OK
    </Button>
  );
};
