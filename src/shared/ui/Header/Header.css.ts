import { style } from '@vanilla-extract/css';

export const headerWrap = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  maxWidth: '120rem',
  width: 'calc(100% - 4rem)',
  margin: '0 auto',
});

export const logoStyle = style({
  fontSize: '3.2rem',
  lineHeight: '1.2',
});
export const right = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
});
