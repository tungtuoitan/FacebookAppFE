
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import {User} from "./loginTypes";

interface ContextData {
    emailOrPhone: string;
    setEmailOrPhone: Dispatch<SetStateAction<string>>;
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
    showPassword: boolean;
    setShowPassword: Dispatch<SetStateAction<boolean>>;
    loadingLogin: boolean;
    setLoadingLogin: Dispatch<SetStateAction<boolean>>;
    user: User;
    setUser: Dispatch<SetStateAction<User>>; // Assuming user is an object, you can change the type accordingly
};
const DefaultValue: ContextData = {
    emailOrPhone: '',
    setEmailOrPhone: () => { },
    password: '',
    setPassword: () => { },
    showPassword: false,
    setShowPassword: () => { },
    loadingLogin: false,
    setLoadingLogin: () => { },
    user: {} as User,
    setUser: () => { },
};

const LoginStore = createContext<ContextData>(DefaultValue);
export const useLoginStore = () => useContext(LoginStore);

export const LoginProvider: React.FC<React.PropsWithChildren<React.PropsWithChildren<unknown>>> = ({ children }) => {
    const [emailOrPhone, setEmailOrPhone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [loadingLogin, setLoadingLogin] = useState<boolean>(false);
    const [user, setUser] = useState<User>({} as User); // Assuming user is an object, you can change the type accordingly

    return (
        <LoginStore.Provider
            value={{
                emailOrPhone,
                setEmailOrPhone,
                password,
                setPassword,
                showPassword,
                setShowPassword,
                loadingLogin,
                setLoadingLogin,
                user,
                setUser,
            }}>
            {children}
        </LoginStore.Provider>
    )
}