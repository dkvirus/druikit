import React, { CSSProperties, FC, ReactNode } from 'react';
import { CheckOutlined, Flex } from '../index';
import { classnames } from '../utils/cssUtils';

export interface CheckboxProps {
  style?: CSSProperties;
  className?: string;
  children?: string | ReactNode;
  // form
  value?: boolean;
  onChange?: (value: boolean) => void;
  onClick?: () => void;
  disabled?: boolean;
  // label
  labelStyle?: CSSProperties;
  labelClassName?: string;
  labelColor?: string;
  labelSize?: number;
  // style
  boxStyle?: CSSProperties;
  boxClassName?: string;
  boxBgColor?: string;
  boxColor?: string;
  boxSize?: number;
  boxVisible?: boolean;
  /**
   * @description 框与文字的位置
   * @default left
   */
  boxPosition?: 'left' | 'right';
  /**
   * @description 框与文字的距离
   * @default 10
   */
  gap?: number;
}

const Checkbox: FC<CheckboxProps> = ({
  style,
  className,
  children,
  // form
  value,
  onChange,
  onClick,
  disabled,
  // label
  labelStyle,
  labelClassName = '',
  labelColor = '#666',
  labelSize = 12,
  // box
  boxStyle,
  boxClassName,
  boxBgColor = '#eeeeee',
  boxColor = '#999999',
  boxSize = 15,
  boxVisible = true,
  boxPosition,
  // gap
  gap = 10,
}) => {
  /* ******************************** label *********************************** */
  const labelSty: CSSProperties = {
    flex: 1,
  };

  if (typeof labelColor !== 'undefined') {
    labelSty.color = labelColor;
  }

  if (disabled) {
    labelSty.color = '#ccc';
  }

  if (typeof labelSize !== 'undefined') {
    labelSty.fontSize = labelSize;
  }

  const labelCls = classnames({
    [labelClassName]: true,
    ['disabled']: disabled,
  });

  const labelEl = (
    <div style={{ ...labelSty, ...labelStyle }} className={labelCls}>
      {children}
    </div>
  );

  /* ******************************** box *********************************** */
  let boxEl: ReactNode = (
    <Flex
      justifyContent="center"
      alignItems="center"
      className={boxClassName}
      style={{
        minWidth: boxSize,
        minHeight: boxSize,
        ...boxStyle,
        backgroundColor: boxBgColor,
      }}
    >
      {value === true ? (
        <CheckOutlined color={boxColor} size={boxSize * 0.9} />
      ) : null}
    </Flex>
  );
  if (!boxVisible) {
    boxEl = null;
  }

  /* ******************************** gap *********************************** */
  const gapEl = <div style={{ width: gap }} />;

  /* ******************************** boxPosition *********************************** */
  let contentEl: ReactNode = (
    <>
      {boxEl}
      {boxEl ? gapEl : null}
      {labelEl}
    </>
  );

  if (boxPosition === 'right') {
    contentEl = (
      <>
        {labelEl}
        {labelEl ? gapEl : null}
        {boxEl}
      </>
    );
  }

  const sty: CSSProperties = {
    userSelect: 'none',
    ...style,
  };

  if (disabled) {
    sty.cursor = 'not-allowed';
  }

  return (
    <Flex
      pointer
      alignItems="center"
      style={{ ...sty }}
      className={className}
      onClick={() => {
        if (disabled) return;
        onClick?.();
        onChange?.(!value);
      }}
    >
      {contentEl}
    </Flex>
  );
};

export default Checkbox;
