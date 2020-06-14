# taro-plugin-check-env

taro插件，用于在编译前的环境变量检查。

## 用法

```js
// config/index.js

const config = {
  plugins: [
    [
      // 环境变量检查插件
      'taro-plugin-check-env',
      {
        // 配置需要检查的环境变量
        ENV_LIST: {
          CUSTOMIZE_ENV: '自定义环境变量',
          API_HOST: '接口API域名',
          APPID: '小程序APPID',
          API_MAP_QQ: '腾讯地图API/WebService域名',
          KEY_MAP_QQ: '腾讯地图Key',
        },
      },
    ],
  ]
}
```
