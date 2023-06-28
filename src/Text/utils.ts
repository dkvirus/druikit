import { Property } from 'csstype';
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

export function getFontWeight({
  fontWeight,
  bold,
  bolder,
}: {
  fontWeight?: Property.FontWeight;
  bold?: boolean;
  bolder?: boolean;
}) {
  const sty: CSSProperties = {};

  if (fontWeight) {
    sty.fontWeight = fontWeight;
  }

  if (bold) {
    sty.fontWeight = 'bold';
  }

  if (bolder) {
    sty.fontWeight = 'bolder';
  }

  return sty;
}

export function getColor({
  color,
  color333,
  color666,
  color999,
  colorBlue,
  colorRed,
}: {
  color?: string;
  color333?: boolean;
  color666?: boolean;
  color999?: boolean;
  colorBlue?: boolean;
  colorRed?: boolean;
}) {
  const sty: CSSProperties = {};

  if (typeof color === 'string') {
    sty.color = color;
  }

  if (color333) {
    sty.color = '#333333';
  }

  if (color666) {
    sty.color = '#666666';
  }

  if (color999) {
    sty.color = '#999999';
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
