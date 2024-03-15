import Native from '@/lib/components/Native'

export default function NotFoundPage() {
  return (
    <div className="p-6 md:space-y-2 md:p-8">
      <div className="text-3xl font-bold sm:text-5xl">404 Not Found</div>
      <div>
        Go to <Native.A href="/">site home</Native.A>?
      </div>
    </div>
  )
}
