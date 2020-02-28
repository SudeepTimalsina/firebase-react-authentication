import React, { useEffect, useState } from "react";
import firebase from "./firebase";

type ContextProps = {
    user: firebase.User | null;
    authenticated: boolean;
    setUser: any;
    loadingAuthState: boolean;
};

export const AuthContext = React.createContext<Partial<ContextProps>>({});

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState(null as firebase.User | null);
    const [loadingAuthState, setLoadingAuthState] = useState(true);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user: any) => {
            setUser(user);
            setLoadingAuthState(false);
            console.log(user, 'ap user');
            console.log(user !== null, 'ap authenticated');
        });
    }, []);

    return (
        <AuthContext.Provider 
            value={{
                user,
                authenticated: user !== null,
                setUser,
                loadingAuthState
            }}>
                {children}
        </AuthContext.Provider>
    );
}