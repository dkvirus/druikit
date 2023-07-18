# ModuleTitle

页面标题。

## 基础使用

```jsx
import { ModuleTitle, Divider } from 'druikit';

export default () => {
  return (
    <>
      <ModuleTitle title="Assortment split" />
      <Divider fullLength gap={50} />
      <ModuleTitle category="Pricing" title="Assortment split" />
      <Divider fullLength gap={50} />
      <ModuleTitle
        category="PRICING"
        title="Assortment split"
        description="Most popular colors per vendor"
      />
      <Divider fullLength gap={50} />
      <ModuleTitle
        category="PRICING"
        title="Assortment split"
        description="Most popular colors per vendor"
        showInfoIcon
      />
    </>
  );
};
```

<API id="ModuleTitle"></API>
