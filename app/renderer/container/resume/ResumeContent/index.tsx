/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-25 08:56:12
 * @LastEditTime: 2021-07-10 19:30:31
 */
import React, { useEffect, useState } from 'react';
import * as UseTemplateList from './UseTemplate';
import { useParams } from 'react-router';
import MyScrollBox from '@common/components/MyScrollBox';
import Messager, { MESSAGE_EVENT_NAME_MAPS } from '@common/messager';
import { RESUME_TOOLBAR_MAPS } from '@common/constants/resume';
import CertificateForm from './UseForm/Certificate';
import ContactForm from './UseForm/Contact';
import EducationForm from './UseForm/Education';
import EvaluationForm from './UseForm/Evaluation';
import PersonalForm from './UseForm/Personal';
import SkillForm from './UseForm/Skill';
import WorkForm from './UseForm/Work';
import ProjectExperience from './UseForm/ProjectExperience';
import SchoolExperience from './UseForm/SchoolExperience';
import WorkExperience from './UseForm/WorkExperience';

function ResumeContent() {
  const HEADER_ACTION_HEIGHT = 92;
  const [height, setHeight] = useState(0);
  const routerParams = useParams<{ fromPath: string; templateId: string; templateIndex: string }>();
  const [formName, setFormName] = useState('');
  const [showFormModal, setShowFormModal] = useState(false);

  useEffect(() => {
    if (document.body && document.body.clientHeight > 0) setHeight(document.body.clientHeight);
  }, [document.body]);

  useEffect(() => {
    document.addEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    return () => {
      document.removeEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    };
  }, []);
  /**
   * @description 接收订阅事件的传参
   */
  const onReceive = (e: any) => {
    Messager.receive(e, (data: any) => {
      setShowFormModal(true);
      setFormName(data?.form_name);
    });
  };

  const onClose = () => {
    setShowFormModal(false);
    setFormName('');
  };

  return (
    <MyScrollBox maxHeight={height - HEADER_ACTION_HEIGHT}>
      {routerParams?.templateId && Number(routerParams?.templateIndex) === 0 && <UseTemplateList.TemplateOne />}
      {showFormModal && (
        <>
          {formName === RESUME_TOOLBAR_MAPS.certificate && <CertificateForm onClose={onClose} />}
          {formName === RESUME_TOOLBAR_MAPS.contact && <ContactForm onClose={onClose} />}
          {formName === RESUME_TOOLBAR_MAPS.education && <EducationForm onClose={onClose} />}
          {formName === RESUME_TOOLBAR_MAPS.evaluation && <EvaluationForm onClose={onClose} />}
          {formName === RESUME_TOOLBAR_MAPS.personal && <PersonalForm onClose={onClose} />}
          {formName === RESUME_TOOLBAR_MAPS.skill && <SkillForm onClose={onClose} />}
          {formName === RESUME_TOOLBAR_MAPS.workPrefer && <WorkForm onClose={onClose} />}
          {formName === RESUME_TOOLBAR_MAPS.projectExperience && <ProjectExperience onClose={onClose} />}
          {formName === RESUME_TOOLBAR_MAPS.schoolExperience && <SchoolExperience onClose={onClose} />}
          {formName === RESUME_TOOLBAR_MAPS.workExperience && <WorkExperience onClose={onClose} />}
        </>
      )}
    </MyScrollBox>
  );
}
export default ResumeContent;
