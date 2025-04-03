import { useContext, createContext, useReducer } from 'react';

const FormStore = createContext(undefined);

export const useSignUpFormStore = () => useContext(FormStore);

export const initForm = {
    firstName: '',
    lastName: '',
    emailOrPhone: '',
    gender: "01",
    day: "1",
    month: "1",
    year: new Date().getFullYear().toString() ?? "2025",
    newPassword: '',
};

export const SignUpFormStoreProvider = ({ children }) => {
    const [signUpForm, setSignUpForm] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        initForm
    );

    return (
        <FormStore.Provider
            value={[signUpForm, setSignUpForm]}>
            {children}
        </FormStore.Provider>
    );
};