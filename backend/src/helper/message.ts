import { getFirestore } from './firebase.js';

const firestore = getFirestore();

export const markAsProcessed = async (messageId: string, format: string) => {
  await firestore
    .collection('messages')
    .doc(messageId)
    .update({
      processed: true,
      [`formats.${format}`]: true,
    });
};
