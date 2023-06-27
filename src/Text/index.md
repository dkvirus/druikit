# Text

文本

## 字体大小

```jsx
import { Text } from 'druikit';

export default () => {
  return (
    <>
      <Text fontSize32>fontSize: 32px</Text>
      <Text fontSize={28}>fontSize: 28</Text>
      <Text fontSize={24}>fontSize: 24</Text>
      <Text fontSize={20}>fontSize: 20</Text>
      <Text fontSize16>fontSize: 16px</Text>
      <Text fontSize14>fontSize: 14px</Text>
      <Text fontSize12>fontSize: 12px</Text>
    </>
  );
};
```

## 字体颜色

```jsx
import { Text } from 'druikit';

export default () => {
  return (
    <>
      <Text color666>color: #666</Text>
      <Text colorBlue>color: #01a699 (blue)</Text>
      <Text colorRed>color: #d62310 (red)</Text>
    </>
  );
};
```

## 字体大小写转换

```jsx
import { Text } from 'druikit';

export default () => {
  return (
    <>
      <Text capitalize>capitalize</Text>
      <Text uppercase>uppercase</Text>
      <Text lowercase>lowercase</Text>
    </>
  );
};
```

<API id="Text"></API>
