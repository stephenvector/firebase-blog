import React, { useCallback, useMemo, useState } from "react";
import {
  FormContextShape,
  FormState,
  FormValues,
  FormSubmitResult,
} from "../types";

export const FormContext = React.createContext<FormContextShape>({
  formState: FormState.Initial,
  values: {},
  updateFieldValue: () => {},
});

type FormProps = {
  onSubmit: (values: FormValues) => Promise<FormSubmitResult>;
  initialValues?: FormValues;
  children: React.ReactNode;
};

export default function Form<P>(props: FormProps) {
  const [formState, setFormState] = useState<FormState>();
  const [values, setValues] = useState<FormValues>({});

  const handleSubmit = useCallback(() => {
    return props.onSubmit(values);
  }, [values]);

  const updateFieldValue = useCallback(
    (fieldName: string, fieldValue: string) => {
      setValues({ ...values, [fieldName]: fieldValue });
    },
    [values]
  );

  return (
    <FormContext.Provider value={{ values, updateFieldValue, formState }}>
      <form onSubmit={handleSubmit}>{props.children}</form>
    </FormContext.Provider>
  );
}
