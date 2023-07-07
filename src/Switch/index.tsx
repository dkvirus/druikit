import React, { CSSProperties, FC } from 'react';
import { classnames } from '../utils/cssUtils';
import './styles.css';

export interface SwitchProps {
  style?: CSSProperties;
  className?: string;
  value?: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
  leftLabel?: string;
  rightLabel?: string;
  label?: string;
  labelStyle?: CSSProperties;
  labelClassName?: string;
  /**
   * @description 开关与左右文本的距离
   * @default 4
   */
  gap?: number;
}

const Switch: FC<SwitchProps> = ({
  style,
  className = '',
  value = false,
  onChange,
  disabled,
  leftLabel,
  rightLabel,
  label,
  labelStyle,
  labelClassName = '',
  gap = 4,
}) => {
  const cls = classnames({
    ['switch_wrapper']: true,
    [className]: true,
  });

  const labelCls = classnames(['switch_switch-label', labelClassName]);

  const switchWrapperCls = classnames({
    'switch_switch-wrapper': true,
    'switch_switch-wrapper-disabled': disabled,
  });

  const leftLabelItemCls = classnames({
    ['switch_label-item']: true,
    ['switch_label-item-left-active']: !value,
  });

  const rightLabelItemCls = classnames({
    ['switch_label-item']: true,
    ['switch_label-item-right-active']: value,
  });

  const switchHandleCls = classnames({
    ['switch-switch-handle']: true,
    ['switch-switch-handle-active']: value,
  });

  const gapEl = <div style={{ width: gap }} />;

  return (
    <div style={style} className={cls}>
      <div style={labelStyle} className={labelCls}>
        {label}
      </div>
      <div className={switchWrapperCls}>
        <div className={leftLabelItemCls}>{leftLabel}</div>
        {leftLabel ? gapEl : null}
        <div
          className="switch_switch-round"
          onClick={() => {
            if (disabled) return;
            onChange?.(!value);
          }}
        >
          <div className={switchHandleCls} />
        </div>
        {rightLabel ? gapEl : null}
        <div className={rightLabelItemCls}>{rightLabel}</div>
      </div>
    </div>
  );
};

export default Switch;
