const resumeModel: TSRcReduxModel.Props<TSResume.IntactResume> = {
  namespace: 'resumeModel',
  openSeamlessImmutable: true,
  state: {
    base: {
      avatar: '',
      username: '谭志锦',
      area: '广东·广州',
      school: '江西理工大学',
      major: '电子信息工程',
      degree: '本科',
      hometown: '广东',
      onSchoolTime: {
        beginTime: '2016.09',
        endTime: '2020.06',
      },
    },
    contact: {
      phone: '13126476635',
      email: 'tanzhijingege@126.com',
      github: 'https://github.com/Willmind',
    },
    work: {
      job: '前端工程师',
      city: '广州',
      cityList: ['广州'],
    },
    hobby: '健身、模型',
    skill:
      '熟悉 Vue.js，了解数据双向绑定原理、阅读过 NextTick 源码｜熟悉 React，了解并使用 Hooks 特性，阅读过 redux 源码，开发 rc-redux-model 中间件｜阅读过 Antd 部分优秀组件源码，并参考借鉴，开发组内 UI 组件库｜了解 Vscode，开发组内项目辅助工具 vscode-beehive-extension 插件｜了解 Webpack 编译原理，了解 babel 转码原理，编写过 babel 插件｜了解 Electron，了解 Node.js 以及 Git 团队协作开发工具｜了解设计模式，对于特定场景，能采用合适的设计模式进行解决｜了解 MYSQL，了解数据库优化常用方法｜了解基于微信公众号应用开发，采用 Taro 开发微信小程序，具备良好的网络基础知识',
    skillList: [
      '熟悉使用HTML5、CSS3的新特性，掌握DIV+CSS页面布局，熟悉运用Flex等响应式布局实现PC端和移动端的自适应，能 精准还原设计稿',
      '熟悉使用ES6新特性，熟悉原生JavaScript语言并有开发公用组件的经验，熟悉Jquery框架',
      '熟悉Ajax、JSON，了解HTTP协议',
      '熟悉Vue.js框架，熟悉运用Vue全家桶解决方案（Vue+Vue-cli+Vue-router+Vuex+Axios）开发web应用，并有前后端 分离开发经验',
      '熟悉使用Element-UI、Layui和vant等主流前端UI框架',
      '熟悉使用Npm包管理器、Webpack打包工具，对于模块化开发有一定了解',
      '熟悉应用、部署各种版本管理工具（Svn、Git），熟悉产品设计、研发上线以及版本迭代流程和项目管理流程',
    ],
    evaluation: '',
    evaluationList: [],
    certificate: '',
    certificateList: [],
    schoolExperience: [
      {
        beginTime: '2016.09',
        endTime: '2017.09',
        post: '文艺部会长',
        department: '校团委学生会',
        content:
          '计划、组织、协调各年级学生组织的文艺和文化娱乐活动｜承办好学生会部的学生文艺晚会。有效地与社团部开展合作项目',
        parseContent: [
          '计划、组织、协调各年级学生组织的文艺和文化娱乐活动',
          '承办好学生会部的学生文艺晚会。有效地与社团部开展合作项目',
        ],
        date: 1621145137865,
      },
    ],
    workExperience: [
      {
        beginTime: '2019.09',
        endTime: '2020.04',
        post: '前端工程师',
        department: '广东南方数码科技有限公司',
        content:
          '智慧住建开发部担任web前端工程师，负责系统前端页面的架构和各页面的样式、交互逻辑代码的开发，并与后台人员进行接口联调，完成页面的优 化，最后配合实施人员完成测试并上线',
        parseContent: [],
        date: 1621145137865,
      },
    ],
    projectExperience: [
      {
        beginTime: '2021.03',
        endTime: '2021.05',
        projectName: 'visResumeMook 可视化简历平台',
        post: '前端工程师',
        content:
          'Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版｜通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档｜通过 indexDB 方式实现历史简历缓存，通过可视化拖拽形式，自定义组件模版',
        parseContent: [
          'Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版',
          '通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档',
          '通过 indexDB 方式实现历史简历缓存，通过可视化拖拽形式，自定义组件模版',
        ],
        date: 1621145137865,
      },
    ],
  },
};

export default resumeModel;
