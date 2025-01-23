import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const A11yHidden = style({
  clip: 'rect(1px, 1px, 1px, 1px)',
  clipPath: 'inset(50%)',
  width: '1px',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
});

export const LabelStyle = recipe({
  base: {
    backgroundColor: 'var(--primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    width: '4rem',
    height: '4rem',
    borderRadius: '2rem',
    position: 'absolute',
    cursor: 'pointer',
  },
  variants: {
    variant: {
      circle: {
        top: 0,
        right: 0,
      },
      rectangle: { top: '1rem', right: '1rem' },
    },
  },
});

export const InputStyle = style([A11yHidden]);

// focus
globalStyle(`${InputStyle}:focus-visible + label`, {
  borderColor: 'var(--primary)',
  outline: 'none',
  boxShadow: '0 0 5px 0 rgba(41,208,99,0.8)',
});
