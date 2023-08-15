import { Dispatch, SetStateAction } from "react"

export interface IFormProps {
  form: {
    [key: string] : string
  },
  setForm: Dispatch<SetStateAction<{}>>
}