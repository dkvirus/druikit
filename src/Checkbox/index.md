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

## boxPosition

框的位置, 值为 right 时框在右边, 值为 left 时框在左边。

```jsx
import { useState } from 'react';
import { Checkbox, Box } from 'druikit';

export default () => {
  const [checkboxValue, setCheckboxValue] = useState(true);

  return (
    <Box width={300} padding={20} border="1px solid #999">
      <Checkbox
        value={checkboxValue}
        onChange={(value) => setCheckboxValue(value)}
      >
        boxPosition: left
      </Checkbox>
      <Box height={10} />
      <Checkbox
        value={checkboxValue}
        onChange={(value) => setCheckboxValue(value)}
        boxPosition="right"
      >
        boxPosition: right
      </Checkbox>
    </Box>
  );
};
```

## boxVisible

框是否显示

```jsx
import { useState } from 'react';
import { Checkbox, Box } from 'druikit';

export default () => {
  const [checkboxValue, setCheckboxValue] = useState(true);

  return (
    <Box width={300} padding={20} border="1px solid #999">
      <Checkbox
        value={checkboxValue}
        onChange={(value) => setCheckboxValue(value)}
      >
        boxVisible: true (default)
      </Checkbox>
      <Box height={10} />
      <Checkbox
        value={checkboxValue}
        onChange={(value) => setCheckboxValue(value)}
        boxVisible={false}
      >
        boxVisible: false
      </Checkbox>
    </Box>
  );
};
```

## gap

框与文字的距离。

```jsx
import { useState } from 'react';
import { Checkbox, Box } from 'druikit';

export default () => {
  const [checkboxValue, setCheckboxValue] = useState(true);

  return (
    <Box width={300} padding={20} border="1px solid #999">
      <Checkbox
        value={checkboxValue}
        onChange={(value) => setCheckboxValue(value)}
      >
        gap 为默认值: 10
      </Checkbox>
      <Box height={10} />
      <Checkbox
        value={checkboxValue}
        onChange={(value) => setCheckboxValue(value)}
        gap={20}
      >
        gap=20
      </Checkbox>
      <Box height={10} />
      <Checkbox
        value={checkboxValue}
        onChange={(value) => setCheckboxValue(value)}
        gap={30}
      >
        gap=30
      </Checkbox>
    </Box>
  );
};
```

## disabled

```jsx
import { useState } from 'react';
import { Checkbox, Box } from 'druikit';

export default () => {
  const [checkboxValue, setCheckboxValue] = useState(true);

  return (
    <Box>
      <Checkbox
        value={checkboxValue}
        onChange={(value) => setCheckboxValue(value)}
      >
        可用状态: disabled = false
      </Checkbox>
      <Box height={10} />
      <Checkbox disabled>禁用状态: disabled = true</Checkbox>
      <Box height={10} />
      <Checkbox value disabled>
        禁用状态: disabled = true
      </Checkbox>
    </Box>
  );
};
```

## 文字样式

```jsx
import { useState } from 'react';
import { Checkbox, Box } from 'druikit';

export default () => {
  const [checkboxValue1, setCheckboxValue1] = useState(true);
  const [checkboxValue2, setCheckboxValue2] = useState(true);
  const [checkboxValue3, setCheckboxValue3] = useState(true);

  return (
    <>
      <Checkbox
        value={checkboxValue1}
        onChange={(value) => setCheckboxValue1(value)}
        labelColor="green"
        labelSize={12}
      >
        苹果
      </Checkbox>
      <Box height={10} />
      <Checkbox
        value={checkboxValue2}
        onChange={(value) => setCheckboxValue2(value)}
        labelColor="blue"
        labelSize={18}
      >
        苹果
      </Checkbox>
      <Box height={10} />
      <Checkbox
        value={checkboxValue3}
        onChange={(value) => setCheckboxValue3(value)}
        labelColor="red"
        labelSize={24}
      >
        苹果
      </Checkbox>
    </>
  );
};
```

## 框的样式

```jsx
import { useState } from 'react';
import { Checkbox, Box } from 'druikit';

export default () => {
  const [checkboxValue1, setCheckboxValue1] = useState(true);
  const [checkboxValue2, setCheckboxValue2] = useState(true);

  return (
    <>
      <Checkbox
        value={checkboxValue1}
        onChange={(value) => setCheckboxValue1(value)}
        boxBgColor="#999"
        boxColor="green"
        boxSize={12}
      >
        苹果
      </Checkbox>
      <Box height={10} />
      <Checkbox
        value={checkboxValue2}
        onChange={(value) => setCheckboxValue2(value)}
        boxBgColor="red"
        boxColor="blue"
        boxSize={18}
      >
        苹果
      </Checkbox>
    </>
  );
};
```

<API id="Checkbox"></API>
