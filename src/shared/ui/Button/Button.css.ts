// Button.css.ts
import { style, createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// CSS 변수 생성
const colorVar = createVar();
const bgColorVar = createVar();
const borderColorVar = createVar();

const basePaddingVar = createVar();

const baseButton = style({
  vars: {
    [basePaddingVar]: '1.2em',
  },

  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  justifyContent: 'center',

  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',

  padding: `0 ${basePaddingVar}`,

  ':disabled': {
    opacity: 0.6,
    color: `var(--content-primary)`,
    backgroundColor: `var(--gray-1)`,
    cursor: 'not-allowed',
  },
});

export const buttonStyle = recipe({
  base: baseButton,

  variants: {
    variant: {
      solid: {
        backgroundColor: bgColorVar,
        color: colorVar,
        border: 'none',
        ':hover': {
          opacity: 0.9,
        },
      },
      outline: {
        backgroundColor: 'transparent',
        color: bgColorVar,
        border: `1px solid ${borderColorVar}`,
        ':hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
        },
      },
    },
    size: {
      xs: { height: '3.2rem', fontSize: '1.2rem' },
      sm: { height: '4.0rem', fontSize: '1.4rem' },
      md: { height: '4.4rem', fontSize: '1.6rem' },
      lg: { height: '5.2rem', fontSize: '1.8rem' },
    },
    full: {
      true: {
        width: '100%',
      },
    },
    withIcon: {
      true: {
        paddingLeft: `calc(${basePaddingVar} + 0.2em)`,

        '& span': {
          position: 'relative',
          paddingLeft: '0.5em',

          '&::before': {
            content: "''",
            display: 'block',
            width: '1px',
            height: '0.7em',
            backgroundColor: colorVar,
            position: 'absolute',
            top: '50%',
            left: '0',
            transform: 'translateY(-50%)',
          },
        },
      },
    },
  },
});

// vars 객체 export
export const buttonVars = {
  color: colorVar,
  backgroundColor: bgColorVar,
  borderColor: borderColorVar,
};
