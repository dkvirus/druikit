# Checkbox

复选框

## 基础使用

```jsx
import { useState } from 'react';
import { Checkbox } from 'druikit';

export default () => {
  const [checkboxValue, setCheckboxValue] = useState(true);

  return (
    <>
      <Checkbox
        value={checkboxValue}
        onChange={(value) => setCheckboxValue(value)}
      >
        苹果
      </Checkbox>
    </>
  );
};
```

<API id="Checkbox"></API>
