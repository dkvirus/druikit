# BaseSelect

## 基础使用

```jsx
import { BaseSelect, Box } from 'druikit';

export default () => {
  const renderDropdown = (
    <>
      <div>hello</div>
      <div>world</div>
    </>
  );

  return (
    <>
      <BaseSelect
        placeholder="EmailEmailEmailEmailEmailEmailEmailEmailEmailEmail"
        renderDropdown={renderDropdown}
      />
      <Box height={10} />
      <BaseSelect selectorValue="Email" renderDropdown={renderDropdown} />
    </>
  );
};
```

## selectorWidth

```jsx
import { BaseSelect, Box } from 'druikit';

export default () => {
  const renderDropdown = (
    <>
      <div>hello</div>
      <div>world</div>
    </>
  );

  return (
    <>
      <BaseSelect selectorValue="Email" renderDropdown={renderDropdown} />
      <Box height={10} />
      <BaseSelect
        selectorValue="Email"
        renderDropdown={renderDropdown}
        selectorWidth={200}
      />
      <Box height={10} />
      <BaseSelect
        selectorValue="Email"
        renderDropdown={renderDropdown}
        selectorWidth={300}
      />
    </>
  );
};
```

## label

```jsx
import { BaseSelect, Box } from 'druikit';

export default () => {
  const renderDropdown = (
    <>
      <div>hello</div>
      <div>world</div>
    </>
  );

  return (
    <>
      <BaseSelect
        label="Email"
        placeholder="EmailEmailEmailEmailEmailEmailEmailEmailEmailEmail"
        renderDropdown={renderDropdown}
      />
      <Box height={10} />
      <BaseSelect
        label="Email"
        selectorValue="Email"
        renderDropdown={renderDropdown}
      />
    </>
  );
};
```

## disabled

禁用

```jsx
import { BaseSelect, Box } from 'druikit';

export default () => {
  const renderDropdown = (
    <>
      <div>hello</div>
      <div>world</div>
    </>
  );

  return (
    <>
      <BaseSelect placeholder="Email" renderDropdown={renderDropdown} />
      <Box height={10} />
      <BaseSelect selectorValue="Email" renderDropdown={renderDropdown} />
      <Box height={10} />
      <BaseSelect
        placeholder="Email"
        disabled
        renderDropdown={renderDropdown}
      />
      <Box height={10} />
      <BaseSelect
        selectorValue="Email"
        disabled
        renderDropdown={renderDropdown}
      />
    </>
  );
};
```

## placement

下拉框位置

```jsx
import { BaseSelect, Box } from 'druikit';

export default () => {
  const renderDropdown = (
    <>
      <div>hello</div>
      <div>world</div>
    </>
  );

  return (
    <>
      <BaseSelect
        placeholder="Email"
        dropdownStyle={{ width: 200, background: 'red' }}
        renderDropdown={renderDropdown}
      />
      <Box height={10} />
      <BaseSelect
        selectorValue="Email"
        placement="bottomRight"
        dropdownStyle={{ width: 200, background: 'red' }}
        renderDropdown={renderDropdown}
      />
    </>
  );
};
```

## 三种大小

```jsx
import { BaseSelect, Box } from 'druikit';

export default () => {
  const renderDropdown = (
    <>
      <div>hello</div>
      <div>world</div>
    </>
  );

  return (
    <>
      <BaseSelect
        label="Email"
        placeholder="Email"
        dropdownStyle={{ width: 200, background: 'red' }}
        renderDropdown={renderDropdown}
        selectorSize="small"
      />
      <Box height={10} />
      <BaseSelect
        label="Email"
        placeholder="Email"
        dropdownStyle={{ width: 200, background: 'red' }}
        renderDropdown={renderDropdown}
      />
      <Box height={10} />
      <BaseSelect
        label="Email"
        placeholder="Email"
        dropdownStyle={{ width: 200, background: 'red' }}
        renderDropdown={renderDropdown}
        selectorSize="large"
      />
    </>
  );
};
```

## onOpenChanged

监听下拉框关闭/打开状态

```jsx
import { useState } from 'react';
import { BaseSelect, Box, Flex } from 'druikit';

export default () => {
  const [open, setOpen] = useState(false);

  const renderDropdown = (
    <>
      <div>hello</div>
      <div>world</div>
    </>
  );

  return (
    <Flex alignItems="center">
      <BaseSelect
        placeholder="Email"
        renderDropdown={renderDropdown}
        onOpenChanged={(value) => setOpen(value)}
      />
      <Box width={10} />
      <Box>{open ? '打开' : '关闭'}</Box>
    </Flex>
  );
};
```

## 手动关闭下拉框

```jsx
import { useState, useRef } from 'react';
import { BaseSelect, BaseSelectRefProps, Box, Flex, Button } from 'druikit';

export default () => {
  const selectRef = useRef < BaseSelectRefProps > null;

  const renderDropdown = (
    <>
      <div>hello</div>
      <div>world</div>
    </>
  );

  return (
    <Flex alignItems="center">
      <BaseSelect
        ref={selectRef}
        placeholder="Email"
        renderDropdown={renderDropdown}
      />
      <Box width={10} />
      <Button onClick={() => selectRef.current?.close()}>关闭下拉框</Button>
    </Flex>
  );
};
```

<API id="BaseSelect"></API>
