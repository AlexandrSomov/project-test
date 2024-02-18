import React, { memo } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Controller, Control, FormState } from 'react-hook-form';
import { Input as ElementInput, Props as InputProps } from '../elements/Input';

interface Props extends InputProps {
  control: Control<any>;
  formState: FormState<any>;
}

export const Input = memo(({ control, formState, ...props }: Props) => {
  const { name } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <ElementInput {...props} {...field} formHelperText={formState.errors.root?.message} />}
    />
  );
});
