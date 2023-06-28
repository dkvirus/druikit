# Icons

图标

## 图标展示

```jsx
import {
  CheckOutlined,
  ClockCircleOutlined,
  LoadingOutlined,
  Flex,
  Box,
} from 'druikit';

export default () => {
  return (
    <Flex flexWrap>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding={20}
      >
        <CheckOutlined size={40} />
        <Box height={20} />
        <Box>CheckOutlined</Box>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding={20}
      >
        <ClockCircleOutlined size={40} />
        <Box height={20} />
        <Box>ClockCircleOutlined</Box>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding={20}
      >
        <LoadingOutlined size={40} />
        <Box height={20} />
        <Box>LoadingOutlined</Box>
      </Flex>
    </Flex>
  );
};
```
