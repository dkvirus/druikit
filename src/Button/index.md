# Button

按钮

## 基础使用

```jsx
import { Button, Box, Flex } from 'druikit';

export default () => {
  return (
    <Flex>
      <Button>Default Button</Button>
      <Box width={10} />
      <Button danger>Danger Button</Button>
      <Box width={10} />
      <Button primary>Primary Button</Button>
    </Flex>
  );
};
```

## disabled

```jsx
import { Button, Box, Flex } from 'druikit';

export default () => {
  return (
    <Box>
      <Flex>
        <Button>Default Button</Button>
        <Box width={10} />
        <Button disabled>Disabled Default Button</Button>
      </Flex>
      <Box height={10} />
      <Flex>
        <Button danger>Danger Button</Button>
        <Box width={10} />
        <Button danger disabled>
          Disabled Danger Button
        </Button>
      </Flex>
      <Box height={10} />
      <Flex>
        <Button bordered={false}>no border Button</Button>
        <Box width={10} />
        <Button bordered={false} disabled>
          Disabled no border Button
        </Button>
      </Flex>
    </Box>
  );
};
```

## bordered

是否有边框

```jsx
import { Button, Box, Flex } from 'druikit';

export default () => {
  return (
    <Flex>
      <Button>bordered: true (默认值)</Button>
      <Box width={10} />
      <Button bordered={false}>bordered: false</Button>
    </Flex>
  );
};
```

## fullWidth

宽度设置为 100%

```jsx
import { Button, Box, Flex } from 'druikit';

export default () => {
  return (
    <Flex flexDirection="column" alignItems="flex-start">
      <Button>fullWidth: false (默认值)</Button>
      <Box height={10} />
      <Button fullWidth>fullWidth: true</Button>
    </Flex>
  );
};
```

## shape

按钮形状

```jsx
import { Button, Box, Flex } from 'druikit';

export default () => {
  return (
    <Box>
      <Flex>
        <Button>Shape: round</Button>
        <Box width={10} />
        <Button shape="square">Shape: square</Button>
      </Flex>
      <Box height={10} />
      <Flex>
        <Button danger>Shape: round</Button>
        <Box width={10} />
        <Button danger shape="square">
          Shape: square
        </Button>
      </Flex>
    </Box>
  );
};
```

## loading

```jsx
import { Button, Box, Flex, CheckOutlined } from 'druikit';

export default () => {
  return (
    <Flex>
      <Button>Default Button</Button>
      <Box width={10} />
      <Button loading>Default Button</Button>
      <Box width={10} />
      <Button danger>Danger Button</Button>
      <Box width={10} />
      <Button danger loading>
        Danger Button
      </Button>
    </Flex>
  );
};
```

## prefix, suffix, gap

gap: 控制 prefix 或者 suffix 的距离

```jsx
import { Button, Box, Flex, CheckOutlined } from 'druikit';

export default () => {
  return (
    <Flex flexDirection="column" width={200}>
      <Button prefix={<CheckOutlined />}>prefix</Button>
      <Box height={10} />
      <Button prefix={<CheckOutlined />} gap={20}>
        prefix
      </Button>
      <Box height={10} />
      <Button prefix={<CheckOutlined />} gap={40}>
        prefix
      </Button>
    </Flex>
  );
};
```

<API id="Button"></API>
