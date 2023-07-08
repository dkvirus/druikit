# RightPoint

选择器

## 基础使用

```jsx
import { useState } from 'react';
import { RightPoint } from 'druikit';

export default () => {
  return (
    <>
      <RightPoint arrowPercent={80} />
    </>
  );
};
```

## arrowPercent

进度条百分比, 值如果大于 100 按照 100 计算。

```jsx
import { useState } from 'react';
import { RightPoint, Box } from 'druikit';

export default () => {
  return (
    <>
      <RightPoint width={300} arrowPercent={80} label="arrowPercent: 80" />
      <Box height={10} />
      <RightPoint width={300} arrowPercent={100} label="arrowPercent: 100" />
      <Box height={10} />
      <RightPoint width={300} arrowPercent={120} label="arrowPercent: 120" />
    </>
  );
};
```

## disabled

禁用状态: 1. 鼠标悬浮时不会改变背景色 2. 鼠标悬浮时不是手状,是箭头

```jsx
import { useState } from 'react';
import { RightPoint, Box } from 'druikit';

export default () => {
  return (
    <>
      <RightPoint arrowPercent={80} label="disabled: false" />
      <Box height={20} />
      <RightPoint arrowPercent={80} label="disabled: true" disabled />
      <Box height={20} />
      <RightPoint arrowPercent={80} label="disabled: false" highlighted />
      <Box height={20} />
      <RightPoint
        arrowPercent={80}
        label="disabled: true"
        highlighted
        disabled
      />
    </>
  );
};
```

## highlighted

高亮显示

```jsx
import { useState } from 'react';
import { RightPoint, Box } from 'druikit';

export default () => {
  return (
    <>
      <RightPoint arrowPercent={80} label="highlighted: false" />
      <Box height={20} />
      <RightPoint arrowPercent={80} label="highlighted: true" highlighted />
    </>
  );
};
```

## size

```jsx
import { useState } from 'react';
import { RightPoint, Box } from 'druikit';

export default () => {
  return (
    <>
      <RightPoint
        arrowPercent={80}
        size="small"
        label="size: small (height: 26)"
      />
      <Box height={20} />
      <RightPoint
        arrowPercent={80}
        size="middle"
        label="size: middle (height: 34, 默认值)"
      />
      <Box height={20} />
      <RightPoint
        arrowPercent={80}
        size="large"
        label="size: large (height: 41)"
      />
    </>
  );
};
```

## width

高亮显示

```jsx
import { useState } from 'react';
import { RightPoint, Box } from 'druikit';

export default () => {
  return (
    <>
      <RightPoint arrowPercent={80} label="width: 100% (默认值)" />
      <Box height={20} />
      <RightPoint arrowPercent={80} label="width: 300" width={300} />
    </>
  );
};
```

<API id="RightPoint"></API>
