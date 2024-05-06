import React, { useState, createContext, useEffect } from 'react'
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(true);

    const fetchdata = async () => {
        const token = localStorage.getItem('authToken')
        console.log(token);
        if(token===null){
            setIsLogin(false);
            return;
        }
        // const headers = {
        //     'Content-Type': 'application/json',
        //     'authToken': token,
        // }
        
        const response = await fetch('http://localhost:5000/api/auth/userdata',{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              "authToken": token
            }
          });
          const json = await response.json();
          if(!json.status){
            setIsLogin(false);
          }else{
            setIsLogin(true);
          }
    }

    useEffect(() => {
        fetchdata();
    })
    // const [loading,setLoading] = useState(false);
    const value = {
        isLogin,
        setIsLogin,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;