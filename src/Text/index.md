# Text

文本

## 字体大小

```jsx
import { Text } from 'druikit';

export default () => {
  return (
    <>
      <Text fontSize32>fontSize32: 32px</Text>
      <Text fontSize={28}>fontSize: 28</Text>
      <Text fontSize={24}>fontSize: 24</Text>
      <Text fontSize={20}>fontSize: 20</Text>
      <Text fontSize16>fontSize16: 16px</Text>
      <Text fontSize14>fontSize14: 14px</Text>
      <Text fontSize12>fontSize12: 12px</Text>
    </>
  );
};
```

## 字体粗细

```jsx
import { Text } from 'druikit';

export default () => {
  return (
    <>
      <Text fontWeight={200}>fontWeight: 200</Text>
      <Text fontWeight={300}>fontWeight: 300</Text>
      <Text fontWeight={400}>fontWeight: 400</Text>
      <Text bold>bold</Text>
      <Text bolder>bolder</Text>
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
      <Text color333>color333: #333</Text>
      <Text color666>color666: #666</Text>
      <Text color999>color999: #999</Text>
      <Text colorBlue>colorBlue: #01a699 (blue)</Text>
      <Text colorRed>colorRed: #d62310 (red)</Text>
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
