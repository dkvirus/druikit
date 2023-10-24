# Switch

开关

## 基础使用

```jsx
import { useState } from 'react';
import { Switch, Box } from 'druikit';

export default () => {
  const [value, setValue] = useState(false);

  return (
    <>
      <Switch
        label="Switch"
        leftLabel="Close"
        rightLabel="Open"
        value={value}
        onChange={(value) => setValue(value)}
      />
    </>
  );
};
```

## 三种大小

```jsx
import { useState } from 'react';
import { Switch, Box, Flex } from 'druikit';

export default () => {
  const [value, setValue] = useState(false);

  return (
    <Flex alignItems="center">
      <Switch
        label="Switch"
        leftLabel="Close"
        rightLabel="Open"
        value={value}
        onChange={(value) => setValue(value)}
        size="small"
      />
      <Box width={30} />
      <Switch
        label="Switch"
        leftLabel="Close"
        rightLabel="Open"
        value={value}
        onChange={(value) => setValue(value)}
        size="middle"
      />
      <Box width={30} />
      <Switch
        label="Switch"
        leftLabel="Close"
        rightLabel="Open"
        value={value}
        onChange={(value) => setValue(value)}
        size="large"
      />
    </Flex>
  );
};
```

## disabled

```jsx
import { useState } from 'react';
import { Switch, Box } from 'druikit';

export default () => {
  const [value, setValue] = useState(false);

  return (
    <>
      <Switch
        disabled
        label="Switch"
        leftLabel="Close"
        rightLabel="Open"
        value={value}
        onChange={(value) => setValue(value)}
      />
    </>
  );
};
```

## leftLabel, rightLabel

```jsx
import { useState } from 'react';
import { Switch, Flex, Box } from 'druikit';

export default () => {
  const [value, setValue] = useState(false);

  return (
    <Flex flexDirection="column">
      <Switch
        leftLabel="Close"
        rightLabel="Open"
        value={value}
        onChange={(value) => setValue(value)}
      />
      <Box height={10} />
      <Switch
        rightLabel="Open"
        value={value}
        onChange={(value) => setValue(value)}
      />
      <Box height={10} />
      <Switch
        leftLabel="Close"
        value={value}
        onChange={(value) => setValue(value)}
      />
      <Box height={10} />
      <Switch value={value} onChange={(value) => setValue(value)} />
    </Flex>
  );
};
```

<API id="Switch"></API>
