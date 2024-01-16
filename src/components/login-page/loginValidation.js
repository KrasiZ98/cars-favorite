export default function loginValidation(formValue) {

    const error = {};

    if (formValue.email === '') {
        error.email = 'Email is required!!!';
    }

    if (formValue.password === '') {
        error.password = 'Password is required!!!';
    }

    return error;
}
