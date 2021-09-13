/**
 * @desc 技能
 * @author tanzhijin
 */
import React from 'react';
import './index.less';

function Skill() {
  return (
    <div styleName="content">
      <p styleName="label">技能证书 Skill</p>
      <ul styleName="skill">
        <li styleName="item">熟悉使用HTML5、CSS3的新特性，掌握DIV+CSS页面布局，熟悉运用Flex等响应式布局实现PC端和移动端的自适应，能 精准还原设计稿</li>
        <li styleName="item">熟悉使用ES6新特性，熟悉原生JavaScript语言并有开发公用组件的经验，熟悉Jquery框架</li>
        <li styleName="item">熟悉Ajax、JSON，了解HTTP协议</li>
        <li styleName="item">熟悉Vue.js框架，熟悉运用Vue全家桶解决方案（Vue+Vue-cli+Vue-router+Vuex+Axios）开发web应用，并有前后端 分离开发经验</li>
        <li styleName="item">熟悉使用Element-UI、Layui和vant等主流前端UI框架</li>
        <li styleName="item">熟悉使用Npm包管理器、Webpack打包工具，对于模块化开发有一定了解</li>
        <li styleName="item">熟悉应用、部署各种版本管理工具（Svn、Git），熟悉产品设计、研发上线以及版本迭代流程和项目管理流程</li>
      </ul>
    </div>
  );
}

export default Skill;
