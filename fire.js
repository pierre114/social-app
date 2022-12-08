import firebaseConfig from "./firebase"
import * as firebase from "firebase";

class Fire{
    constructor(){
        firebase.initializeApp(firebaseConfig)
    }

    addPost = async ({text, LocalUri}) => {
        const remoteUri = await this.uploadPhotoAsync(LocalUri)

        return new Promise((res, rej) => {
                this.firestore.collection("post").add({
                    text,
                    uid: this.uid,
                    timestamp: this.timestamp,
                    image: remoteUri
                })
                .then(ref => {
                    res(ref);
                })
                .catch(error => {
                    rej(error);
                });
        })
    }

    uploadPhotoAsync = async uri => {
        const path = 'photos/${this.uid}/${Date.now()}.jpg'

        return new Promise(async (res, rej) =>{
            const response = await fetch(uri)
            const file = await response.blob()
            
            let upload = firebase.storage().ref(path).put(file)

            upload.on("state_changed", snapshot => {}, err =>{
                rej(err)
            },
            async () => {
                const url = await upload.snapshot.ref.getDownloadURL();
                res(url);
            }
            )
        })
    }

    get firestore() {
        return firebase.firestore()
    }

    get uid() {
            return (firebase.auth().currentUser || {}).uid
        }
    
    get timestamp() {
        return Date.now()
    }

}

Fire.share = new Fire()
export default Fire;
