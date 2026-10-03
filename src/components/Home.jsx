import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


function Home(){
    const {user,login}=useContext(AuthContext);

    return(
        <div>
            <h1>Home Page</h1>
            {user ? (
                <p>Welcome, {user.name}!</p>
            ) : ( 
                <>
                <p>You are not logged in.</p>

                <button onClick={login}>Login</button>
                </>
            )}
        </div>
    );
}

export default Home;