import * as yup from 'yup'

let signupSchema = yup.object().shape({
    email: yup.string().email('Please enter valid email!').required('Email is required.'),
    password: yup.string().min(6, 'Password must have 6 or more characters'),
    firstName: yup.string().matches(/(\w.+\s).+/, 'Enter at least 2 names').required('FirstName is required'),
    lastName: yup.string().required('LastName is required'),
    address: yup.string(),
    age: yup.string(),

})

export {
    signupSchema
}