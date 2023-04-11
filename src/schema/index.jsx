import * as yup from "yup"

export const basicSchema = yup.object().shape({
    firstName: yup.string().required("Please enter first name"),
    lastName: yup.string().required("Please enter last name"),
    email: yup.string().email().required("Please enter email"),
   mobileNumber: yup.number().required("Please enter mobile number"),
    gender: yup.string().required("Please select your gender")
})

export const passswordSchema = yup.object().shape({
  currentPassword: yup.string().min(6, "Password must match current password").required("Incorrect password. Try again !"),
  newPassword: yup.string().min(6, "Password must be at least 6 characters").required("Enter new password"),
  confirmPassword: yup.string().oneOf([yup.ref("newPassword"), null], "Passwords must match").required("Passwords must match")
 
})