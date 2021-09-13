/**
 * @desc 项目经历
 * @author tanzhijin
 * @createTime 2021-03-22
 * @lastModify 2021-03-22
 */
import React from 'react';
import './index.less';

function Project() {
  return (
    <div styleName="content">
      <p styleName="label">项目经历 Project</p>
      <ul styleName="list">
        <li styleName="flex">
          <div styleName="left">
            <p>
              <span>2021.08 - 2021.09</span>
            </p>
          </div>
          <div styleName="right">
            <p>
              <span>Egg + React 全栈开发记账本</span>
            </p>
          </div>
          <div styleName="text">
            <ul styleName="item-box">
              <li styleName="item-content">
                <span>Egg + React 全栈开发打造记账本</span>
              </li>
              <li styleName="item-content">
                <span>使用最新的vite 2.0脚手架搭建，全程使用 React Hook形式编写</span>
              </li>
              <li styleName="item-content">
                <span>通过egg.js,基于koa架构开发，连接MySQL数据做到前端后端联调</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Project;
