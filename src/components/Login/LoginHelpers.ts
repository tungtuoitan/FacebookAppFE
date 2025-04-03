import { constants } from "../../constants";
import {_loginDefault} from "./loginApis";

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
