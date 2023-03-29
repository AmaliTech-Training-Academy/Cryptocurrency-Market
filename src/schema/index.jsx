import * as yup from "yup"

export const basicSchema = yup.object().shape({
    image: yup.mixed().required('This field is required').test('fileFormat', 'Unsupported file format', (value) => {
        if (value) {
          return ['image/png', 'image/jpeg', 'image/jpg'].includes(value.type);
        }
        return true;
      }),
    firstName: yup.string().required("Please enter first name"),
    lastName: yup.string().required("Please enter last name"),
    email: yup.string().email().required("Please enter email"),
    mobileNumber: yup.number().required("Please enter mobile number"),
    gender: yup.string().required("Please select your gender")
})