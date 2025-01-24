import { recipe } from '@vanilla-extract/recipes';

export const FlexStyle = recipe({
  base: {
    display: 'flex',
    gap: '0.4rem',
    alignItems: 'stretch',
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
  },
});
