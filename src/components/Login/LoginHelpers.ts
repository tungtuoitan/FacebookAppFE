import { constants } from "../../constants";
import {_getBackendToken, _loginDefault} from "./loginApis";

type props = {
    emailOrPhone: string;
    password: string;
    token: string;
    enqueueSnackbar?: any;
}

/**
 * Function to handle login by default
 * @param {string} emailOrPhone - The emailOrPhone of the user
 * @param {string} password - The password of the user
 */
export const loginByDefault = async ({
    token,
    emailOrPhone,
    password,
    enqueueSnackbar,
    
}:props) => {
    try {
        await _loginDefault(token, emailOrPhone, password)
        .then((response: any) => {
            if (response.status === 200) {
                enqueueSnackbar("Login successful", {variant: "success",});
                // const { data } = response;
                // const { token: newToken, userData: newUserData } = data;
                // localStorage.setItem("token", token);
                // localStorage.setItem("userData", JSON.stringify(newUserData));
                // const x = constants.
                // return { newToken, newUserData };
            }
            else {
                console.log("Login failed:", response.statusText);
                console.log("Login failed:", response.data);
                enqueueSnackbar("Login failed", {variant: "error",});
            }
        })
    } 
    catch (error) {
        console.error("Error during login:", error);
        console.log("Login failed:", error);
        enqueueSnackbar("Login failed", {variant: "error",});
    }

}


type onChangeSignUpFormProps = {
    setLoadingLogin: any;
    setUser: any;
    response: any;
    enqueueSnackbar: any;
}
export const handleAfterGoogleLogin = ({
    setLoadingLogin,
    setUser,
    response,
    enqueueSnackbar,
}: onChangeSignUpFormProps) => {
    setLoadingLogin(true);
        _getBackendToken(response.credential)
            .then((res) => {
                if(res.success) {
                    enqueueSnackbar("Login successfully", { variant: 'success' });
                    setUser({
                        id: res.data.id,
                        firstName: res.data.firstName,
                        lastName: res.data.lastName,
                        email: res.data.email,
                        phone: res.data.phone,
                        token: res.data.token,
                        isLoggedIn: true,
                    });
                }
                else {
                    enqueueSnackbar("Login fail", { variant: 'error' });
                }
            })
            .catch((error) => {
                console.error("Error during login:", error);
                enqueueSnackbar("Login fail", { variant: 'error' });
            })
            .finally(() => {
                setLoadingLogin(false);
            })
}