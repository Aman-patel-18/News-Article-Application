import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getFilePreview, uploadFile } from "@/lib/appwrite/uploadImage";
import { deleteUserFailure, deleteUserStart, deleteUserSuccess, signOutSuccess, updateFailure, updateStart, updateSuccess } from "@/redux/user/userSlice";
import { Ghost } from "lucide-react";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const DahboardProfile = () => {
  const { currentUser, error, loading } = useSelector((state) => state.user);
  const profilePicRef = useRef();
  const dispatch=useDispatch()
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [formData, setFormData]=useState({})
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };

  const handleChange=(e)=>{
    setFormData({...formData, [e.target.id]: e.target.value})
  }

    const uploadImage = async () => {
  if (!imageFile) return currentUser.profilePicture;
  try {
    const uploadedFile = await uploadFile(imageFile);

    const profilePictureUrl = await getFilePreview(uploadedFile.$id);

    return profilePictureUrl;
  } catch (error) {
    toast("Update user failed.");
    return currentUser.profilePicture;
  }
};

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      dispatch(updateStart())
      // wait for image uploading
      const profilePicture = await uploadImage()
      const updateProfile = {
        ...formData,
        profilePicture,
      }
       const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method:"PUT",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateProfile)
       })
       const data =await res.json()
       if(!res.ok){
        dispatch(updateFailure(data.message))
        toast("Update user failed")
       }
       else{
        dispatch(updateSuccess(data))
        toast("User updated successfully")
       }
    } catch (error) {
      dispatch(updateFailure(error.message))
      toast("Update user failed")
      return currentUser.profilePicture;
    }
  }

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart())
      const res=await fetch(`/api/user/delete/${currentUser._id}`,{
        method: "DELETE",
      })
      const data = await res.json()
      if(!res.ok){
        dispatch(deleteUserFailure(data.message))
        toast("delete user failed")
      }
      else{
        dispatch(deleteUserSuccess())
        toast("deleted user successfully")
      }
    } catch (error) {
      dispatch(deleteUserFailure(error.message))
    }
  }

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      })

      const data = await res.json()

      if (!res.ok) {
        console.log(data.message)
      } else {
        dispatch(signOutSuccess())
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">
        Update your Profile
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          hidden
          ref={profilePicRef}
          onChange={handleImageChange}
        />
        <div className="w-32 h-32 self-center cursor-pointer overflow-hidden">
          <img
            src={imageFileUrl || currentUser.profilePicture}
            alt=""
            className="rounded-full w-full h-full object-cover border-8 border-slate-300"
            onDoubleClick={() => profilePicRef.current.click()}
          />
        </div>
        <Input
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser.username}
          className="h-12 border border-slate-400 focus-visible:ring-offset-0"
          onChange={handleChange}
        />

        <Input
          type="email"
          id="email"
          placeholder="@gmail.com"
          defaultValue={currentUser.email}
          className="h-12 border border-slate-400 focus-visible:ring-offset-0"
          //disabled
          onChange={handleChange}
        />

        <Input
          type="password"
          id="password"
          placeholder="********"
          className="h-12 border border-slate-400 focus-visible:ring-offset-0"
          onChange={handleChange}
        />
        <Button type="submit" className="h-12 bg-green-600" disabled={loading}>
          {loading? "Loading...": "Update Profile"}
        </Button>
      </form>
      <div className="flex text-red-400 justify-between cursor-pointer mt-5">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="ghost" className="hover:text-red-700 cursor-pointer">
              Delete Profile
            </Button>
          </AlertDialogTrigger>


          <AlertDialogContent>
        
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        
        </AlertDialogHeader>
        
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteUser}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      
      </AlertDialogContent>
        
        </AlertDialog>
        
        <Button variant="ghost" className="hover:text-red-700  cursor-pointer"
        onClick={handleSignout}>Log out</Button>
      </div>
      <p className="text-red-600">{error}</p>
    </div>
  );
};

export default DahboardProfile;
