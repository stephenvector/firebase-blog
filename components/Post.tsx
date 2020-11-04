import React from "react"
import { Post } from "../types"

type PostProps = {
  post: Post
}

export default function Post(props: PostProps) {
  const { title, date, content } = props.post;
  return (
    <div>
      <h1>{title}</h1>
      <time>{date.toLocaleDateString()}</time>
      <div>{content}</div>
    </div>
  )
}
