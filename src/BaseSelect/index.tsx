import React, {
  CSSProperties,
  forwardRef,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import ClickAwayListener from '../ClickAwayListener';
import { CaretDownOutlined } from '../icons';
import { classnames, handlePlacement } from '../utils/cssUtils';
import './styles.css';

export interface BaseSelectProps {
  style?: CSSProperties;
  className?: string;
  label?: string;
  labelStyle?: CSSProperties;
  labelClassName?: string;
  renderSelector?: ReactNode;
  selectorStyle?: CSSProperties;
  selectorClassName?: string;
  renderDropdown?: ReactNode;
  dropdownStyle?: CSSProperties;
  dropdownClassName?: string;
  disabled?: boolean;
  onOpenChanged?: (open: boolean) => void;
  onClickAway?: () => void;
  /**
   * @description 被选中时下拉框显示文字
   */
  selectorValue?: string;
  /**
   * @description 未被选中时下拉框显示文字
   */
  placeholder?: string;
  placement?: 'bottomLeft' | 'bottomRight';
}

export interface BaseSelectRefProps {
  close: () => void;
}

const BaseSelect = forwardRef<BaseSelectRefProps, BaseSelectProps>(
  (
    {
      style,
      className = '',
      label,
      labelStyle,
      labelClassName = '',
      renderSelector,
      selectorStyle,
      selectorClassName = '',
      selectorValue,
      renderDropdown,
      dropdownStyle,
      dropdownClassName = '',
      disabled,
      onOpenChanged,
      onClickAway,
      placeholder,
      placement = 'bottomLeft',
    }: BaseSelectProps,
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const selected = Boolean(selectorValue);

    useEffect(() => {
      onOpenChanged?.(open);
    }, [open]);

    /* ************************* label ****************************** */
    const labelCls = classnames({
      'base-select_label': true,
      [labelClassName]: true,
    });

    /* ************************* select ****************************** */
    const selectCls = classnames({
      'base-select_select': true,
      'base-select_select-disabled': disabled,
    });

    /* ************************* selector ****************************** */
    const selectorCls = classnames({
      'base-select_selector': true,
      'base-select_selector-hover': true,
      'base-select_selector-selected': selected,
      [selectorClassName]: true,
    });

    const selectorSelectionCls = classnames(['base-select_selector-selection']);

    const selectorArrowCls = classnames({
      'base-select_selector-arrow': true,
      'base-select_selector-arrow-open': open,
      'base-select_selector-arrow-selected': selected,
    });

    /* ************************* dropdown ****************************** */
    const dropdownSty: CSSProperties = {
      top: 50,
      ...dropdownStyle,
      ...handlePlacement(placement),
    };

    const dropdownCls = classnames({
      'base-select_dropdown': true,
      'base-select_dropdown-open': open,
      [dropdownClassName]: true,
    });

    /* ************************* 组件对外暴露的方法 ****************************** */
    useImperativeHandle(ref, () => ({
      close: () => setOpen(false),
    }));

    const onClickSelector = () => {
      if (disabled) return;
      setOpen(!open);
    };

    return (
      <ClickAwayListener
        onClickAway={() => {
          setOpen(false);
          onClickAway?.();
        }}
      >
        <div style={style} className={className}>
          {label ? (
            <div style={labelStyle} className={labelCls}>
              {label}
            </div>
          ) : null}
          <div className={selectCls}>
            {renderSelector ? (
              <div onClick={onClickSelector}>{renderSelector}</div>
            ) : (
              <div
                style={selectorStyle}
                className={selectorCls}
                onClick={onClickSelector}
              >
                <div className={selectorSelectionCls}>
                  {selectorValue || placeholder}
                </div>
                <CaretDownOutlined className={selectorArrowCls} />
              </div>
            )}
            <div style={dropdownSty} className={dropdownCls}>
              {renderDropdown}
            </div>
          </div>
        </div>
      </ClickAwayListener>
    );
  },
);

export default BaseSelect;
