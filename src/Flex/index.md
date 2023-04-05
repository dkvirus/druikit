# Flex

Flex 布局容器组件。

```jsx
import { Flex, Flex1, Box } from 'druikit';

export default () => {
  return (
    <>
      <Flex justifyContent="center" border="1px solid #333">
        <Box width={50} height={50} backgroundColor="red" />
        <Flex1 />
        <Box width={50} height={50} backgroundColor="blue" />
      </Flex>
      <Box height={50} />
      <Flex justifyContent="space-between" border="1px solid #333">
        <Box width={50} height={50} backgroundColor="red" />
        <Box width={50} height={50} backgroundColor="blue" />
      </Flex>
      <Box height={50} />
      <Flex justifyContent="space-around" border="1px solid #333">
        <Box width={50} height={50} backgroundColor="red" />
        <Box width={50} height={50} backgroundColor="blue" />
      </Flex>
    </>
  );
};
```
