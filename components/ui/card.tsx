import * as React from "react"

export function Card(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={[
        "rounded-[12px] overflow-hidden bg-[#fbfcff]",
        "border border-black/[0.04]",
        "transition-all duration-[0.25s] ease",
        "hover:border-black/[0.08]",
        props.className || ""
      ].join(" ")}
    />
  )
}

export function CardBody(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={["p-4 sm:p-6 md:p-8", props.className || ""].join(" ")} />
}

export function CardHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={["p-6 md:p-8 pb-4 md:pb-4", props.className || ""].join(" ")} />
}
