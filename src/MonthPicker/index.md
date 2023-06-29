# MonthPicker

## 基础使用

```jsx
import React, { useState } from 'react';
import { MonthPicker, Flex, Box } from 'druikit';

export default () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

  return (
    <Flex justifyContent="space-between" alignItems="flex-end">
      <MonthPicker
        value={{ year, month }}
        onChange={(value) => {
          setYear(value.year);
          setMonth(value.month);
        }}
      />
      <MonthPicker
        label="Month"
        placement="bottomRight"
        value={{ year, month }}
        onChange={(value) => {
          setYear(value.year);
          setMonth(value.month);
        }}
      />
    </Flex>
  );
};
```

<API id="MonthPicker"></API>
