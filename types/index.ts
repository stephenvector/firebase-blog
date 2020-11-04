export type Post = {
  title: string,
  content: string,
  date: Date,
}

export type Posts = {
  [postId: string]: Post
}

export type FormValues = {[key: string]: any}

export enum FormState {
  Initial = "initial"
}

export enum FormSubmitResult {
  Success = "success",
  Error = "error"
}

export type FormContextShape = {
  formState: FormState,
  values: FormValues,
  updateFieldValue: (fieldName: string, value: any) => void
}

export type FieldProps = {
  name: string;
}
