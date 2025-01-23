export interface User {
  userId: string;
  uid: string;
  photoURL?: string;

  email: string;
  provider: 'google';
  displayName: string;

  sex: 'male' | 'female' | null;
  birth: string;
  bio: string;

  goal: number;
  background?: string;

  createdAt: Date;
  updatedAt: Date;
}
