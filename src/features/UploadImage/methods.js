import { storage } from '@components/Firebase';

export const uploadImage = async file => {
  await storage.ref(`images/${file.name}`).put(file);
};
