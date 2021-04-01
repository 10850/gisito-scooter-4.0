import { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';
import '../auth/auth.css'
import { useAuth } from "../auth/AuthContext"

const Profil = () => {
    const [userData, setUserData] = useState([]);
    const { currentUser } = useAuth();

    useEffect(async() => {
        db.collection("users").where("email", "==", currentUser.email)
        .get()
        .then(async (querySnapshot) => {
            let document = []
            await querySnapshot.forEach((doc) => {
                document.push({...doc.data(), id: doc.id});
                // doc.data() is never undefined for query doc snapshots
                console.log(document);
            });
            await setUserData(document)
            console.log(userData)
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    },[])
        
        



    return (
            <> 
                {userData.map((user) => (
                    <div key={user.id} id="profil-container">
                        <h2 >
                            { "Hej, " + user.fullName}
                        </h2>
                        <p>
                            {"Din mail: " + user.email}
                        </p>
                    </div>
                ))

                }
            </>
       
    )
}

export default Profil;