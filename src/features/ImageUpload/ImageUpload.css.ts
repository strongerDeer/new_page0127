import { recipe } from '@vanilla-extract/recipes';

export const WrapStyle = recipe({
  base: {
    position: 'relative',

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    '& button': {
      position: 'absolute',
      top: 0,
      right: 0,
    },
  },
  variants: {
    variant: {
      circle: { margin: '0 auto', width: 'fit-content' },
      rectangle: {
        width: '100%',
        aspectRatio: '2/1',
      },
    },
  },
});
