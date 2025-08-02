import { ID, ImageGravity } from "appwrite";
import { appwriteConfig, storage } from "./config";

// uplaoded file
export async function uploadFile(file) {
  try {
    const uploadedFile = await storage.createFile(
      appwriteConfig.storageId,
      ID.unique(),
      file
    );
    return uploadedFile;
  } catch (error) {
    throw error;
  }
}


//get file url
export async function getFilePreview(fileId) {
  try {
    const fileUrl = `${appwriteConfig.url}/storage/buckets/${appwriteConfig.storageId}/files/${fileId}/view?project=${appwriteConfig.projectId}`;
    return fileUrl;
  } catch (error) {
    throw error;
  }
}


