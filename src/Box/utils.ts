export function handleCssUnit(value?: number | string) {
  if (typeof value === 'number') return value + 'px';
  if (typeof value === 'string') return value;
  return undefined;
}

export function isUndefined(value: any) {
  return typeof value === 'undefined';
}

export function isNotUndefined(value: any) {
  return !isUndefined(value);
}
