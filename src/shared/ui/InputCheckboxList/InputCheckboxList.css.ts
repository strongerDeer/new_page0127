import { style } from '@vanilla-extract/css';

export const WrapStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  '& div': {},
  '& label': {
    padding: '0.4rem 0',
    flexGrow: 1,
  },
  '& div:first-child': {
    borderBottom: '1px solid #ddd',
    fontWeight: 600,
  },
});
