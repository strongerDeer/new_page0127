export interface User {
  id: string;
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  intro?: string;
  createdAt: Date;
  updatedAt: Date;
  provider: 'google';
  goal: number;
}
