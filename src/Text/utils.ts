import { CSSProperties } from 'react';

export function getFontSize({
  fontSize,
  fontSize32,
  fontSize16,
  fontSize14,
  fontSize12,
}: {
  fontSize?: number;
  fontSize32?: boolean;
  fontSize16?: boolean;
  fontSize14?: boolean;
  fontSize12?: boolean;
}) {
  const sty: CSSProperties = {};

  if (typeof fontSize === 'number') {
    sty.fontSize = fontSize;
  }

  if (fontSize32) {
    sty.fontSize = 32;
  }

  if (fontSize16) {
    sty.fontSize = 16;
  }

  if (fontSize14) {
    sty.fontSize = 14;
  }

  if (fontSize12) {
    sty.fontSize = 12;
  }

  return sty;
}

export function getColor({
  color,
  color666,
  colorBlue,
  colorRed,
}: {
  color?: string;
  color666?: boolean;
  colorBlue?: boolean;
  colorRed?: boolean;
}) {
  const sty: CSSProperties = {};

  if (typeof color === 'string') {
    sty.color = color;
  }

  if (color666) {
    sty.color = '#666666';
  }

  if (colorBlue) {
    sty.color = '#01a699';
  }

  if (colorRed) {
    sty.color = '#d62310';
  }

  return sty;
}

export function getTextTransform({
  capitalize,
  uppercase,
  lowercase,
}: {
  capitalize?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
}) {
  const sty: CSSProperties = {};

  if (capitalize) {
    sty.textTransform = 'capitalize';
  }

  if (uppercase) {
    sty.textTransform = 'uppercase';
  }

  if (lowercase) {
    sty.textTransform = 'lowercase';
  }

  return sty;
}
