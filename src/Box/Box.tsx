import React, { CSSProperties, FC, forwardRef } from 'react';
import { BoxType } from './types';
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

export const Box: FC<BoxType> = forwardRef<HTMLDivElement, BoxType>(
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
