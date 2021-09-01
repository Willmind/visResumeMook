import React from 'react';
import './index.less';
import RsmButton from '@common/components/RsmButton';

function Footer() {
  const onMadeResume = () => {
    console.log('跳转前往制作页面');
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
