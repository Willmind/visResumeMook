/**
 * @desc 简单介绍
 * @author tanzhijin
 */
import React from 'react';
import './index.less';

function Synopsis() {
  return (
    <div styleName="content">
      <p styleName="name">谭志锦</p>
      <p styleName="job">web前端工程师</p>
      <p styleName="summary">
        {[
          '熟悉Vue.js框架，熟悉运用Vue全家桶解决方案',
        ].join('，')}
      </p>
    </div>
  );
}

export default Synopsis;
