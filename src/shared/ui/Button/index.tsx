// Button.tsx
import React from 'react';
import { buttonStyle, buttonVars } from './Button.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import Icon, { IconType } from '../Icon';

export interface ButtonProps {
  leftIcon?: IconType;
  variant?: 'solid' | 'outline';
  color?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit';
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  full?: boolean;
}

const Button = ({
  leftIcon,
  variant = 'solid',
  color = 'primary',
  size = 'md',
  type = 'button',
  label,
  full = false,
  disabled = false,
  onClick,
}: ButtonProps) => {
  const colorValue =
    color.startsWith('#') || color.startsWith('rgb')
      ? color
      : `var(--${color})`;

  const vars = assignInlineVars({
    [buttonVars.backgroundColor]: colorValue,
    [buttonVars.color]: variant === 'solid' ? 'white' : colorValue,
    [buttonVars.borderColor]: colorValue,
  });

  return (
    <button
      type={type}
      className={buttonStyle({
        variant,
        size,
        full,
        withIcon: !!leftIcon,
      })}
      style={vars}
      onClick={onClick}
      disabled={disabled}
    >
      {leftIcon && <Icon name={leftIcon} size={size !== 'xs' ? 20 : 16} />}
      <span>{label}</span>
    </button>
  );
};

export default Button;
