# Image

图片

- 图片加载过程有波纹动画效果
- 图片加载失败时可以设置缺省图片 fallback
- 图片默认懒加载

## 基础使用

```jsx
import { Image } from 'druikit';

export default () => {
  return (
    <>
      <Image
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        width={200}
        height={200}
      />
    </>
  );
};
```

## fallback

加载失败时容错地址。

```jsx
import { Image, Box } from 'druikit';

export default () => {
  return (
    <>
      <Image
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.....png"
        fallback="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
        width={200}
        height={200}
      />
      <Box width={30} display="inline-block" />
      <Image
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.....png"
        width={200}
        height={200}
      />
    </>
  );
};
```

## lazy

页面出现图片时才开始加载图片，三张图片，在 Network 中可以看到默认只会加载页面出现的两张图片，往下拉滚动条才会加载第三张图片

如果要关闭懒加载，设置 lazy={false} 即可。

```jsx
import { Image, Box } from 'druikit';

export default () => {
  return (
    <Box height={400} overflow="auto">
      <Box>
        <Image
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          height={250}
        />
      </Box>
      <Box>
        <Image
          src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
          height={250}
        />
      </Box>
      <Box>
        <Image
          src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
          height={250}
        />
      </Box>
    </Box>
  );
};
```

<API id="Image"></API>
