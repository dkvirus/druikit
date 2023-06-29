# Select

选择器

## 基础使用

```jsx
import { useState } from 'react';
import { Select, SelectOption } from 'druikit';

export default () => {
  const [value, setValue] = useState('');

  const options = [
    { label: 'Sweden', value: 'Sweden' },
    { label: 'Japan', value: 'Japan' },
  ];

  return (
    <>
      <Select
        placeholder="Region"
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
      />
    </>
  );
};
```

## label

```jsx
import { useState } from 'react';
import { Select, SelectOption, Box, Flex } from 'druikit';

export default () => {
  const [value, setValue] = useState('');

  const options = [
    { label: 'Sweden', value: 'Sweden' },
    { label: 'Japan', value: 'Japan' },
  ];

  return (
    <Flex alignItems="flex-end">
      <Select
        label="有 label"
        labelStyle={{ textTransform: 'none' }}
        placeholder="Region"
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
      />
      <Box width={20} />
      <Select
        placeholder="Region"
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
      />
    </Flex>
  );
};
```

## placeholder

```jsx
import { useState } from 'react';
import { Select, SelectOption, Box, Flex } from 'druikit';

export default () => {
  const [value, setValue] = useState('');

  const options = [
    { label: 'Sweden', value: 'Sweden' },
    { label: 'Japan', value: 'Japan' },
  ];

  return (
    <Flex>
      <Select
        placeholder="Region"
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
      />
      <Box width={20} />
      <Select
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
      />
    </Flex>
  );
};
```

## dropdownTitle

下拉框标题

```jsx
import { useState } from 'react';
import { Select, SelectOption, Box, Flex } from 'druikit';

export default () => {
  const [value, setValue] = useState('');

  const options = [
    { label: 'Sweden', value: 'Sweden' },
    { label: 'Japan', value: 'Japan' },
  ];

  return (
    <Flex alignItems="flex-end">
      <Select
        label="有 dropdownTitle"
        labelStyle={{ textTransform: 'none' }}
        placeholder="Region"
        dropdownTitle="Region"
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
      />
      <Box width={20} />
      <Select
        label="没有 dropdownTitle"
        labelStyle={{ textTransform: 'none' }}
        placeholder="Region"
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
      />
    </Flex>
  );
};
```

## 下拉框禁用

下拉框禁用: disabled

```jsx
import { useState } from 'react';
import { Select, SelectOption, Box, Flex } from 'druikit';

export default () => {
  const [value, setValue] = useState('');

  const options = [
    { label: 'Sweden', value: 'Sweden' },
    { label: 'Japan', value: 'Japan' },
  ];

  return (
    <Flex alignItems="flex-end">
      <Select
        label="Region"
        placeholder="Region"
        dropdownTitle="Region"
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
        disabled
      />
      <Box width={20} />
      <Select
        label="Region"
        placeholder="Region"
        dropdownTitle="Region"
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
      />
    </Flex>
  );
};
```

## 下拉选项禁用

```jsx
import { useState } from 'react';
import { Select, SelectOption, Box, Flex } from 'druikit';

export default () => {
  const [value, setValue] = useState('');

  const options = [
    { label: 'Sweden', value: 'Sweden' },
    { label: 'Japan', value: 'Japan', disabled: true },
  ];

  return (
    <Flex alignItems="flex-end">
      <Select
        label="Region"
        placeholder="Region"
        dropdownTitle="Region"
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
      />
    </Flex>
  );
};
```

## 下拉框宽度自适应

```jsx
import { useState } from 'react';
import { Select, SelectOption } from 'druikit';

export default () => {
  const [value, setValue] = useState('');

  const options = [
    { label: 'Sweden Sweden Sweden Sweden Sweden', value: 'Sweden' },
    { label: 'Japan', value: 'Japan' },
  ];

  return (
    <>
      <Select
        placeholder="Region"
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
      />
    </>
  );
};
```

<API id="Select"></API>
