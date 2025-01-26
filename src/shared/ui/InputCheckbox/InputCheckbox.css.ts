import { globalStyle, style } from '@vanilla-extract/css';

export const CheckboxWrap = style({
  display: 'flex',
  gap: '2rem',
  alignItems: 'center',
});

export const linkStyle = style({
  fontSize: '0.8em',
  textDecoration: 'underline',
  color: 'var(--primary)',
  padding: '1rem',
});

export const LabelStyle = style({
  display: 'flex',
  gap: '0.2em',
  alignItems: 'center',
  border: '1px solid transparent',
  cursor: 'pointer',
});
globalStyle(`${LabelStyle} span`, {
  backgroundColor: '#eee',
  border: '1px solid #e5e5e5',
  borderRadius: '1em',
  fontSize: '0.85em',
  padding: '0.2em 0.5em',
  fontWeight: 600,
  marginRight: '0.3em',
});
export const inputStyle = style({
  clip: 'rect(1px, 1px, 1px, 1px)',
  clipPath: 'inset(50%)',
  width: '1px',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
});

// focus
globalStyle(`${inputStyle}:focus-visible + label`, {
  border: '1px solid var(--primary)',
  outline: 'none',
  boxShadow: '0 0 5px 0 rgba(41,208,99,0.8)',
  borderRadius: '0.4rem',
});
