import React from "react";
import { FieldProps } from "../types";
import { useForm } from "../hooks";
export default function EditorField(props: FieldProps) {
  const { value, updateValue } = useForm(props.name);
  return (
    <div
      contentEditable
      onInput={(e) => {
        console.log(e.currentTarget.nodeValue);
      }}
    >
      {value}
    </div>
  );
}
