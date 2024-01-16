export default function registerValidation(formValue) {
    const error = {};

    const EMAIL_PATTERN = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const USERNAME_PATTERN = /^[a-z0-9_-]{3,15}$/g;
    const IMAGE_PATTERN = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;

    if (formValue.email === '') {
        error.email = 'Email is required!!!';
    } else if (!(EMAIL_PATTERN).test(formValue.email)) {
        error.email = 'Email is not valid!!!';
    }

    if (formValue.username === '') {
        error.username = 'Username is required!!!';
    } else if (!(USERNAME_PATTERN).test(formValue.username)) {
        error.username = 'Username is not valid!!!';
    }

    if (formValue.password === '') {
        error.password = 'Password is required!!!';
    } else if (formValue.password.length <= 4) {
        error.password = 'Password must be more than 4 char!!!'
    }

    if (formValue.reppass === '') {
        error.reppass = 'Confirm Password is required!!!';
    } else if (formValue.reppass !== formValue.password) {
        error.reppass = 'Password don\t match!!!'
    }


    if (formValue.image === '') {
        error.image = 'image is required!!!';
    } else if (!(IMAGE_PATTERN).test(formValue.image)) {
        error.image = 'image is not valid!!!';
    }

    return error;
}
