import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [userToken, setUserToken] = useState(()=>{
        const storedUser = localStorage.getItem("UserToken");
        return storedUser ? JSON.parse(storedUser) : null
    });
    //parsing the token.
    const [userName, setUserName] = useState("");
    const [userEmailId, setUserEmailId] = useState("");

    useEffect(()=>{
        if(userToken){
            localStorage.setItem("UserToken", JSON.stringify(userToken));
        }else{
            localStorage.removeItem("UserToken");
        }
    },[userToken]);
    // Setting the localstorage with the data of token coming from Login component and stringify the data.


    return(
        <UserContext.Provider value={{userToken, setUserToken, userName, setUserName, userEmailId, setUserEmailId}}>
            {children}
        </UserContext.Provider>
    )
}