import {_loginDefault} from "../Login/loginApis";
import {_signUpByDefault} from "./signUpApis";

type onChangeSignUpFormProps = {
    signUpForm: any;
    setSignUpForm: any;
    fieldName: string;
    fieldValue: string|number;
}

/**
 * Function to handle login by default
//  * @param {string} password - The password of the user
 */
export const onChangeSignUpForm = async ({
    signUpForm,
    setSignUpForm,
    fieldName,
    fieldValue,
}:onChangeSignUpFormProps) => {
    switch (fieldName) {
        case "firstName":
        case "lastName":
        case "emailOrPhone":
        case "newPassword":
            setSignUpForm({[fieldName]: fieldValue});
            break;
        case "day":
        case "month":
        case "year":
            setSignUpForm({[fieldName]: fieldValue});
            break;
        case "gender":
            console.log('from gender', fieldValue);
            setSignUpForm({[fieldName]: fieldValue});
            break;
    
        default:
            break;
    }
    setSignUpForm((prevState: any) => ({
        ...prevState,
        [fieldName]: fieldValue,
    }));

}


type signUpProps = {
    signUpForm: any;
    setSignUpForm: any;
    user: any;
    setUser: any;
    enqueueSnackbar?: any;
}
export const signUpByDefault = ({
    signUpForm,
    setSignUpForm,
    user,
    setUser,
    enqueueSnackbar,
}:signUpProps) => {
    _signUpByDefault(signUpForm)
        .then((res: any) => {
            if (res.success) {
                enqueueSnackbar("Sign Up successful", {variant: "success"});
                setUser({
                    ...user,
                    id: res.data.id,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    email: res.data.email,
                    phone: res.data.phone,
                    token: res.data.token,
                    isLoggedIn: true,
                })

            }
            else {
                console.log("Sign Up failed:", res.statusText);
                console.log("Sign Up failed:", res.data);
                enqueueSnackbar("Sign Up failed", {variant: "error",});
            }
        })
}




// SMALL FUNCTIONS

/**
 * 
 */
export const getAllDaysInMonth = (month: number, year: number) => {
    const date = new Date(year, month, 0);
    const totalDays = date.getDate();
    const daysList = [];
    
    for (let day = 1; day <= totalDays; day++) {
        daysList.push({ code: day.toString(), desc: day.toString() });
    }
    
    return daysList;
};
export const getAllMonths = () => {
    const months = [
        { code: "1", desc: "January" },
        { code: "2", desc: "February" },
        { code: "3", desc: "March" },
        { code: "4", desc: "April" },
        { code: "5", desc: "May" },
        { code: "6", desc: "June" },
        { code: "7", desc: "July" },
        { code: "8", desc: "August" },
        { code: "9", desc: "September" },
        { code: "10", desc: "October" },
        { code: "11", desc: "November" },
        { code: "12", desc: "December" },
    ];
    return months;
}

export const getAllYearsFrom1900ToCurrent = () => {
    const currentYear = new Date().getFullYear();
    const years = [];

    for (let year = 1900; year <= currentYear; year++) {
        years.push({ code: year.toString(), desc: year.toString() });
    }

    return years.reverse(); // Reverse the array to have the most recent year first
}