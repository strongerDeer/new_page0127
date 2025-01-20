import { db } from '@/shared/api/firebase';
import { COLLECTIONS } from '@shared/lib/constants';
import { collection, getDocs, limit, query, where } from 'firebase/firestore';

export const checkUserExistsByUid = async (uid: string) => {
  try {
    const q = query(
      collection(db, COLLECTIONS.USERS),
      where('uid', '==', uid),
      limit(1),
    );
    const querySnapshot = await getDocs(q);

    return !querySnapshot.empty;
  } catch (error) {
    console.error('Error checking user', error);
    throw error;
  }
};
