import * as yup from "yup"

export const basicSchema = yup.object().shape({
    firstName: yup.string().email("Enter first name").required("Required"),
    lastName: yup.string().email("Enter first name").required("Required"),
    email: yup.string().email("Enter email").required("Required"),


})