import React from "react"

type SiteTitleProps = {
  siteTitle: string
}

export default function SiteTitle(props: SiteTitleProps) {
  return (
    <div>{props.siteTitle}</div>
  )
}
