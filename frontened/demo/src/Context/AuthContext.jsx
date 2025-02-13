import React, { useContext, useEffect, useState } from 'react'
import { jwtDecode } from "jwt-decode"; 
const AuthContext=React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){
    /*
    success: true,
                jwtToken,
                email,
                name: user.name
    */
const [token,setToken]=useState(localStorage.getItem("accessToken") || null);
const [user, setUser] = useState(token ? jwtDecode(token) : null);
const [success, setSuccess] = useState('');
const [isLoggedIn,setIsLoggedIn]=useState(false)
const [name,setName]=useState("");
const [email,setEmail]=useState("")
const login= (token,email,name)=>{
    setToken(token);
    console.log(jwtDecode(token));
    localStorage.setItem("accessToken", token);
    setSuccess('Login successful!')
    setName(name);
    setEmail(email)
    setIsLoggedIn(true)
    setUser(jwtDecode(token))
    console.log(name+" "+email+" ");
    cl();
}
const logout=()=>{
    setToken(null);
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("accessToken");

    console.log(localStorage.getItem("accessToken"));
    console.log(isLoggedIn);

}
useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token && !isLoggedIn) {
      setIsLoggedIn(true); // Update state to keep user logged in if token exists
    }
  }, [isLoggedIn]);
function cl(){
    console.log(email,name,success);
    console.log(user);
}
const value={success,setSuccess,login,logout,name,email,isLoggedIn};
    return <AuthContext.Provider value={value} >
        {children}
    </AuthContext.Provider>
}

