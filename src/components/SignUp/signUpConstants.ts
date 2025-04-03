

export const signUpConstants = {
    gender: {
        female: {
            code: "01",
            desc: 'Female',
        },
        male: {
            code: "02",
            desc: 'Male',
        },
        other: {
            code: "03",
            desc: 'Other',
        },
    },
    errorContent: {
        firstName: 'First name is required',
        lastName: 'Last name is required',
        emailOrPhone: 'You’ll use this information when you sign in and when you need to reset your password.',
        dayMonthYear: 'It looks like you’ve entered the wrong information. Remember to use your real date of birth.',
        newPassword: 'Enter a password with a minimum of 6 characters including letters, numbers, punctuation marks (such as ! and &).',
    }
}