import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";



function Profile(){
    //get user information from the context
    const {user}=useContext(AuthContext);


    return(
        <div>
            <h1>Profile Page</h1>
            {user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p> 
                </div>
            ) : (
                <p>Please login to view your profile.</p>
            )}
        </div>
        );
}

export default Profile;