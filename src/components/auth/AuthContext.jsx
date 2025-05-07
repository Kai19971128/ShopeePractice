import React, { use } from 'react';
import { useEffect } from 'react';

const defaultContextValue = {
    isAuthenticated: false,
};

const AuthContext = React.createContext(defaultContextValue);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(
        defaultContextValue.isAuthenticated
    );

    useEffect(() => {
        try {
            const authState = JSON.parse(localStorage.getItem('shopee:auth.state'));
            if(authState&&authState.token){
                setIsAuthenticated(true);
            }
        }catch (error) {}
    })

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
                login: async ( username, password ) => {
                    if (username === 'admin' && password === 'admin') {
                        const token = "goodToken";
                        localStorage.setItem('shopee:auth.state', JSON.stringify({token}));
                        setIsAuthenticated(true);
                        return {token};
                    }
                    setIsAuthenticated(false);
                    return {token:null ,error:"invalid username or password"};
                },
                logout:async () => {
                    setIsAuthenticated(false);
                    localStorage.removeItem('shopee:auth.state');
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;