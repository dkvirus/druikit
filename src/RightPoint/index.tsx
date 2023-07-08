import React, { CSSProperties, FC } from 'react';
import { classnames } from '../utils/cssUtils';
import './styles.css';

export interface RightPointProps {
  style?: CSSProperties;
  className?: string;
  arrowPercent?: number;
  arrowStyle?: CSSProperties;
  arrowClassName?: string;
  label?: string;
  labelStyle?: CSSProperties;
  labelClassName?: string;
  disabled?: boolean;
  highlighted?: boolean;
  size?: 'small' | 'middle' | 'large';
  width?: string | number;
  onClick?: () => void;
}

const RightPoint: FC<RightPointProps> = ({
  style,
  className = '',
  arrowPercent,
  arrowStyle = {},
  arrowClassName = '',
  label,
  labelStyle = {},
  labelClassName = '',
  disabled,
  highlighted, // 突出显示, 默认背景颜色灰色, 突出显示背景颜色是浅绿色
  size = 'middle',
  width = '100%',
  onClick,
}) => {
  const cls = classnames({
    [className]: true,
    'right-point_wrapper': true,
    'right-point_wrapper-hover': !disabled,
    [`right-point_wrapper-${size}`]: true,
  });

  const sty: CSSProperties = {
    width,
    ...style,
  };

  const arrowSty: CSSProperties = {
    width: Math.min(Number(arrowPercent), 100) * 0.85 + '%',
  };

  const arrowCls = classnames({
    [arrowClassName]: true,
    'right-point_arrow': true,
    'right-point_pointer': !disabled,
    'right-point_highlight': highlighted,
    'right-point_disabled': disabled,
  });

  const labelCls = classnames({
    [labelClassName]: true,
    'right-point_label': true,
    [`right-point_label-${size}`]: true,
    'right-point_pointer': !disabled,
  });

  return (
    <div
      style={sty}
      className={cls}
      onClick={() => {
        if (disabled) return;
        onClick?.();
      }}
    >
      <div style={{ ...arrowStyle, ...arrowSty }} className={arrowCls} />
      <div style={{ ...labelStyle }} className={labelCls}>
        {label}
      </div>
    </div>
  );
};

export default RightPoint;
