import { useEffect, useState } from "react"
import { productStorage } from "./firebase";
import 'firebase/storage';
import firebase from "firebase/app";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(async () => {
        // references
        const storageRef = firebase.storage().ref("products/" + file.name);
        
        await storageRef.put(file).on('state_changed', (snapshot) => {
          let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(percentage);
        }, (err) => {
          setError(err);
        }, async () => {
          const url = await storageRef.getDownloadURL();
          setUrl(url);
        });
      }, [file]);

    return { progress, url, error }
}

export default useStorage;