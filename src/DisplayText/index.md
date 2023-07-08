# DisplayText

带箭头的文本

## 基础使用

```jsx
import { useState } from 'react';
import { DisplayText } from 'druikit';

export default () => {
  return (
    <>
      <DisplayText value="20.2%" />
      <DisplayText value="-20.2%" />
      <DisplayText value="0" />
    </>
  );
};
```

## fontSize

字体大小

```jsx
import { useState } from 'react';
import { DisplayText } from 'druikit';

export default () => {
  return (
    <>
      <DisplayText fontSize={12} value="20.2%" />
      <DisplayText fontSize={16} value="20.2%" />
      <DisplayText fontSize={20} value="20.2%" />
    </>
  );
};
```

## showArrow

是否显示上下箭头

```jsx
import { useState } from 'react';
import { DisplayText } from 'druikit';

export default () => {
  return (
    <>
      <DisplayText value="20.2%" />
      <DisplayText value="20.2%" showArrow={false} />
    </>
  );
};
```

## nan

nan: 定义 value 为非数值时显示文本, 默认显示 N/A

```jsx
import { useState } from 'react';
import { DisplayText } from 'druikit';

export default () => {
  return (
    <>
      <DisplayText value="inf" />
      <DisplayText value="inf" nan="HAHA" />
    </>
  );
};
```

## zeroColor, negativeColor, positiveColor

可以定义正数, 负数和零的颜色

<API id="DisplayText"></API>
