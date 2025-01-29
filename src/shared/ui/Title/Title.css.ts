import { recipe } from '@vanilla-extract/recipes';

export const TitleStyle = recipe({
  base: {
    fontSize: '2em',
  },
  variants: {
    variant: {
      pageTitle: {
        fontSize: '4em',
        lineHeight: 1,
        '& span': {
          color: 'var(--error)',
          fontSize: '2em',
        },
      },
    },
    align: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
    },
  },
});
