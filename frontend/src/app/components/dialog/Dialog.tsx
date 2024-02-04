import React, { memo } from 'react';
import { Dialog as MuiDialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useDialogStore } from './store';

export const Dialog = memo(() => {
  const open = useDialogStore(state => state.isOpen);
  const close = useDialogStore(state => state.close);
  const content = useDialogStore(state => state.content);
  const maxWidth = useDialogStore(state => state.maxWidth);

  return (
    <MuiDialog scroll="body" fullWidth maxWidth={maxWidth} open={open}>
      {content({
        onClose: close,
        StyledTitle: DialogTitle,
        StyledContent: DialogContent,
        StyledActions: DialogActions,
      })}
    </MuiDialog>
  );
});
