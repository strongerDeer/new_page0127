import React from 'react';
import { InputProps } from './types';
import { inputField, inputLabel, inputWrapper, errorStyle } from './Input.css';

export default function Input({
  label,
  state = 'default',
  full = false,
  errorMsg,
  ...rest
}: InputProps) {
  return (
    <div className={inputWrapper}>
      {label && <label className={inputLabel()}>{label}</label>}
      <input
        className={inputField({
          state,
          full,
        })}
        {...rest}
      />
      {state === 'error' && <p className={errorStyle}>{errorMsg}</p>}
    </div>
  );
}
