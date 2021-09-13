## Electron + React Hooks + TS 实现简历平台

### 开发

> 由于网络问题，往往安装 Electron 会很慢，此时可以考虑换个淘宝源

```js
// 1.安装依赖
cnpm run install
// 2. 运行
npm run start:render //首先运行渲染线程 (react)，当出现Compiled successfully的时候执行下一步
npm run start:main //然后运行主线程 (Electron)
运行成功以后系统会自动弹出Electron应用程序
```

### 项目结构树
```js
├── app
│   ├── main  // 主进程模块
│   │   ├── customMenu.ts  //顶部编辑栏设置
│   │   └── electron.ts  //主进程脚本，该脚本就是应用程序的入口
│   └── renderer  // 渲染进程模块
│       ├── app.tsx  //入口文件
│       ├── common //公共
│       │   ├── components  //公用组件
│       │   │   ├── RsmButton  //按钮
│       │   │   ├── RsmEmpty   //空状态
│       │   │   ├── RsmInput   //输入框
│       │   │   ├── RsmModal   //Modal弹框
│       │   │   ├── RsmRectSize  
│       │   │   ├── RsmScrollBox  //固定区域内的滚动组件
│       │   │   ├── RsmTheme  //主题皮肤
│       │   │   └── RsmUpload  //上传
│       │   ├── constants   //默认约定字段文件夹
│       │   ├── hook
│       │   │   └── useClickAway.ts //简历选择工具-选中模块监听
│       │   ├── messager
│       │   │   └── index.ts
│       │   ├── types  //类型约束
│       │   └── utils  //常用工具处理函数
│       ├── container  //存放着所有模块的代码文件
│       │   ├── resume  //简历页面
│       │   │   ├── ResumeAction //制作简历-操作区
│       │   │   ├── ResumeContent  //制作简历-内容区
│       │   │   ├── ResumeToolbar  //制作简历-工具栏
│       │   ├── root  //首页
│       │   ├── templateList  //模版列表
│       │   │   ├── Footer  //模版列表-尾部
│       │   │   ├── Header  //模版列表-头部
│       │   │   ├── Navigation  //模版列表-侧边栏
│       │   │   ├── StaticResume  //模版列表-静态模版
│       │   └── templates  //模版事例
│       ├── global.d.ts
│       ├── hooks //自定义钩子函数
│       ├── index.html  //入口html文件
│       ├── router.tsx  //路由入口文件
│       ├── store  //存放着所有 redux model 相关的代码文件
│       └── windowPages  
│           └── setting
├── appConfig   //配置表
│   ├── global.config.json  //全局配置表
│   └── theme.config.json  //主题配置表
├── assets
│   ├── avatar.jpg  //简历事例头像
│   ├── icon  //图标
│   └── template  //模版封面图片文件夹
├── babel.config.js   //babel(JS 编译器)，能将 ES6 代码转成 ES5,配置一下我们常用的插件 plugins 和 预设值 presets
├── postcss.config.js  //CSS Modules配置
├── tsconfig.json  //TypeScript配置
└── webpack  //webpack相关配置
    ├── webpack.base.js  //基础公共配置
    ├── webpack.main.dev.js  //主进程开发环境配置
    └── webpack.render.dev.js  //渲染进程开发环境配置
```



### 项目功能
- 简历信息的录入
- 数据信息的展示
- 简历导出 PDF
- 持久化数据存储
- 简历模版管理
- 主题换肤模块

### 项目知识点

- React全家桶:react-router、react-router-dom、redux
- React Hooks  
- TypeScript
- Babel
- Webpack
- Electron
- 自定义基础组件（按钮、输入框、上传框等）
- 组件化开发模式

#### React Hooks
React 早期的写法以 Class 类组件为主，附带一些纯用于展示的函数组件，但是函数组件是不能控制自身的状态的. 引入全新的 Hooks 写法，如 useEffect、useState、useRef、useCallback、useMemo、useReducer 等等，通过这些钩子函数来管理函数组件的各自状态

#### Electron
使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序  
它建立在 Chromium 和 Node 之上，为我们提供了很多封装好的模块，跟系统原生 API 互通。  
Electron 有三大核心  
- Chromium 用于显示网页内容。  
- Node.js 用于本地文件系统和操作系统。  
- Native APIs 用于使用经常需要的本机函数。

#### Electron 与 React 的结合

#### Redux--实时性数据存储

#### 本地文件--持久性数据存储

#### Babel
它是 JS 编译器，能将 ES6 代码转成 ES5，让我们使用最近的语言特性，而不需要担心兼容性的问题

#### Webpack
webpack 是一个现代 JavaScript 应用程序的静态模块打包器  
配合Loader模块打包方案和Plugins 用于扩展 Webpack 的功能，使得 webpack 变得极其灵活

#### ESLint + Prettier
使用 Prettier 进行代码格式化，相比于 ESLint 中的代码格式规则，它更加专业。同时我们采用 ESLint 来统一代码风格，提高我们的代码质量

#### Less、styleName
采用 less 进行样式相关的编写,并在Webpack 中配置 CSS Module，最后使用 react-css-modules 实现 styleName 的形式

#### TypeScript















