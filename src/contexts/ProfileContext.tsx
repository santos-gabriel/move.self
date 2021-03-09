import { createContext, ReactNode, useState } from "react";


interface ProfileProviderData {
    userName: string;
    userImg: string;
    handleUserName: (userName: string) => void;
    handleUserImg: (userImg: string) => void;
}

interface ProfileProviderProps {
    children: ReactNode;
}

export const ProfileContext = createContext ({} as ProfileProviderData);

export function ProfileProvider ({children} : ProfileProviderProps) {
    const [ userName, setUserName ] = useState("");
    const [ userImg, setUserImg ] = useState("");

    function handleUserName(userName: string) {
        setUserName(userName);
    }
    
    function handleUserImg (userImg: string) {
        setUserImg(userImg);
    }

    return (
        <ProfileContext.Provider value={{userName, userImg, handleUserName, handleUserImg}}>
            {children}
        </ProfileContext.Provider>
    );
}