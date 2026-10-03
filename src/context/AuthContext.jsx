import {createContext,useState} from "react";

//create context 
export const AuthContext=createContext();

//provider component 
export function AuthProvider({children}){

    //store the logged in user 
    const [user,setUser]=useState(null);


    //function to login the user
    const login=()=>{
        setUser({
            name:"Lavish",
            email:"lavish@example.com"
        });
    };


    //function to logout the user
    const logout=()=>{
        setUser(null);
    };


    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )

}