# InputNumber

数字输入框。

## 初始值

value = 0.0 在页面上回显会变成 0, 因为数值 0.0 会自动变成数值 0
但业务上有时需要回显也是 0.0, 基于这个原则, value 允许是字符串

```jsx
import { Box, InputNumber } from 'druikit';

export default () => {
  return (
    <>
      <Box>value=0</Box>
      <InputNumber value={0} />
      <Box>value='0.0'</Box>
      <InputNumber value="0.0" />
      <Box>value=''</Box>
      <InputNumber value="" />
      <Box>value='', empty=false</Box>
      <InputNumber value="" empty={false} />
      <Box>value=undefined</Box>
      <InputNumber value={undefined} />
      <Box>value=null</Box>
      <InputNumber value={null} />
      <Box>value=null, empty=false</Box>
      <InputNumber value={null} empty={false} />
      <Box>value=null, empty=false, min=1</Box>
      <InputNumber value={null} empty={false} min={1} />
    </>
  );
};
```

## 最大值最小值

初始值小于最小值, 初始值自动设置为最小值;
初始值大于最大值, 初始值自动设置为最大值;

```jsx
import { Box, InputNumber } from 'druikit';

export default () => {
  return (
    <>
      <Box>min=1, value=0</Box>
      <InputNumber min={1} value={0} />

      <Box>max=10, value=11</Box>
      <InputNumber max={11} value={10} />
    </>
  );
};
```

## 禁用

```jsx
import { InputNumber } from 'druikit';

export default () => {
  return (
    <>
      <InputNumber disabled />
    </>
  );
};
```

## 提示文字

```jsx
import { InputNumber } from 'druikit';

export default () => {
  return (
    <>
      <InputNumber placeholder="输入金额" />
    </>
  );
};
```

## 最大长度

```jsx
import { Box, InputNumber } from 'druikit';

export default () => {
  return (
    <>
      <Box>maxLength: 5</Box>
      <InputNumber maxLength={5} />
    </>
  );
};
```

## 空值显示

```jsx
import { Box, InputNumber } from 'druikit';

export default () => {
  return (
    <>
      <Box>empty: true</Box>
      <InputNumber empty />
      <Box>empty: false</Box>
      <InputNumber empty={false} />
    </>
  );
};
```

## 尺寸

```jsx
import { Box, InputNumber } from 'druikit';

export default () => {
  return (
    <>
      <Box>width=50, height=30</Box>
      <InputNumber width={50} height={30} />
      <Box>width=100, height=30</Box>
      <InputNumber width={100} height={30} />
    </>
  );
};
```

## 文字对齐方式

```jsx
import { Box, InputNumber } from 'druikit';

export default () => {
  return (
    <>
      <Box>textAlign=left</Box>
      <InputNumber value={10} textAlign="left" />
      <Box>textAlign=center</Box>
      <InputNumber value={10} textAlign="center" />
      <Box>textAlign=right</Box>
      <InputNumber value={10} textAlign="right" />
    </>
  );
};
```

<API id="InputNumber"></API>
