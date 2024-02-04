interface Actions {
  onClose: () => void;
  StyledTitle: any;
  StyledContent: any;
  StyledActions: any;
}

export interface DialogState {
  isOpen: boolean;
  content(props: Actions): string | JSX.Element | JSX.Element[];
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  open: (props?: Partial<Omit<DialogState, 'isOpen' | 'open' | 'close'>>) => void;
  close: () => void;
}
