/**
 * @description 专门服务于经验弹窗左侧
 */
import React from 'react';
import './index.less';
import RsmButton from '@common/components/RsmButton';
import RsmScrollBox from '@common/components/RsmScrollBox';
import List, { IListProps } from './List';

interface IProps extends IListProps {
  onAdd: () => void;
}

function Left({ index, experienceList = [], onDelete, onAdd, onChange }: IProps) {
  return (
    <div styleName="layout-left">
      {experienceList.length > 0 && (
        <>
          <RsmScrollBox maxHeight={420}>
            <List index={index} experienceList={experienceList} onChange={onChange} onDelete={onDelete} />
          </RsmScrollBox>
          <div styleName="action">
            <RsmButton width={112} size="middle" onClick={onAdd}>
              添加条目
            </RsmButton>
          </div>
        </>
      )}
      {experienceList.length === 0 && (
        <div styleName="empty">
          <div styleName="empty-tips">还没有内容，快添加一下吧～</div>
          <div styleName="empty-action">
            <RsmButton width={112} size="middle" onClick={onAdd}>
              添加条目
            </RsmButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default Left;
