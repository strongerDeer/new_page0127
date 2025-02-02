import { z } from 'zod';

export const joinFormSchema = z.object({
  userId: z
    .string()
    .min(4, '아이디는 4자 이상이어야 합니다')
    .max(20, '아이디는 20자 이하여야 합니다')
    .regex(
      /^[a-z0-9_]+$/,
      '아이디는 영문 소문자, 숫자, 언더스코어(_)만 사용 가능합니다',
    ),

  displayName: z
    .string()
    .min(2, '닉네임은 2자 이상이어야 합니다')
    .max(20, '닉네임은 20자 이하여야 합니다'),

  sex: z.enum(['male', 'female'], {
    required_error: '성별을 선택해주세요',
  }),

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

  // bio: z.string().max(10, '소개는 100자 이하여야 합니다').optional(),
  // goal: z
  //   .any()
  //   .transform((val) => {
  //     if (typeof val === 'number') return String(val);
  //     return val;
  //   })
  //   .pipe(
  //     z
  //       .string()
  //       .regex(/^\d+$/, '숫자만 입력해주세요')
  //       .transform((val) => {
  //         const num = Number(val);
  //         if (isNaN(num)) throw new Error('숫자만 입력해주세요');
  //         return num;
  //       })
  //       .refine((val) => val >= 1, '목표 권수는 1이상이어야 합니다')
  //       .refine((val) => val <= 1000, '목표 권수는 1000권 이하여야 합니다'),
  //   ),
});

export type JoinFormSchema = z.infer<typeof joinFormSchema>;
