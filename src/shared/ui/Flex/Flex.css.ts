import { recipe } from '@vanilla-extract/recipes';

export const FlexStyle = recipe({
  base: {
    display: 'flex',
    gap: '0.4rem',
    alignItems: 'stretch',

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    '&  > *': { flexGrow: 1 },
  },
  variants: {
    basis: {
      '2:8': {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        '& > *:nth-child(1)': { flexBasis: '20%' },
        '& > *:nth-child(2)': { flexBasis: '80%' },
      },
    },
    align: {
      center: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      },
    },
  },
});
