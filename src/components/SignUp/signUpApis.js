
import { constants } from "../../constants";
import {checkPhoneOrEmail} from "./SignUpHelpers";


export const _signUpByDefault = async (params) => {

    const headers = new Headers({
        // Authorization: `Bearer ${token}`,
    });

    const mappedData = {
        first_name: params.firstName || '',
        sur_name: params.lastName || '',
        email: checkPhoneOrEmail(params.emailOrPhone) === "email" ? (params.emailOrPhone || '') : '',
        phone_number: checkPhoneOrEmail(params.emailOrPhone) === "phone" ? (params.emailOrPhone || '') : '',
        gender: Number(params.gender) || '',
        password: params.newPassword || '',
        birthday: `${params.year}-${String(params.month).padStart(2,'0')}-${String(params.day).padStart(2,'0')}` || '',
    }

    const options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(mappedData), 
    };

    // URL = env + APIEndpoint + Params
    const res = await window.fetch(
        `${constants.env.getBaseUrl()}${constants.endpoints.signUpByDefault}`, 
        options
    );

    if (res.ok) {
        const ret = await res.json();
        return ret;
    } else {
        return Promise.reject(res);
    }
};