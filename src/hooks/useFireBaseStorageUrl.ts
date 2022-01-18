import { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import storage from "../utils/firebaseStorage";
import { FileTypes } from "../utils/consts";

export function useFireBaseStorageUrl(
  fileUrl: string,
  fileType: FileTypes
): string {
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    if (!!fileUrl) {
      getDownloadURL(
        ref(
          storage,
          fileType === FileTypes.Image
            ? `images/${fileUrl}`
            : `videos/${fileUrl}`
        )
      ).then((url) => setImageUrl(url));
    }
  }, [fileUrl, fileType]);

  return imageUrl;
}
