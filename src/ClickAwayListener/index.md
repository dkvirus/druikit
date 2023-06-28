# ClickAwayListener

点击元素外部触发事件

## 基础使用

```jsx
import { useState } from 'react';
import { ClickAwayListener, Box, Flex } from 'druikit';

export default () => {
  const [content, setContent] = useState([]);

  return (
    <Flex>
      <ClickAwayListener
        onClickAway={() => {
          const newContent = content.map((item) => item);
          newContent.unshift(new Date().getTime());
          setContent([...newContent]);
        }}
      >
        <Box
          width={200}
          height={200}
          background="red"
          color="white"
          lineHeight={200}
          textAlign="center"
        >
          点击外部会触发事件
        </Box>
      </ClickAwayListener>
      <Box width={20} />
      <Box height={200} style={{ overflow: 'auto' }}>
        {content.map((c) => (
          <Box key={c}>{c}</Box>
        ))}
      </Box>
    </Flex>
  );
};
```

<API id="ClickAwayListener"></API>
