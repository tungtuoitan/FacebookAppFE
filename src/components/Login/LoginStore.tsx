
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";


interface ContextData {
    emailOrPhone: string;
    setEmailOrPhone: Dispatch<SetStateAction<string>>;
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
    showPassword: boolean;
    setShowPassword: Dispatch<SetStateAction<boolean>>;
};
const DefaultValue: ContextData = {
    emailOrPhone: '',
    setEmailOrPhone: () => { },
    password: '',
    setPassword: () => { },
    showPassword: false,
    setShowPassword: () => { }
};

const LoginStore = createContext<ContextData>(DefaultValue);
export const useLoginStore = () => useContext(LoginStore);

export const LoginProvider: React.FC<React.PropsWithChildren<React.PropsWithChildren<unknown>>> = ({ children }) => {
    const [emailOrPhone, setEmailOrPhone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <LoginStore.Provider
            value={{
                emailOrPhone,
                setEmailOrPhone,
                password,
                setPassword,
                showPassword,
                setShowPassword
            }}>
            {children}
        </LoginStore.Provider>
    )
}