import { ImageGravity } from "appwrite";
import { appwriteConfig, storage } from "./config";

// uplaoded file
export async function uploadFile(file) {
    try {
        const uploadedFile =await storage.createFile(
            appwriteConfig.storageId,
            ID.unique(),
            file
        )
        return uploadedFile
    } catch (error) {
        
    }
}

//get file url
export async function getFilePreview(fileId) {
    try {
        const fileUrl= storage.getFilePreview(
            appwriteConfig.storageId,
            fileId,2000,2000,ImageGravity.Top,100
        )
        return fileUrl
        if(!fileUrl) throw Error
    } catch (error) {
        
    }
    
}
