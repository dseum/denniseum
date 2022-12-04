export default function Markdown(props) {
  return <article className="space-y-3 lg:space-y-5">{props.children}</article>
}

function Div(props) {
  return <div className="space-y-3 lg:space-y-5">{props.children}</div>
}
Markdown.Div = Div

function P(props) {
  return <p>{props.children}</p>
}
Markdown.P = P

function Pre(props) {
  return (
    <pre className="bg-[#2e3440] p-6 !my-5 sm:!my-8 text-lg overflow-x-auto rounded">
      {props.children}
    </pre>
  )
}
Markdown.Pre = Pre

function Code(props) {
  return (
    <code className="bg-[#2e3440] text-[#D8DEE9] px-2 py-1 text-lg rounded inline-block">
      {props.children}
    </code>
  )
}
Markdown.Code = Code
