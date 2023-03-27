import * as yup from 'yup'

export const userSchema = yup.object().shape({
    email:yup.string().email().required(),
    password:yup.string().min(5).max(12).required(),
    confirmPassword:yup.string().min(5).max(12).required(), 
})