import * as Yup from 'yup';
import 'yup-phone';

export const signUpSchema = Yup.object({
  Name: Yup.string().min(2).max(25).required("Please enter your name"),
  Email: Yup.string().email().required("Please enter your email"),
  PhoneNumber: Yup.string().min(7).phone(null, "Invalid phone number").required("Invalid Phone Number")

})