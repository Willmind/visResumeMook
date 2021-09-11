/**
 * @description 在校经历Form
 */
import React from 'react';
import RsmModal from '@common/components/RsmModal';
import Form from './Form';
import { useSelector } from 'react-redux';
import Wrapper from '../WrapperExperience';
import AdapterExperience, { AdapterExperienceType } from '../WrapperExperience/adapter';
import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';

interface IProps {
  onClose: () => void;
}
function SchoolExperience({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const schoolExperience: TSResume.SchoolExperience[] = useSelector((state: any) => state.resumeModel.schoolExperience);

  const updateDataList = (newDataList: AdapterExperienceType[]) => {
    updateResumeHook<AdapterExperienceType[]>('schoolExperience', newDataList);
  };

  return (
    <RsmModal.Dialog
      title="在校经历"
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
      width={960}
      childStyle={{ padding: 0 }}
    >
      <Wrapper dataList={AdapterExperience.school(schoolExperience)} updateDataList={updateDataList}>
        <Form />
      </Wrapper>
    </RsmModal.Dialog>
  );
}

export default SchoolExperience;
