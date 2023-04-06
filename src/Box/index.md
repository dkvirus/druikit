# Box

This is an box component.

```jsx
import { Box } from 'druikit';

export default () => <Box width={100} height={50} backgroundColor="red" />;
```

## 文本

```jsx
import { Box } from 'druikit';

export default () => {
  return (
    <Box>
      <Box color="red">文本颜色: 红色</Box>
      <Box color="blue">文本颜色: 蓝色</Box>

      <Box height={50} />

      <Box width={300} border="1px solid #333" textAlign="left">
        文本对齐方式: 左对齐
      </Box>
      <Box width={300} border="1px solid #333" textAlign="center">
        文本对齐方式: 居中
      </Box>
      <Box width={300} border="1px solid #333" textAlign="right">
        文本对齐方式: 右对齐
      </Box>

      <Box height={50} />

      <Box textDecoration="overline">文本装饰: 上划线</Box>
      <Box textDecoration="line-through">文本装饰: 中划线</Box>
      <Box textDecoration="underline">文本装饰: 下划线</Box>

      <Box height={50} />

      <Box textTransform="uppercase">文本转换: 全大写 hello world</Box>
      <Box textTransform="lowercase">文本转换: 全小写 hello world</Box>
      <Box textTransform="capitalize">文本转换: 首字母大写 hello world</Box>

      <Box height={50} />

      <Box textIndent={40}>文本缩进: 40</Box>
      <Box textIndent={80}>文本缩进: 80</Box>
      <Box textIndent={120}>文本缩进: 120</Box>
    </Box>
  );
};
```

## 字体

```jsx
import { Box } from 'druikit';

export default () => {
  return (
    <Box>
      <Box fontFamily="隶书">字体系列: 隶书</Box>
      <Box fontFamily="黑体">字体系列: 黑体</Box>

      <Box height={50} />

      <Box fontStyle="normal">文本样式: normal</Box>
      <Box fontStyle="italic">文本样式: italic</Box>
      <Box fontStyle="oblique">文本对齐方式: oblique</Box>

      <Box height={50} />

      <Box fontSize={14}>字体大小: 14px</Box>
      <Box fontSize={18}>字体大小: 18px</Box>
      <Box fontSize={22}>字体大小: 22px</Box>

      <Box height={50} />

      <Box fontWeight={300}>字体粗细: 300</Box>
      <Box fontWeight={600}>字体粗细: 600</Box>
      <Box fontWeight={900}>字体粗细: 900</Box>
    </Box>
  );
};
```

## 事件

```jsx
import { Box } from 'druikit';

export default () => {
  return (
    <>
      <Box
        width={100}
        height={50}
        border="1px solid #333"
        borderRadius={10}
        onClick={() => alert('click ....')}
      >
        点击
      </Box>
    </>
  );
};
```

## 文字省略号

```jsx
import { Box } from 'druikit';

export default () => {
  return (
    <Box width={100} height={80} ellipsis border="1px solid #333">
      hello world hello world hello world hello world
    </Box>
  );
};
```

## ref 用法

```jsx
import { useRef } from 'react';
import { Box } from 'druikit';

export default () => {
  const boxRef = useRef();
  return (
    <>
      <Box ref={boxRef} width={100} height={80} backgroundColor="red"></Box>
      <button
        onClick={() => {
          const displayValue = boxRef.current.style.display;
          boxRef.current.style.display =
            displayValue === 'none' ? 'block' : 'none';
        }}
      >
        点击
      </button>
    </>
  );
};
```

<API id="Box"></API>
