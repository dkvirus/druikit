# Icons

图标

## 图标展示

```jsx
import { CheckOutlined, Flex, Box } from 'druikit';

export default () => {
  return (
    <Flex flexWrap>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <CheckOutlined size={40} />
        <Box height={20} />
        <Box>CheckOutlined</Box>
      </Flex>
    </Flex>
  );
};
```
