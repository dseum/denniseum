export default function Markdown(props) {
  return <article className="space-y-5">{props.children}</article>
}

function Div(props) {
  return <div className="space-y-5">{props.children}</div>
}
Markdown.Div = Div

function P(props) {
  return <p>{props.children}</p>
}
Markdown.P = P

function Pre(props) {
  return (
    <pre className="!my-5 overflow-x-auto rounded bg-[#2e3440] p-6 text-lg sm:!my-8">
      {props.children}
    </pre>
  )
}
Markdown.Pre = Pre

function Code(props) {
  return (
    <code className="inline-block rounded bg-[#2e3440] px-2 py-1 text-lg text-[#D8DEE9]">
      {props.children}
    </code>
  )
}
Markdown.Code = Code
