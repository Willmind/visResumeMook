// app/renderer/container/resume/ResumeAction/index.tsx
import React from 'react';
import './index.less';
import { useHistory } from 'react-router';
import ROUTER from '@common/constants/router';
import { toPrintPdf } from '@common/utils/htmlToPdf';
import { useSelector } from 'react-redux';


// 👇 这里调用我们第八章封装好的通用组件即可
import MyButton from "@common/components/MyButton";

function ResumeAction() {
    const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
    const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);

    const history = useHistory();
    // 返回首页
    const onBack = () => history.push(ROUTER.root);

    // 导出PDF，格式为：姓名+学校+岗位
    const onExport = () => {
        toPrintPdf(`${base?.username}+${base?.school}+${work?.job}`);
    };

    return (
        <div styleName="actions">
            <div styleName="back" onClick={onBack}>返回</div>
            <MyButton size="middle" className="export-btn" onClick={onExport}>导出PDF</MyButton>
        </div>
    );
}
export default ResumeAction;