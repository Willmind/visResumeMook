// app/renderer/container/resume/ResumeAction/index.tsx
import React from 'react';
import './index.less';
import { useHistory } from 'react-router';
import ROUTER from '@common/constants/router';

// 👇 这里调用我们第八章封装好的通用组件即可
import MyButton from "@common/components/MyButton";

function ResumeAction() {
    const history = useHistory();
    // 返回首页
    const onBack = () => history.push(ROUTER.root);
    // 导出PDF
    const onExport = () => {};

    return (
        <div styleName="actions">
            <div styleName="back" onClick={onBack}>返回</div>
            <MyButton size="middle" className="export-btn" onClick={onExport}>导出PDF</MyButton>
        </div>
    );
}
export default ResumeAction;