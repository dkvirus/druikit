# Card

卡片

## 基础使用

```jsx
import { Card, Box } from 'druikit';

export default () => {
  return (
    <>
      <Card>
        <Box padding={30}>hello world</Box>
      </Card>
    </>
  );
};
```

## 设置尺寸

```jsx
import { Card, Box, Flex } from 'druikit';

export default () => {
  return (
    <Box>
      <Flex justifyContent="space-between">
        {[1, 2, 3, 4].map((item) => (
          <Card width="24%" key={item}>
            <Box padding={30}>width: 24%</Box>
          </Card>
        ))}
      </Flex>
      <Box height={10} />
      <Flex justifyContent="space-between">
        {[1, 2, 3].map((item) => (
          <Card width="32%" key={item}>
            <Box padding={30}>width: 32%</Box>
          </Card>
        ))}
      </Flex>
      <Box height={10} />
      <Flex justifyContent="space-between">
        {[1, 2].map((item) => (
          <Card width="49%" key={item}>
            <Box padding={30}>width: 49%</Box>
          </Card>
        ))}
      </Flex>
      <Box height={10} />
      <Card width="100%">
        <Box padding={30}>width: 100%</Box>
      </Card>
      <Box height={10} />
      <Card fullWidth>
        <Box padding={30}>fullWidth</Box>
      </Card>
    </Box>
  );
};
```

## fringed

设置卡片刘海, 卡片头部一段条状样式。

```jsx
import { Card, Box, Flex } from 'druikit';

export default () => {
  return (
    <Flex>
      <Card width="20%">
        <Box padding={30}>fringed: true (默认)</Box>
      </Card>
      <Box width={20} />
      <Card width="20%" fringed={false}>
        <Box padding={30}>fringed: false</Box>
      </Card>
    </Flex>
  );
};
```

<API id="Card"></API>
