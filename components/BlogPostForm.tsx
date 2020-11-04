import React, { useCallback } from "react";
import { FormSubmitResult, FormValues } from "../types";
import Form from "./Form";
import DateField from "./DateField";
import EditorField from "./EditorField";
import TitleField from "./TitleField";

export default function BlogPostForm() {
  const handleSubmit = useCallback(async (values: FormValues) => {
    return FormSubmitResult.Success;
  }, []);
  return (
    <Form onSubmit={handleSubmit}>
      <TitleField name="title" />
      <DateField name="date" />
      <EditorField name="content" />
    </Form>
  );
}
