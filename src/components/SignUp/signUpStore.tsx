
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import {SignUpFormErrors} from "./signUpTypes";

interface ContextData {
    signUpErrors: SignUpFormErrors;
    setSignUpErrors: Dispatch<SetStateAction<SignUpFormErrors>>;
    firstTimeInit: boolean;
    setFirstTimeInit: Dispatch<SetStateAction<boolean>>;
    
};
const DefaultValue: ContextData = {
    signUpErrors: {} as SignUpFormErrors,
    setSignUpErrors: () => {},
    firstTimeInit: true,
    setFirstTimeInit: () => {},
};

const SignUpStore = createContext<ContextData>(DefaultValue);
export const useSignUpStore = () => useContext(SignUpStore);

export const SignUpProvider: React.FC<React.PropsWithChildren<React.PropsWithChildren<unknown>>> = ({ children }) => {
    const [signUpErrors, setSignUpErrors] = useState<SignUpFormErrors>({} as SignUpFormErrors);
    const [firstTimeInit, setFirstTimeInit] = useState<boolean>(true);
    

    return (
        <SignUpStore.Provider
            value={{
                signUpErrors,
                setSignUpErrors,
                firstTimeInit,
                setFirstTimeInit,
            }}>
            {children}
        </SignUpStore.Provider>
    )
}