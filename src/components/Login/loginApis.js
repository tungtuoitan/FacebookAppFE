
import { constants } from "../../constants";


export const _loginDefault = async (token, emailOrPhone, password) => {
    const headers = new Headers({
        Authorization: `Bearer ${token}`,
        // "Accept-Language": constants.getLocaleLanguage(),
    });

    const body = JSON.stringify({
        emailOrPhone: emailOrPhone,
        password: password
    });


    const options = {
        method: "POST",
        headers: headers,
        body
    };

    // URL = env + APIEnpoint + Params
    const res = await window.fetch(`${constants.env.getBaseUrl()}${constants.endpoints.login}`, options);
    if (res.ok) {
        const ret = await res.json();
        return ret;
    } else {
        return Promise.reject(res);
    }
};

export const _getBackendToken = async (googleToken) => {
    const headers = new Headers({
        // Authorization: `Bearer ${token}`,
        // "Accept-Language": constants.getLocaleLanguage(),
    });

    const body = JSON.stringify({
        googleToken: googleToken,
    });


    const options = {
        method: "POST",
        headers: headers,
        body
    };

    // URL = env + APIEnpoint + Params
    const res = await window.fetch(`${constants.env.getBaseUrl()}${constants.endpoints.login}`, options);
    if (res.ok) {
        const ret = await res.json();
        return ret;
    } else {
        return Promise.reject(res);
    }
};

