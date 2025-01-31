import { recipe } from '@vanilla-extract/recipes';

export const TextStyle = recipe({
  base: {
    fontSize: '1.6em',
    fontWeight: 200,
  },
  variants: {
    fontSize: {
      14: {
        fontSize: 'clamp(1.2rem, 1.4vw, 1.4rem);',
      },
      16: {
        fontSize: 'clamp(1.2rem, 1.6vw, 1.6rem);',
      },
      24: {
        fontSize: 'clamp(2rem, 1.6vw, 2.4rem);',
      },
      28: {
        fontSize: 'clamp(2.4rem, 1.6vw, 2.8rem);',
      },
      32: {
        fontSize: 'clamp(3rem, 1.6vw, 3.2rem);',
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
