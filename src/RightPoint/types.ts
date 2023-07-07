import { CSSProperties } from 'react';

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
  onClick?: () => void;
}
