# MonthPanel

## 基础使用

```jsx
import React, { useState } from 'react';
import { MonthPanel, Flex, Box } from 'druikit';

export default () => {
  const [year, setYear] = useState();
  const [month, setMonth] = useState();

  return (
    <Flex>
      <MonthPanel
        value={{ year, month }}
        onChange={(value) => {
          setYear(value.year);
          setMonth(value.month);
        }}
      />
      <Box width={50} />
      <Box>
        <Box>Year: {year}</Box>
        <Box>Month: {month}</Box>
      </Box>
    </Flex>
  );
};
```

## 设置默认值

```jsx
import React, { useState } from 'react';
import { MonthPanel, Flex, Box } from 'druikit';

export default () => {
  const [year, setYear] = useState(2022);
  const [month, setMonth] = useState(1);

  return (
    <Flex>
      <MonthPanel
        value={{ year, month }}
        onChange={(value) => {
          setYear(value.year);
          setMonth(value.month);
        }}
      />
      <Box width={50} />
      <Box>
        <Box>Year: {year}</Box>
        <Box>Month: {month}</Box>
      </Box>
    </Flex>
  );
};
```

<API id="MonthPanel"></API>
