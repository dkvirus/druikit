# Select

选择器

## 基础使用

```jsx
import { useState } from 'react';
import { Select } from 'druikit';

export default () => {
  const [value, setValue] = useState('Sweden');

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

## onClick

```jsx
import { useState } from 'react';
import { Select, Box } from 'druikit';

export default () => {
  const [value, setValue] = useState('Sweden');
  const [clickValue, setClickValue] = useState([]);

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
        onClick={(value) => {
          const newClickValue = [...clickValue];
          newClickValue.push(value);
          setClickValue([...newClickValue]);
        }}
      />
      <Box>{clickValue.join('  ')}</Box>
    </>
  );
};
```

## selectorWidth

设置下拉框宽度

```jsx
import { useState } from 'react';
import { Select, Box } from 'druikit';

export default () => {
  const [value, setValue] = useState('Sweden');

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
      <Box height={10} />
      <Select
        placeholder="Region"
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
        selectorWidth={200}
      />
      <Box height={10} />
      <Select
        placeholder="Region"
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
        selectorWidth={300}
      />
    </>
  );
};
```

## dropdownHeight

设置下拉框高度。

```jsx
import { useState } from 'react';
import { Select, Flex, Box } from 'druikit';

export default () => {
  const [value, setValue] = useState('Sweden');

  const options = [
    { label: 'Sweden', value: 'Sweden' },
    { label: 'Japan', value: 'Japan' },
    { label: 'Sweden2', value: 'Sweden2' },
    { label: 'Japan2', value: 'Japan2' },
    { label: 'Sweden3', value: 'Sweden3' },
    { label: 'Japan3', value: 'Japan3' },
    { label: 'Sweden4', value: 'Sweden4' },
    { label: 'Japan4', value: 'Japan4' },
    { label: 'Sweden5', value: 'Sweden5' },
    { label: 'Japan5', value: 'Japan5' },
    { label: 'Sweden6', value: 'Sweden6' },
    { label: 'Japan6', value: 'Japan6' },
    { label: 'Sweden7', value: 'Sweden7' },
    { label: 'Japan7', value: 'Japan7' },
    { label: 'Sweden8', value: 'Sweden8' },
    { label: 'Japan8', value: 'Japan8' },
    { label: 'Sweden9', value: 'Sweden9' },
    { label: 'Japan9', value: 'Japan9' },
  ];

  return (
    <Flex>
      <Select
        placeholder="Region"
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
        dropdownHeight={100}
      />
      <Box width={10} />
      <Select
        placeholder="Region"
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
        dropdownHeight={200}
      />
      <Box width={10} />
      <Select
        placeholder="Region"
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
        dropdownHeight={300}
      />
    </Flex>
  );
};
```

## showSearch

显示搜索框

```jsx
import { useState } from 'react';
import { Select, Box, Flex } from 'druikit';

export default () => {
  const [value, setValue] = useState('');

  const options = [
    { label: 'Sweden', value: 'Sweden' },
    { label: 'Japan', value: 'Japan' },
    { label: 'USA', value: 'USA' },
    { label: 'France', value: 'France' },
  ];

  return (
    <Flex alignItems="flex-end">
      <Select
        placeholder="Region"
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
        showSearch
      />
    </Flex>
  );
};
```

## label

```jsx
import { useState } from 'react';
import { Select, Box, Flex } from 'druikit';

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
import { Select, Box, Flex } from 'druikit';

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
import { Select, Box, Flex } from 'druikit';

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
import { Select, Box, Flex } from 'druikit';

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
import { Select, Box, Flex } from 'druikit';

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
import { Select } from 'druikit';

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

## 分组

```jsx
import { useState } from 'react';
import { Select, Box, Flex } from 'druikit';

export default () => {
  const [value, setValue] = useState('');

  const options = [
    { label: 'Country' },
    { label: 'Sweden', value: 'Sweden' },
    { label: 'Japan', value: 'Japan', disabled: true },
  ];

  return (
    <Flex alignItems="flex-end">
      <Select
        label="Region"
        placeholder="Region"
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
      />
    </Flex>
  );
};
```

## 三种大小

```jsx
import { useState } from 'react';
import { Select, Box } from 'druikit';

export default () => {
  const [value, setValue] = useState('Sweden');

  const options = [
    { label: 'Sweden', value: 'Sweden' },
    { label: 'Japan', value: 'Japan' },
  ];

  return (
    <>
      <Select placeholder="Region" options={options} size="small" />
      <Box height={10} />
      <Select placeholder="Region" options={options} />
      <Box height={10} />
      <Select placeholder="Region" options={options} size="large" />
    </>
  );
};
```

<API id="Select"></API>
