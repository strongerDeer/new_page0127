import { recipe } from '@vanilla-extract/recipes';

// preview
export const PreviewStyle = recipe({
  base: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    border: '1px solid #ddd',
    boxSizing: 'border-box',
    backgroundColor: 'var(--grayLv1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--grayLv3)',
  },
  variants: {
    variant: {
      circle: {
        width: '12rem',
        height: '12rem',
        borderRadius: '50%',
      },
      rectangle: { borderRadius: '0.4rem' },
    },
  },
});
