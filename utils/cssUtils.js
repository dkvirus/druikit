/**
 * 处理类名
 *
 * ``` js
 * classnames(['aaa', 'bbb', '', 'ddd'])   // 'aaa bbb ddd'
 * classnames({'aaa': true, 'bbb': false, 'ccc': true})   // 'aaa ccc'
 * ```
 */
export function classnames(cls) {
  if (Array.isArray(cls)) {
    return cls.filter(function (c) {
      return c.trim();
    }).join(' ');
  }
  return Object.keys(cls || {}).filter(function (c) {
    return c;
  }).filter(function (c) {
    return cls[c];
  }).join(' ');
}
export function handlePlacement(placement) {
  var sty = {
    position: 'absolute'
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
export var cssUtils = {
  classnames: classnames,
  handlePlacement: handlePlacement
};