
export const constants = {
    env: {
        timeline: {
            pro: {
                hostname: "157.66.101.214", // hostname is IP, cauze we dont have domain name
                baseUrl: "http://157.66.101.214:5000/",
            },
            loc: {
                hostname: "localhost",
                baseUrl: "https://localhost:5000/",
            },
        },
        getBaseUrl: function () {
            switch (window.location.hostname) {
                case this.timeline.pro.hostname:
                    return this.timeline.pro.baseUrl;
                case this.timeline.loc.hostname:
                    return this.timeline.loc.baseUrl;
                default:
                    return this.timeline.loc.baseUrl;
            }
        },
    },


    // 4. API Endpoints
    endpoints: {
        login: "auth/login",
    },
    accessRightsComponents: {
        finShark: "finShark",
        learnCSharp: "learnCSharp",
        nothing: "nothing",
    },

    // Locales
    locales: {
        "en-au": "en-au",
        "en-ca": "en-ca",
        "en-gb": "en-gb",
        "en-ie": "en-ie",
        "en-nz": "en-nz",
        "en-us": "en-us",
        "nl-be": "nl-be",
        nl: "nl",
        sk: "sk",
        cs: "cs",
        "zh-cn": "zh-cn",
        "zh-hk": "zh-hk",
        "zh-tw": "zh-tw",
        ja: "ja",
        "fr-ca": "fa-ca",
        "fr-ch": "fa-ch",
        fr: "fr",
        "vi-vn": "vi-vn",
    },
    // getLocaleLanguage: () => {
    //     const locales = constants.locales;
    //     let localeLanguage = "en-us";
    //     const options = { year: "numeric", month: "numeric", day: "numeric" };
    //     if (locales && Object.keys(locales).length > 0) {
    //         const localDateString = new Date().toLocaleDateString();
    //         let found = false;
    //         Object.keys(locales).map((loc: string) => {
    //             if (
    //                 localDateString ===
    //                     new Date().toLocaleDateString(loc, options) &&
    //                 !found
    //             ) {
    //                 localeLanguage = loc;
    //                 found = true;
    //             }
    //             return loc;
    //         });
    //     }
    //     return localeLanguage;
    // },
};
