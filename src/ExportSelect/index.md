# ExportSelect

导出下拉框

## 基础使用

导出文件

```jsx
import { useState } from 'react';
import { ExportSelect } from 'druikit';

export default () => {
  return (
    <>
      <ExportSelect showExcel showJPG showPDF />
    </>
  );
};
```

## 三种大小

```jsx
import { useState } from 'react';
import { ExportSelect, Flex, Box } from 'druikit';

export default () => {
  return (
    <Flex>
      <ExportSelect showExcel showJPG showPDF size="small" />
      <Box width={10} />
      <ExportSelect showExcel showJPG showPDF />
      <Box width={10} />
      <ExportSelect showExcel showJPG showPDF size="large" />
    </Flex>
  );
};
```

## 别名

```jsx
import { useState } from 'react';
import { ExportSelect, Flex, Box } from 'druikit';

export default () => {
  return (
    <Flex>
      <ExportSelect showJPG />
      <Box width={10} />
      <ExportSelect showJPG jpgAlias="Jpeg" />
    </Flex>
  );
};
```

## 下拉框不要绿色样式

手动将 selectorValue 设置为空，并且设置 placeholder 值。

> selectorValue 和 placeholder 区别?
> selectorValue 下拉框有选中项时下拉框中显示的文本
> placeholder 下拉框没有选中任何想时下拉框中显示的文本

```jsx
import { useState } from 'react';
import { ExportSelect, Flex, Box } from 'druikit';

export default () => {
  return (
    <Flex>
      <ExportSelect showJPG selectorValue="" placeholder="Export" />
    </Flex>
  );
};
```

<API id="ExportSelect"></API>
