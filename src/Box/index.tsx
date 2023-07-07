import { Property } from 'csstype';
import React, { CSSProperties, FC, forwardRef, ReactNode } from 'react';
import {
  getBackgroundStyle,
  getBorderStyle,
  getCustomStyle,
  getDimensionStyle,
  getDisplayStyle,
  getFlexStyle,
  getFontStyle,
  getMarginStyle,
  getPaddingStyle,
  getPositionStyle,
  getRestStyle,
  getTextStyle,
} from './utils';

export interface BoxProps {
  /**
   * @description 内联样式
   * @default {}
   */
  style?: CSSProperties;
  /**
   * @description 类名
   * @default ''
   */
  className?: string;
  /**
   * @description 盒子子元素
   */
  children?: ReactNode;

  /**
   * @description 宽度 100%
   */
  fullWidth?: boolean;
  /**
   * @description 宽度 50%
   */
  halfWidth?: boolean;
  /**
   * @description 高度 100%
   */
  fullHeight?: boolean;
  /**
   * @description 高度 50%
   */
  halfHeight?: boolean;
  /**
   * @description 鼠标是手状, 表示可点击的意思
   */
  pointer?: boolean;
  /**
   * @description 单行省略号
   */
  ellipsis?: boolean;

  color?: string;
  textAlign?: Property.TextAlign;
  textDecoration?: Property.TextDecoration;
  textTransform?: Property.TextTransform;
  textIndent?: Property.TextIndent;

  fontFamily?: Property.FontFamily;
  fontStyle?: Property.FontStyle;
  fontSize?: number | string;
  fontWeight?: Property.FontWeight;

  margin?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;

  padding?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;

  height?: number | string;
  lineHeight?: number | string;
  maxHeight?: number | string;
  minHeight?: number | string;
  width?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;

  display?: Property.Display;

  position?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;

  border?: string;
  borderStyle?: Property.BorderStyle;
  borderWidth?: number | string;
  borderColor?: Property.BorderColor;
  borderRadius?: number | string;
  boxShadow?: string;

  flexDirection?: Property.FlexDirection;
  flexWrap?: Property.FlexWrap;
  justifyContent?: Property.JustifyContent;
  alignItems?: Property.AlignItems;
  alignContent?: Property.AlignContent;
  order?: Property.Order;
  flexGrow?: number; // 放大比例, 默认为 0, 即存在剩余空间也不放大
  flexShrink?: number; // 缩小比例, 默认为 1, 即空间不足将会缩小, 值为 0 时不缩小
  flexBasis?: number | string;
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch';

  background?: Property.Background;
  backgroundColor?: Property.BackgroundColor;
  backgroundImage?: Property.BackgroundImage;
  backgroundRepeat?: Property.BackgroundRepeat;
  backgroundAttachment?: Property.BackgroundAttachment;
  backgroundPosition?: Property.BackgroundPosition;

  cursor?: Property.Cursor;
  overflow?: Property.Overflow;
  overflowX?: Property.OverflowX;
  overflowY?: Property.OverflowY;

  onClick?: (e: React.MouseEvent) => void;
  onDrag?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent) => void;
  onFocus?: (e: React.FocusEvent) => void;
  onBlur?: (e: React.FocusEvent) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  onKeyUp?: (e: React.KeyboardEvent) => void;
  onMouseEnter?: (e: React.MouseEvent) => void;
  onMouseLeave?: (e: React.MouseEvent) => void;
  onMouseOver?: (e: React.MouseEvent) => void;
  onMouseOut?: (e: React.MouseEvent) => void;
  onMouseMove?: (e: React.MouseEvent) => void;
  onMouseDown?: (e: React.MouseEvent) => void;
  onMouseUp?: (e: React.MouseEvent) => void;
  onScroll?: (e: React.UIEvent) => void;

  [key: string]: any;
}

const Box: FC<BoxProps> = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      // dom 元素通用属性
      style,
      className,
      // 子元素
      children,

      // css 属性 - 文本
      color,
      textAlign,
      textDecoration,
      textTransform,
      textIndent,
      // css 属性 - 字体
      fontFamily,
      fontStyle,
      fontSize,
      fontWeight,
      // css 属性 - 外边距
      margin,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      // css 属性 - 填充
      padding,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      // css 属性 - 尺寸
      height,
      lineHeight,
      maxHeight,
      minHeight,
      width,
      maxWidth,
      minWidth,

      // css 属性 - 显示
      display,

      // css 属性 - 定位
      position,
      top,
      bottom,
      left,
      right,

      // css 属性 - 边框
      border,
      borderStyle,
      borderWidth,
      borderColor,
      borderRadius,
      boxShadow,

      // css 属性 - flex 布局
      flexDirection,
      flexWrap,
      justifyContent,
      alignItems,
      alignContent,
      order,
      flexGrow,
      flexShrink,
      flexBasis,
      alignSelf,

      // css 属性 - 背景
      background,
      backgroundColor,
      backgroundImage,
      backgroundRepeat,
      backgroundAttachment,
      backgroundPosition,

      // css 剩余属性
      cursor,
      overflow,
      overflowX,
      overflowY,

      // 自定义属性
      fullWidth,
      fullHeight,
      halfWidth,
      halfHeight,
      pointer,
      ellipsis,

      onClick,
      onDrag,
      onDrop,
      onFocus,
      onBlur,
      onKeyDown,
      onKeyUp,
      onMouseEnter,
      onMouseLeave,
      onMouseOver,
      onMouseOut,
      onMouseMove,
      onMouseDown,
      onMouseUp,
      onScroll,

      ...props
    },
    ref,
  ) => {
    const sty: CSSProperties = {
      ...getTextStyle({
        color,
        textAlign,
        textDecoration,
        textTransform,
        textIndent,
      }),
      ...getFontStyle({
        fontFamily,
        fontStyle,
        fontSize,
        fontWeight,
      }),
      ...getMarginStyle({
        margin,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
      }),
      ...getPaddingStyle({
        padding,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
      }),
      ...getDimensionStyle({
        height,
        lineHeight,
        maxHeight,
        minHeight,
        width,
        maxWidth,
        minWidth,
      }),
      ...getDisplayStyle({
        display,
      }),
      ...getPositionStyle({
        position,
        top,
        bottom,
        left,
        right,
      }),
      ...getFlexStyle({
        flexDirection,
        flexWrap,
        justifyContent,
        alignItems,
        alignContent,
        order,
        flexGrow,
        flexShrink,
        flexBasis,
        alignSelf,
      }),
      ...getBorderStyle({
        border,
        borderStyle,
        borderWidth,
        borderColor,
        borderRadius,
        boxShadow,
      }),
      ...getBackgroundStyle({
        background,
        backgroundColor,
        backgroundImage,
        backgroundRepeat,
        backgroundAttachment,
        backgroundPosition,
      }),
      ...getRestStyle({
        cursor,
        overflow,
        overflowX,
        overflowY,
      }),
      ...getCustomStyle({
        fullWidth,
        halfWidth,
        fullHeight,
        halfHeight,
        pointer,
        ellipsis,
      }),
    };

    return (
      <div
        ref={ref}
        style={{ ...sty, ...style }}
        className={className}
        onClick={onClick}
        onDrag={onDrag}
        onDrop={onDrop}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onMouseMove={onMouseMove}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onScroll={onScroll}
        {...props}
      >
        {children}
      </div>
    );
  },
);

export default Box;
