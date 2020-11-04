import React, { useMemo, useCallback } from "react";
import { FormContext } from "../components/Form";

export function useForm(name: string) {
  const { values, updateFieldValue } = React.useContext(FormContext);
  const value = useMemo(() => {
    if (values[name]) {
      return values[name];
    }

    return undefined;
  }, [values]);

  const updateValue = useCallback(
    (newValue: any) => {
      updateFieldValue(name, newValue);
    },
    [name]
  );

  return {
    value,
    updateValue,
  };
}
