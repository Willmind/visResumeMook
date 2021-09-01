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
import MyDialog from './MyDialog';
import MyConfirm from './MyConfirm';

export const Dialog = MyDialog;
export const Confirm = MyConfirm;

export default {
  Dialog: MyDialog,
  Confirm: MyConfirm,
};
