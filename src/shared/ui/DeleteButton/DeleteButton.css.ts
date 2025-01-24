import { globalStyle, style } from '@vanilla-extract/css';

export const CloseButtonStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'var(--background)',
  border: '1px solid var(--error)',
  width: '4rem',
  height: '4rem',
  zIndex: 10,
  borderRadius: '50%',
  cursor: 'pointer',
  color: 'var(--error)',
});

globalStyle(`${CloseButtonStyle} span`, {
  clip: 'rect(1px, 1px, 1px, 1px)',
  clipPath: 'inset(50%)',
  width: '1px',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
});
