# Alert

警告提示。

## type

```jsx
import { Alert, Flex, Box } from 'druikit';

export default () => {
  return (
    <Flex flexDirection="column">
      <Alert message="info ..." type="info" />
      <Box height={10} />
      <Alert message="error ..." type="error" />
      <Box height={10} />
      <Alert message="success ..." type="success" />
      <Box height={10} />
      <Alert message="warning ..." type="warning" />
    </Flex>
  );
};
```

## error, success, warning, info

```jsx
import { Alert, Flex, Box } from 'druikit';

export default () => {
  return (
    <Flex flexDirection="column">
      <Alert message="info ..." info />
      <Box height={10} />
      <Alert message="error ..." error />
      <Box height={10} />
      <Alert message="success ..." success />
      <Box height={10} />
      <Alert message="warning ..." warning />
    </Flex>
  );
};
```

<API id="Alert"></API>
