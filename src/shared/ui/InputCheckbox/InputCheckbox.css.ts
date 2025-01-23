import { globalStyle, style } from '@vanilla-extract/css';

export const CheckboxWrap = style({
  display: 'flex',

  gap: '0.5rem',
});

export const LabelStyle = style({});
globalStyle(`${LabelStyle} span`, {
  backgroundColor: '#eee',
  border: '1px solid #e5e5e5',
  borderRadius: '1em',
  fontSize: '0.85em',
  padding: '0.2em 0.5em',
  fontWeight: 600,
  marginRight: '0.3em',
});
export const inputStyle = style({});

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
