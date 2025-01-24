import React from 'react';
import { InputProps } from './types';
import {
  inputField,
  inputLabel,
  inputWrapper,
  errorStyle,
  helperStyle,
} from './Input.css';
import Icon from '../Icon';

export default function Input({
  id,
  errorMsg,
  helperMsg,
  label,
  value,
  state = 'default',
  full = false,
  required,
  onChange,
  ...rest
}: InputProps) {
  return (
    <div className={inputWrapper}>
      {label && (
        <label htmlFor={id} className={inputLabel({ state })}>
          {label} {required && <span>필수</span>}
        </label>
      )}
      <input
        id={id}
        className={inputField({
          state,
          full,
        })}
        value={value}
        onChange={onChange}
        required={required}
        {...rest}
      />
      {errorMsg && (
        <p className={errorStyle}>
          <Icon name="alert" />
          {errorMsg}
        </p>
      )}
      {!errorMsg && helperMsg && (
        <p className={helperStyle}>
          <Icon name="check" />
          {helperMsg}
        </p>
      )}
    </div>
  );
}
