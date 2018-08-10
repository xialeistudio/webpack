# element-boilerplate

> 开箱即用的后台框架，基于饿了么UI

![Demo](https://github.com/xialeistudio/element-boilerplate/blob/master/screen.png)

## 开发步骤

```bash
# 安装依赖
yarn

# 开始开发
yarn start
```
## 已整合资源

1. element-ui
2. axios(已设置响应拦截器，成功时将直接返回response.data)


## 改动

1. 更改主题配色
2. 取消input和button圆角(可以在App.css修改)
3. 修改chrome滚动条样式

## 兼容性

使用了以下css特性，请确保浏览器兼容（推荐chrome）
1. calc
2. vh/vw



## SRC目录说明

```text
├── App.scss              App样式
├── App.vue               App入口组件
├── assets                资源目录
├── components            通用组件
│   └── Breadcrumb.vue    面包屑（自动适配VueRouter）
├── main.js               主入口
├── router                路由定义
│   └── index.js
└── routes                业务页面
    ├── Dashboard.vue     后台布局
    ├── Home.vue          后台首页
    └── guest             游客目录
        └── Login.vue     游客登录
```
