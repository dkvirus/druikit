import { CheckOutlined, Flex } from 'druikit';
import React, { CSSProperties, ReactNode } from 'react';

export interface CheckboxProps {
  style?: CSSProperties;
  className?: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
  children?: string | ReactNode;
  labelColor?: string;
  labelSize?: number;
  labelStyle?: CSSProperties;
  labelClassName?: string;
  boxStyle?: CSSProperties;
  boxClassName?: string;
  boxBgColor?: string;
  boxColor?: string;
  boxSize?: number;
  boxPosition?: 'left' | 'right';
  gap?: number;
}

export const Checkbox = ({
  style,
  className,
  value,
  onChange,
  children,
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
  const labelSty: CSSProperties = {};

  if (typeof labelColor !== 'undefined') {
    labelSty.color = labelColor;
  }

  if (typeof labelSize !== 'undefined') {
    labelSty.fontSize = labelSize;
  }

  const labelEl = (
    <div
      style={{ flex: 1, ...labelStyle, ...labelSty }}
      className={labelClassName}
    >
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
      {value === true ? (
        <CheckOutlined color={boxColor} size={boxSize * 0.9} />
      ) : null}
    </Flex>
  );

  /* ******************************** gap *********************************** */
  const gapEl = <div style={{ width: gap }} />;

  /* ******************************** 组装 *********************************** */
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

  return (
    <Flex
      pointer
      alignItems="center"
      style={style}
      className={className}
      onClick={() => onChange?.(!value)}
    >
      {contentEl}
    </Flex>
  );
};
