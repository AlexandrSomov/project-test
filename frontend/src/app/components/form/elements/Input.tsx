import React, { ChangeEvent, forwardRef } from 'react';
import {
  TextField,
  Box,
  InputLabel,
  FormControl,
  FormHelperText,
  styled,
  SxProps,
  Theme,
  TextFieldProps,
} from '@mui/material';

export const InputStyled = styled(TextField)(({ theme }) => [
  {
    '& .MuiOutlinedInput-root': {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.dark,
      borderRadius: theme.shape.borderRadius / 2,
      height: '40px',
      fontSize: '14px',
      fontWeight: 400,

      '& fieldset': {
        borderColor: theme.palette.secondary.main,
        opacity: 1,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.secondary.main,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.secondary.main,
      },
      '&.Mui-disabled fieldset': {
        borderColor: theme.palette.secondary.main,
        opacity: 1,
      },
      '& input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active':
        {
          WebkitBackgroundClip: 'text',
        },
    },
  },
]);

const InputLabelStyled = styled(InputLabel)(({ theme }) => ({
  position: 'inherit',
  color: theme.palette.secondary.dark,
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '16px',
  opacity: 1,
  display: 'flex',
  alignItems: 'center',
  transform: 'initial',
}));

const LabelBoxStyled = styled(Box)(() => ({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}));

const SpanStyled = styled('span')(({ theme }) => ({
  color: theme.palette.error.main,
}));

export interface Props {
  name: string;
  required?: boolean;
  fullWidth?: boolean;
  placeholder?: string;
  margin?: 'normal' | 'dense' | 'none';
  label?: string;
  type?: string;
  formHelperText?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  multiline?: boolean;
  value?: any;
  disabled?: boolean;
  sx?: SxProps<Theme>;
  rows?: number;
  InputProps?: TextFieldProps['InputProps'];
}

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      placeholder,
      label,
      type,
      formHelperText,
      onChange,
      multiline,
      name,
      value,
      disabled,
      sx,
      rows,
      margin = 'none',
      fullWidth = true,
      required = false,
      InputProps,
    }: Props,
    ref,
  ) => (
    <FormControl disabled={disabled} variant="standard" fullWidth error={Boolean(formHelperText)}>
      {label && (
        <InputLabelStyled shrink>
          <LabelBoxStyled component="span" title={label}>
            {label}
          </LabelBoxStyled>
          {required && <SpanStyled>&thinsp;*</SpanStyled>}
        </InputLabelStyled>
      )}

      <InputStyled
        disabled={disabled}
        name={name}
        fullWidth={fullWidth}
        margin={margin}
        placeholder={placeholder}
        type={type}
        InputProps={{ inputRef: ref, ...InputProps }}
        multiline={multiline}
        value={value ?? ''}
        onChange={onChange}
        sx={sx}
        rows={rows}
      />

      {formHelperText && <FormHelperText error>{formHelperText}</FormHelperText>}
    </FormControl>
  ),
);
