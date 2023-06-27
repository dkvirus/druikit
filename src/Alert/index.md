# Alert

警告提示。

## 基础使用

```jsx
import { Alert, Flex } from 'druikit';

export default () => {
  return (
    <Flex flexDirection="column">
      <Alert message="red ..." type="red" />
      <Alert message="green ..." type="green" />
      <Alert message="blue ..." type="blue" />
      <Alert message="yellow ..." type="yellow" />
    </Flex>
  );
};
```

<API id="Alert"></API>
