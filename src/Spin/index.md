# Spin

加载中

## 基础使用

```jsx
import { useState } from 'react';
import { Spin, Switch, Box } from 'druikit';

export default () => {
  const [value, setValue] = useState(true);

  return (
    <>
      <Switch
        value={value}
        onChange={(value) => setValue(value)}
        rightLabel="加载"
      />
      <Box height={10} />
      <Spin spinning={value}>
        <Box fullHeight background="antiquewhite">
          hello world
        </Box>
      </Spin>
    </>
  );
};
```

<API id="Spin"></API>
