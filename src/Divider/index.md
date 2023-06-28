# Divider

分割线

## 基础使用

默认横向分割线

```jsx
import { useState } from 'react';
import { Divider, Flex, Box } from 'druikit';

export default () => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Box>Link</Box>
      <Divider length="100%" />
      <Box>Link</Box>
      <Divider fullLength />
      <Box>Link</Box>
    </Flex>
  );
};
```

## 竖向分割线

```jsx
import { useState } from 'react';
import { Divider, Flex, Box } from 'druikit';

export default () => {
  return (
    <Flex alignItems="center">
      <Box>Link</Box>
      <Divider vertical />
      <Box>Link</Box>
      <Divider vertical />
      <Box>Link</Box>
    </Flex>
  );
};
```

<API id="Divider"></API>
