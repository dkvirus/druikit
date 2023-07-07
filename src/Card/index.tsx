import React, { CSSProperties, FC, ReactNode } from 'react';
import { classnames } from '../utils/cssUtils';
import './styles.css';

export interface CardProps {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  width?: number | string;
  fullWidth?: boolean;
  height?: number | string;
  fullHeight?: boolean;
  /**
   * @description 有刘海,卡片上变有条状样式
   * @default true
   */
  fringed?: boolean;
  fringeStyle?: CSSProperties;
  fringeClassName?: string;
  fringeHeight?: number;
}

const Card: FC<CardProps> = ({
  style,
  className = '',
  children,
  width,
  fullWidth,
  height,
  fullHeight,
  fringed = true,
  fringeStyle,
  fringeClassName = '',
  fringeHeight = 12,
}) => {
  const sty: CSSProperties = {
    ...style,
    minHeight: 2,
    minWidth: 2,
    width,
    height,
  };

  if (fullWidth) {
    sty.width = '100%';
  }

  if (fullHeight) {
    sty.height = '100%';
  }

  const cls = classnames({
    ['card_wrapper']: true,
    [className]: true,
  });

  /* *************************** fringed ***************************** */
  let fringeEl: ReactNode = null;

  if (fringed) {
    const fringeSty: CSSProperties = {
      ...fringeStyle,
      height: fringeHeight,
    };

    const fringeCls = classnames(['card_fringe', fringeClassName]);

    fringeEl = <div style={fringeSty} className={fringeCls} />;
  }

  return (
    <div style={sty} className={cls}>
      {fringeEl}
      {children}
    </div>
  );
};

export default Card;
