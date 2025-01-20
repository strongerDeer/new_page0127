import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const errorStyle = style({
  color: 'red',
});

export const inputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const inputField = recipe({
  base: {
    height: '4rem',
    padding: '0 1em',
    border: '1px solid #ddd',
    borderRadius: '0.4rem',
  },
  variants: {
    state: {
      default: {},
      error: {},
      success: {},
    },
    full: {
      true: {
        width: '100%',
      },
    },
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
      error: {},
      success: {},
    },
    variant: {
      underline: {},
      outline: {},
    },
  },
});
