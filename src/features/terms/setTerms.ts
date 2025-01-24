import { db } from '@/shared/api/firebase';
import { COLLECTIONS } from '@/shared/lib/constants';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';

export const setTerms = ({
  userId,
  termIds,
}: {
  userId: string;
  termIds: string[];
}) => {
  return setDoc(doc(collection(db, COLLECTIONS.TERMS), userId), {
    userId,
    termIds,
  });
};

export const getTerms = async ({ userId }: { userId: string }) => {
  const snapshot = await getDoc(doc(collection(db, COLLECTIONS.TERMS), userId));

  if (!snapshot.exists()) {
    return null;
  }
  return {
    id: snapshot.id,
    ...(snapshot.data() as { userId: string; termIds: string[] }),
  };
};
