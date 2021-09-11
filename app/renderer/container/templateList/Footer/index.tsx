/*
 * @Description:
 * @Author: tanzhijin
 * @LastEditors: tanzhijin
 * @Date: 2021-06-25 08:56:12
 * @LastEditTime: 2021-07-10 18:08:48
 */
import React from 'react';
import './index.less';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { ROUTER_KEY } from '@common/constants/router';
import { compilePath } from '@common/utils/router';
import RsmButton from '@common/components/RsmButton';
import ROUTER from '@common/constants/router';

function Footer() {
  const history = useHistory();
  const selectTemplate = useSelector((state: any) => state.templateModel.selectTemplate);

  const onMadeResume = () => {
    history.push(
      compilePath(ROUTER.resume, {
        fromPath: ROUTER_KEY.templateList,
        templateId: selectTemplate?.templateId,
        templateIndex: selectTemplate?.templateIndex,
      })
    );
  };
  return (
    <div styleName="footer">
      <RsmButton size="middle" className="use-btn" onClick={onMadeResume}>
        以此模版前往制作简历
      </RsmButton>
    </div>
  );
}

export default Footer;
