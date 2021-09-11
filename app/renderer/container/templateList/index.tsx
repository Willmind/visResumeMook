/*
 * @Description:
 * @Author: tanzhijin
 * @LastEditors: tanzhijin
 * @Date: 2021-06-25 08:56:12
 * @LastEditTime: 2021-06-25 10:36:25
 */
import React from 'react';
import './index.less';
import Header from './Header';
import Navigation from './Navigation';
import StaticResume from './StaticResume';
import RsmRectSize from '@common/components/RsmRectSize';

function TemplateList() {
  return (
    <div styleName="container">
      <Header />
      <div styleName="content">
        <RsmRectSize>
          <RsmRectSize.Left>
            <Navigation />
          </RsmRectSize.Left>
          <RsmRectSize.Right>
            <StaticResume />
          </RsmRectSize.Right>
        </RsmRectSize>
      </div>
    </div>
  );
}
export default TemplateList;
