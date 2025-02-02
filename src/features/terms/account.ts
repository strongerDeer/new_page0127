import { ROUTES } from '@/shared/lib/constants';
import { Term } from './types';

export const accountList = [
  {
    id: '01',
    title: '이용약관 동의',
    link: ROUTES.TERM,
    mandatory: true,
  },
  {
    id: '02',
    title: '개인정보 수집 및 이용 동의',
    link: ROUTES.PRIVACY,
    mandatory: true,
  },
] as Term[];
