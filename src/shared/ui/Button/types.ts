export const colors = {
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
} as const;

export const sizes = {
  xs: { padding: '4px 8px', fontSize: '12px' },
  sm: { padding: '8px 16px', fontSize: '14px' },
  md: { padding: '12px 24px', fontSize: '16px' },
  lg: { padding: '16px 32px', fontSize: '18px' },
} as const;

export type ColorType = keyof typeof colors;
export type SizeType = keyof typeof sizes;
