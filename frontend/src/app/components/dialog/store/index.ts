import { create } from 'zustand';
import { DialogState } from '../interfaces';

export const useDialogStore = create<DialogState>(set => ({
  isOpen: false,
  content: () => '',
  maxWidth: 'md',
  open: (props: Partial<Omit<DialogState, 'isOpen' | 'open' | 'close'>> = {}) =>
    set(() => ({
      ...props,
      isOpen: true,
    })),
  close: () => set(() => ({ isOpen: false })),
}));
