import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const WrapStyle = recipe({
  base: {
    position: 'relative',
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
