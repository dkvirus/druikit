## arrUtils

### last

获取数组最后一个元素

### intersection

求交集

### difference

求差集

```js
a1 = ['a', 'b', 'c'];
a2 = ['a', 'd'];
difference(a1, a2); // => ['b', 'c']
```

## dateUtils

### format

格式化日期。

```js
import { dateUtils } from 'druikit';

dateUtils.format(new Date('2023-06-06')).year; // '2023'
dateUtils.format(new Date('2023-06-06')).month; // 月 '06'
dateUtils.format(new Date('2023-06-06')).day; // 日 '06'
dateUtils.format(new Date('2023-06-06')).week; // 星期 '周四'
dateUtils.format(new Date('2023-06-06')).hour; // 时 '08'
dateUtils.format(new Date('2023-06-06')).minute; // 分 '00'
dateUtils.format(new Date('2023-06-06')).second; // 秒 '00'
dateUtils.format(new Date('2023-06-06')).millisecond; // 毫秒 '000'
dateUtils.format(new Date('2023-06-06')).ymd; // 年月日 '2023-06-06'
dateUtils.format(new Date('2023-06-06')).hms; // 时分秒 '08:00:00'
dateUtils.format(new Date('2023-06-06')).ymdhms; // 年月日时分秒 '2023-06-06 08:00:00'
dateUtils.format(new Date('2023-06-06')).ymdhmss; // 年月日时分秒毫秒 '2023-06-06 08:00:00.000'
```

### getDaysInMonth

获取某一个月份总共有多少天。

```js
import { dateUtils } from 'druikit';

dateUtils.getDaysInMonth(new Date('2023-06-01')); // 30
dateUtils.getDaysInMonth(new Date('2023-05-01')); // 31
```

### getRange

根据开始日期和结束日期补全中间日期, 获取日期范围。

```js
import { dateUtils } from 'druikit';

dateUtils.range(new Date('2023-05-30'), new Date('2023-06-01'));
// ['2023-05-30', '2023-05-31', '2023-06-01']
```

## numberUtils

### randint

生成随机整数。

```js
import { numberUtils } from 'druikit';

numberUtils.randint(); // 默认生成 0-100 的随机整数
numberUtils.randint(1, 10); // 生成 1-10 的随机整数
```

### randfloat

生成随机小数。

```js
import { numberUtils } from 'druikit';

numberUtils.randfloat(); // 默认生成 0-100 的随机小数
numberUtils.randfloat(1, 10); // 生成 1-10 的随机小数
numberUtils.randfloat(1, 10, 2); // 默认生成 1-10 的随机小数, 保留2位小数
```

### isNumberOfStringType

是否是数值型字符串。

```js
import { numberUtils } from 'druikit';

numberUtils.isNumberOfStringType('12'); // true
numberUtils.isNumberOfStringType(null); // false
numberUtils.isNumberOfStringType(undefined); // false
numberUtils.isNumberOfStringType('ab'); // false
numberUtils.isNumberOfStringType(false); // false
```
