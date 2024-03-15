export default function Wrapper({
  children,
  condition,
  wrapper,
}: {
  children: React.ReactNode
  condition: boolean
  wrapper: React.FC<{ children: React.ReactNode; [key: string]: any }>
}) {
  const InnerWrapper = wrapper
  return condition ? <InnerWrapper>{children}</InnerWrapper> : <>{children}</>
}
