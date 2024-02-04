import React, { memo } from 'react';
import { StyledComponent } from '@emotion/styled';
import { Button, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Input } from '../../../components/form/hookForm/Input';

interface Props {
  onClose: () => void;
  StyledContent: StyledComponent<any, {}, {}>;
  StyledActions: StyledComponent<any, {}, {}>;
}

export const CreateUser = memo(({ onClose, StyledActions, StyledContent }: Props) => {
  const { formState, control } = useForm();

  return (
    <>
      <StyledContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Input formState={formState} control={control} name="firstName" label="First Name" />
          </Grid>
          <Grid item xs={6}>
            <Input formState={formState} control={control} name="lastName" label="Last Name" />
          </Grid>
        </Grid>
      </StyledContent>
      <StyledActions>
        <Button onClick={onClose}>Close</Button>
        <Button>Create</Button>
      </StyledActions>
    </>
  );
});
