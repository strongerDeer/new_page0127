import { globalStyle, style } from '@vanilla-extract/css';

export const RadioWrap = style({
  display: 'flex',
  gap: '0.5rem',
});
globalStyle(`${RadioWrap} div`, {
  flexGrow: 1,
});

export const LabelStyle = style({
  border: '1px solid #ddd',
  height: '4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0.4rem',
  cursor: 'pointer',
  fontSize: '1.4rem',
});

export const inputStyle = style({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0,0,0,0)',
  border: '0',
  ':focus': {
    outline: 'none',
  },
});

// checked
globalStyle(`${inputStyle}:checked + label`, {
  backgroundColor: 'var(--content-primary)',
  color: 'var(--background)',
});

// focus
globalStyle(`${inputStyle}:focus-visible + label`, {
  borderColor: 'var(--primary)',
  outline: 'none',
  boxShadow: '0 0 5px 0 rgba(41,208,99,0.8)',
});
