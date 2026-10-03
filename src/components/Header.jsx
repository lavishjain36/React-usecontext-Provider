import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";



function Header() {

    const {
        user,
        logout
    }=useContext(AuthContext);

    return (
        <div>
            <h1>Welcome to the App</h1>
            {user ? (      
                <>
                  <p>Welcome, {user.name}!</p>

                  <button onClick={logout}>Logout</button> 
                </> 
               
            ) : (
                <p>You are not logged in.</p>
            )}
        </div>
    );
}


export default Header;