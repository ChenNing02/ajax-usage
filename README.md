# AJAX

使用node.js构建一个简单的本地服务器，用于学习 AJAX 发送请求及响应的过程

## 运行

首先要安装一个 node 插件，如下：

```sh
yarn global add node-dev
# 或
npm i -g node-dev
```

> 作用：node-dev 可以自动重启 node 服务器，这样每次修改 node 文件都不用手动重启了
>
> npm地址:https://www.npmjs.com/package/node-dev

运行服务器

```sh
node-dev server.js 8888
```

在浏览器打开

```http
http://localhost:8888/index.html
```



