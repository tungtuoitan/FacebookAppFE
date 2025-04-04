import {_loginDefault} from "../Login/loginApis";
import {_signUpByDefault} from "./signUpApis";

type onChangeSignUpFormProps = {
    signUpForm: any;
    setSignUpForm: any;
    fieldName: string;
    fieldValue: string|number;
    setFirstTimeInit: any;
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
    setFirstTimeInit,
}:onChangeSignUpFormProps) => {
    setFirstTimeInit(false);

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
    navigate?: any;
}
export const signUpByDefault = ({
    signUpForm,
    setSignUpForm,
    user,
    setUser,
    enqueueSnackbar,
    navigate,
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
                navigate("/home", {replace: true});
            }
            else {
                console.log("Sign Up failed:", res.statusText);
                console.log("Sign Up failed:", res.data);
                enqueueSnackbar("Sign Up failed", {variant: "error",});
            }
        })
}

type ValidateSignUpFormProps = {
    fieldName: string;
    fieldValue: string;
    setSignUpErrors: any;
    signUpErrors: any;
    signUpForm: any;

}
export const validateSignUpForm = ({
    fieldName,
    fieldValue,
    setSignUpErrors,
    signUpErrors,
    signUpForm,
}:ValidateSignUpFormProps) => {
    if(!fieldValue || typeof fieldValue != 'string' || fieldValue.length===0){
        setSignUpErrors(prev => ({...prev, [fieldName]: true}));
        return
    }
    switch (fieldName) {
        case "firstName":
        case "lastName":
            if((/^[a-zA-Z]+([ '-][a-zA-Z]+)*$/.test(fieldValue))=== false || fieldValue.length < 2 || fieldValue.length > 24){
                setSignUpErrors(prev => ({...prev, [fieldName]: true}));
            }
            else{
                setSignUpErrors(prev => ({...prev, [fieldName]: false}));
            }
            break;

        case "day":
        case "month":
        case "year":
            const date = new Date(Number(signUpForm.year), Number(signUpForm.month - 1), Number(signUpForm.day));
            if(date.getFullYear() !== parseInt(signUpForm.year) || date.getMonth() + 1 !== parseInt(signUpForm.month) || date.getDate() !== parseInt(signUpForm.day)) {
                setSignUpErrors(prev => ({...prev, dayMonthYear: true}));
            }
            else {
                setSignUpErrors(prev => ({...prev, dayMonthYear: false}));
            }
            break;

        case "emailOrPhone":
            const type = checkPhoneOrEmail(fieldValue);
            if(type=="unknown"){
                setSignUpErrors(prev => ({...prev, [fieldName]: true}));
            }
            else{
                setSignUpErrors(prev => ({...prev, [fieldName]: false}));
            }
            break;

        case "newPassword":
            if(fieldValue.length < 6 || fieldValue.length > 24 || !/[a-zA-Z]/.test(fieldValue) || !/\d/.test(fieldValue) || !/[!@#$%^&*]/.test(fieldValue)){
                setSignUpErrors(prev => ({...prev, [fieldName]: true}));
            }
            else{
                setSignUpErrors(prev => ({...prev, [fieldName]: false}));
            }
            break;
    }

}








// SMALL FUNCTIONS BELLOW ===================================================================
// ================================================================================

/**
 * 
 */
export const getAllDaysInMonth = () => {
    const totalDays = 31
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


export function checkPhoneOrEmail(x: string): "phone" | "email" | "unknown" {
    const phoneRegex = /^[0-9]{8,15}$/; // Số điện thoại chỉ chứa số, dài từ 8-15 chữ số
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email hợp lệ

    if (phoneRegex.test(x)) return "phone";
    if (emailRegex.test(x)) return "email";
    return "unknown";
}

