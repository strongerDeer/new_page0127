import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const errorStyle = style({
  display: 'flex',
  gap: '0.5em',
  color: 'red',
  fontSize: '0.8em',
});

export const helperStyle = style({
  display: 'flex',
  gap: '0.5em',
  color: 'var(--primary)',
  fontSize: '0.8em',
});

export const inputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

const defaultInputStyle = {
  height: '4rem',
  padding: '0 1em',
  border: '1px solid #ddd',
  borderRadius: '0.4rem',
  transition: 'all 0.2s',
  '&:focus-visible': {
    borderColor: 'var(--primary)',
    outline: 'none',
    boxShadow: '0 0 5px 0 rgba(41,208,99,0.8)',
  },
  '&:disabled, &[readOnly]': {
    borderColor: '#eee',
    backgroundColor: '#f5f5f5',
    color: '#767676',
  },
};

export const inputField = recipe({
  base: defaultInputStyle,
  variants: {
    state: {
      default: {},
      error: { borderColor: 'red' },
      success: { borderColor: 'var(--primary)' },
    },
    full: {
      true: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    state: 'default',
  },
});

export const inputLabel = recipe({
  base: {
    fontSize: '0.8em',
    fontWeight: '500',
    color: '#374151',
  },
  variants: {
    state: {
      default: {},
      error: { color: 'red' },
      success: { color: 'var(--primary)' },
    },
  },
  defaultVariants: {
    state: 'default',
  },
});
