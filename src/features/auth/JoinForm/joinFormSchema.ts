import { z } from 'zod';

export const joinFormSchema = z.object({
  userId: z
    .string()
    .min(4, '아이디는 4자 이상이어야 합니다')
    .max(20, '아이디는 20자 이하여야 합니다')
    .regex(
      /^[a-zA-Z0-9_]+$/,
      '아이디는 영문, 숫자, 언더스코어(_)만 사용 가능합니다',
    ),

  displayName: z
    .string()
    .min(2, '닉네임은 2자 이상이어야 합니다')
    .max(20, '닉네임은 20자 이하여야 합니다'),

  sex: z.enum(['male', 'female'], {
    required_error: '성별을 선택해주세요',
  }),

  bio: z.string().max(10, '소개는 100자 이하여야 합니다').optional(),
  birth: z
    .any()
    .transform((val) => {
      if (typeof val === 'number') return String(val);
      return val;
    })
    .pipe(
      z
        .string()
        .regex(/^\d{6}$/, '생년월일은 6자리 숫자여야 합니다')
        .transform((val) => {
          const num = Number(val);
          if (isNaN(num)) throw new Error('숫자만 입력해주세요');
          return num;
        }),
    ),

  goal: z
    .any()
    .transform((val) => {
      if (typeof val === 'number') return String(val);
      return val;
    })
    .pipe(
      z
        .string()
        .regex(/^\d+$/, '숫자만 입력해주세요')
        .transform((val) => {
          const num = Number(val);
          if (isNaN(num)) throw new Error('숫자만 입력해주세요');
          return num;
        })
        .refine((val) => val >= 1, '목표 권수는 1이상이어야 합니다')
        .refine((val) => val <= 1000, '목표 권수는 1000권 이하여야 합니다'),
    ),

  photoURL: z.string().optional(),
  email: z.string().email('올바른 이메일 형식이 아닙니다'),
  uid: z.string(),
  provider: z.string(),
});

export type JoinFormSchema = z.infer<typeof joinFormSchema>;
