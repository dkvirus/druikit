import { CheckOutlined, Flex } from 'druikit';
import React, { CSSProperties, ReactNode } from 'react';

export interface CheckboxProps {
  style?: CSSProperties;
  className?: string;
  children?: string | ReactNode;
  // form
  value?: boolean;
  onChange?: (value: boolean) => void;
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

export const Checkbox = ({
  style,
  className,
  children,
  // form
  value,
  onChange,
  disabled,
  // label
  labelStyle,
  labelClassName,
  labelColor = '#666',
  labelSize = 12,
  // box
  boxStyle,
  boxClassName,
  boxBgColor = '#eeeeee',
  boxColor = '#999999',
  boxSize = 15,
  boxPosition,
  // gap
  gap = 10,
}: CheckboxProps) => {
  /* ******************************** label *********************************** */
  const labelSty: CSSProperties = {
    flex: 1,
    ...labelStyle,
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

  const labelEl = (
    <div style={{ ...labelSty }} className={labelClassName}>
      {children}
    </div>
  );

  /* ******************************** box *********************************** */
  const boxEl = (
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
      {!disabled && value === true ? (
        <CheckOutlined color={boxColor} size={boxSize * 0.9} />
      ) : null}
    </Flex>
  );

  /* ******************************** gap *********************************** */
  const gapEl = <div style={{ width: gap }} />;

  /* ******************************** boxPosition *********************************** */
  let contentEl: ReactNode = (
    <>
      {boxEl}
      {gapEl}
      {labelEl}
    </>
  );

  if (boxPosition === 'right') {
    contentEl = (
      <>
        {labelEl}
        {gapEl}
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
        onChange?.(!value);
      }}
    >
      {contentEl}
    </Flex>
  );
};
