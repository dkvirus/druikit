# MultiSelect

多选下拉框

## 基础使用

```jsx
import { useState } from 'react';
import { MultiSelect, Flex, Box } from 'druikit';

export default () => {
  const [value, setValue] = useState<string[]>([]);

  const options = [
    { label: 'Sweden', value: 'Sweden' },
    { label: 'Finland', value: 'Finland' },
    { label: 'Norway', value: 'Norway' },
  ];

  return (
    <Flex>
      <MultiSelect
        label="Region"
        placeholder="Region"
        dropdownTitle="Region"
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
      />
      <Box width={20} />
      <Box>{value.join(', ')}</Box>
    </Flex>
  );
};
```

## Select all 和 Clear all

```jsx
import { useState } from 'react';
import { MultiSelect, Flex, Box } from 'druikit';

export default () => {
  const [value, setValue] = useState<string[]>([]);

  const options = [
    { label: 'Sweden', value: 'Sweden' },
    { label: 'Finland', value: 'Finland' },
    { label: 'Norway', value: 'Norway' },
  ];

  return (
    <Flex>
      <MultiSelect
        label="Region"
        placeholder="Region"
        dropdownTitle="Region"
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
      />
      <Box width={10} />
      <MultiSelect
        label="Region"
        placeholder="Region"
        dropdownTitle="Region"
        selectAll={false}
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
      />
      <Box width={10} />
      <MultiSelect
        label="Region"
        placeholder="Region"
        dropdownTitle="Region"
        clearAll={false}
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
      />
      <Box width={10} />
      <MultiSelect
        label="Region"
        placeholder="Region"
        dropdownTitle="Region"
        selectAll={false}
        clearAll={false}
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
      />
    </Flex>
  );
};
```

## minCount, maxCount

```jsx
import { useState } from 'react';
import { MultiSelect } from 'druikit';

export default () => {
  const [value, setValue] = useState<string[]>([]);

  const options = [
    { label: 'Sweden', value: 'Sweden' },
    { label: 'Finland', value: 'Finland' },
    { label: 'Norway', value: 'Norway' },
    { label: 'France', value: 'France' },
    { label: 'Denmark', value: 'Denmark' },
  ];

  return (
    <>
      <MultiSelect
        label="Region"
        placeholder="Region"
        dropdownTitle="Region"
        minCount={2}
        maxCount={4}
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
      />
    </>
  );
};
```

## dropdownMaxHeight

```jsx
import { useState } from 'react';
import { MultiSelect, Flex, Box } from 'druikit';

export default () => {
  const [value, setValue] = useState<string[]>([]);
  const [value2, setValue2] = useState<string[]>([]);

  const options = [
    { label: 'Sweden', value: 'Sweden' },
    { label: 'Finland', value: 'Finland' },
    { label: 'Norway', value: 'Norway' },
    { label: 'France', value: 'France' },
    { label: 'Denmark', value: 'Denmark' },
    { label: 'Sweden1', value: 'Sweden1' },
    { label: 'Finland1', value: 'Finland1' },
    { label: 'Norway1', value: 'Norway1' },
    { label: 'France1', value: 'France1' },
    { label: 'Denmark1', value: 'Denmark1' },
    { label: 'Sweden2', value: 'Sweden2' },
    { label: 'Finland2', value: 'Finland2' },
    { label: 'Norway2', value: 'Norway2' },
    { label: 'France2', value: 'France2' },
    { label: 'Denmark2', value: 'Denmark2' },

  ];

  return (
    <Flex>
      <MultiSelect
        label="Region"
        placeholder="Region"
        dropdownTitle="Region"
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
      />
      <Box width={20} />
      <MultiSelect
        label="Region"
        placeholder="Region"
        dropdownTitle="Region"
        options={options.slice(0,4)}
        value={value2}
        onChange={(value) => setValue2(value)}
      />
    </Flex>
  );
};
```

## 分组

```jsx
import { useState } from 'react';
import { MultiSelect, Flex, Box } from 'druikit';

export default () => {
  const [value, setValue] = useState<string[]>([]);

  const options = [
    { label: 'Countries' },
    { label: 'Sweden', value: 'Sweden' },
    { label: 'Finland', value: 'Finland' },
    { label: 'Norway', value: 'Norway' },
    { label: 'Fruits' },
    { label: 'Apple', value: 'Apple' },
    { label: 'Orange', value: 'Orange' },
  ];

  return (
    <Flex>
      <MultiSelect
        label="Region"
        placeholder="Region"
        clearAll={false}
        selectAll={false}
        options={options}
        value={value}
        onChange={(value) => setValue(value)}
      />
      <Box width={20} />
      <Box>{value.join(', ')}</Box>
    </Flex>
  );
};
```

## 三种大小

```jsx
import { useState } from 'react';
import { MultiSelect, Flex, Box } from 'druikit';

export default () => {
  const [value, setValue] = useState<string[]>([]);

  const options = [
    { label: 'Sweden', value: 'Sweden' },
    { label: 'Finland', value: 'Finland' },
    { label: 'Norway', value: 'Norway' },
  ];

  return (
    <Flex>
      <MultiSelect
        label="Region"
        placeholder="Region"
        dropdownTitle="Region"
        options={options}
        size="small"
      />
      <Box width={10} />
      <MultiSelect
        label="Region"
        placeholder="Region"
        dropdownTitle="Region"
        options={options}
      />
      <Box width={10} />
      <MultiSelect
        label="Region"
        placeholder="Region"
        dropdownTitle="Region"
        options={options}
        size="large"
      />
    </Flex>
  );
};
```

<API id="MultiSelect"></API>
