/**
 * @description 所有弹窗组件集合
 * 方式一：
 * import RsmModal from '@components/RsmModal';
 * <RsmModal.Confirm />
 *
 * 方式二：
 * import { Confirm } from '@components/RsmModal';
 * <Confirm />
 */
import RsmDialog from './RsmDialog';
import RsmConfirm from './RsmConfirm';

export const Dialog = RsmDialog;
export const Confirm = RsmConfirm;

export default {
  Dialog: RsmDialog,
  Confirm: RsmConfirm,
};
