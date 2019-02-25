# next-weapp-navigation
> Navigation for weapp

## install:
```bash
npm install -S afeiship/next-weapp-navigation --registry=https://registry.npm.taobao.org
```

## apis:
| api     | params              | description                        |
|---------|---------------------|------------------------------------|
| loading | (inValue,inOptions) | 在当前页面显示、隐藏导航条加载动画 |
| title   | (inOptions)         | 动态设置当前页面的标题|g           |
| color   | (inOptions)         | 设置页面导航条颜色                 |

## usage:
```js
import NxWeappNavigation from 'next-weapp-navigation';

// code goes here:
NxWeappNavigation.loading(true)
NxWeappNavigation.loading(false)
NxWeappNavigation.title({ title:'test' })
NxWeappNavigation.color({ frontColor:'test' })
```

## resources:
- https://developers.weixin.qq.com/miniprogram/dev/api/wx.setNavigationBarColor.html
