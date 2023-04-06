# Flex

Flex 布局容器组件。

```jsx
import { Flex, Flex1, Box } from 'druikit';

export default () => {
  return (
    <>
      <Flex justifyContent="center" border="1px solid #333">
        <Box width={50} height={50} backgroundColor="red" />
        <Box width={50} height={50} backgroundColor="blue" />
      </Flex>
      <Box>justify-content: center</Box>
      <Box height={50} />
      <Flex justifyContent="space-between" border="1px solid #333">
        <Box width={50} height={50} backgroundColor="red" />
        <Box width={50} height={50} backgroundColor="blue" />
      </Flex>
      <Box>justify-content: space-between</Box>
      <Box height={50} />
      <Flex justifyContent="space-around" border="1px solid #333">
        <Box width={50} height={50} backgroundColor="red" />
        <Box width={50} height={50} backgroundColor="blue" />
      </Flex>
      <Box>justify-content: space-around</Box>
    </>
  );
};
```

## ref 用法

```jsx
import { useRef } from 'react';
import { Flex } from 'druikit';

export default () => {
  const flexRef = useRef();
  return (
    <>
      <Flex ref={flexRef} width={100} height={80} backgroundColor="red"></Flex>
      <button
        onClick={() => {
          const displayValue = flexRef.current.style.display;
          flexRef.current.style.display =
            displayValue === 'none' ? 'block' : 'none';
        }}
      >
        点击
      </button>
    </>
  );
};
```
