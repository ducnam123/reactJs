import * as Yup from 'yup'

export interface IProduct {  // tất cả những gì liên quan đến interface thêm chữ I đằng trước
  id: number,
  name: string,
  price: number,
  original_price: number,
  description: string,
  images: {base_url: string}[],
  brand: {id: number,name:string,slug: string},
  specifications: Ispecifications[]
}

interface Ispecifications {
  name: string,
  attributes: {code: string, value: string, name: string}[]
}

export const signupSchema = Yup.object({
  firstName: Yup.string().required("trường dữ liệu bắt buộc"),
  lastName: Yup.string().required("trường dữ liệu bắt buộc"),
  email: Yup.string().required("Email sai định dạng").required("trường dữ liệu bắt buộc"),
  password: Yup.string().min(6).required("trường dữ liệu bắt buộc"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password")],"mật khẩu không khớp")
})

export type SignupForm = Yup.InferType<typeof signupSchema>

export const signinSchema = Yup.object({
  email: Yup.string().email("Email sai định dạng").required("trường dữ liệu bắt buộc"),
  password: Yup.string().min(6).required("trường dữ liệu bắt buộc"),
})

export type SigninForm = Yup.InferType<typeof signinSchema>