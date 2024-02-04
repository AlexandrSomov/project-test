import { useDialogStore } from '../store';

export const useDialog = () => {
  const open = useDialogStore(state => state.open);
  const close = useDialogStore(state => state.close);

  return {
    open,
    close,
  };
};
