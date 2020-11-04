import React, { useCallback, useEffect, useRef, useState } from "react";
import { FieldProps } from "../types";
import { useForm } from "../hooks";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

export default function TitleField(props: FieldProps) {
  const [mounted, setMounted] = useState(false);
  const { value, updateValue } = useForm(props.name);
  const [editorState, setEditorState] = useState(() => {}, [value]);
  // const ref = useRef<HTMLHeadingElement>(null);
  // const handleInput = useCallback(
  //   (e: React.FormEvent<HTMLHeadingElement>) => {
  //     if (ref.current) {
  //       updateValue(ref.current.innerHTML);
  //     }
  //   },
  //   [ref]
  // );

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return <Editor editorKey={props.name} onChange={(edit: EditorState) => {}} />;
}
