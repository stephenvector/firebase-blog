import React from "react";
import { FieldProps } from "../types";
import { useForm } from "../hooks";

export default function DateField(props: FieldProps) {
  const { value, updateValue } = useForm(props.name);
  return <div>DateField</div>;
}
