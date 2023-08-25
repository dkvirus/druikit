import { CSSProperties } from 'react';

/**
 * 处理类名
 *
 * ``` js
 * classnames(['aaa', 'bbb', '', 'ddd'])   // 'aaa bbb ddd'
 * classnames({'aaa': true, 'bbb': false, 'ccc': true})   // 'aaa ccc'
 * ```
 */
export function classnames(
  cls: Array<string | undefined> | Record<string, boolean | undefined>,
): string {
  if (Array.isArray(cls)) {
    return cls.filter((c) => (c || '').trim()).join(' ');
  }
  return Object.keys(cls || {})
    .filter((c) => c)
    .filter((c) => cls[c])
    .join(' ');
}

export function handlePlacement(placement: 'bottomLeft' | 'bottomRight') {
  const sty: CSSProperties = {
    position: 'absolute',
  };
  if (placement === 'bottomRight') {
    sty.right = 0;
    sty.left = 'auto';
  } else {
    sty.left = 0;
    sty.right = 'auto';
  }
  return sty;
}

export const cssUtils = {
  classnames,
  handlePlacement,
};
