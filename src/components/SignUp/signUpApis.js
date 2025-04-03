
import { constants } from "../../constants";


export const _signUpByDefault = async (params) => {
    const {
        firstName = '',
        lastName = '',
        emailOrPhone = '',
        gender = "",
        day = "",
        month = "",
        year = "",
        newPassword = '',
    } = params;

    const headers = new Headers({
        // Authorization: `Bearer ${token}`,
    });

    const formData = new FormData();
    formData.append("firstName", firstName || '');
    formData.append("lastName", lastName || '');
    formData.append("emailOrPhone", emailOrPhone || '');
    formData.append("gender", gender || '');
    formData.append("day", day || '');
    formData.append("month", month || '');
    formData.append("year", year || '');
    formData.append("newPassword", newPassword || '');

    const options = {
        method: "POST",
        headers: headers,
        body: formData, 
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