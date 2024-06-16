import Native from '@/lib/components/Native'
import { ReactSlot, cn, slot } from '@/lib/utils'

export default function ColListLayout({
  children,
}: {
  children: ReactSlot | Array<ReactSlot>
}) {
  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-10">
      <Native.P className="px-6 pt-6 sm:px-10 sm:pt-8 lg:pr-0">
        {slot.select(children, 'Col')}
      </Native.P>
      <div className="lg:h-main col-span-2 px-6 pt-8 sm:px-10 lg:overflow-y-scroll lg:pl-0">
        <ol>{slot.select(children, 'List')}</ol>
      </div>
    </div>
  )
}

ColListLayout.Col = slot.insert('Col')
ColListLayout.List = slot.insert('List')

function ListItem({
  className,
  children,
}: {
  className?: string
  children: ReactSlot | Array<ReactSlot>
}) {
  const descriptionSlot = slot.select(children, 'Description')
  return (
    <li
      className={cn(
        'mb-10 md:mb-16 md:border md:border-black',
        descriptionSlot.length === 0 ? 'md:pb-1' : 'md:pb-4',
        className,
      )}
    >
      <div className="flex flex-col-reverse gap-1 md:flex-row md:justify-between md:gap-10">
        {slot.select(children, 'Title')}
        <div>{slot.select(children, 'Sub')}</div>
      </div>
      {descriptionSlot}
    </li>
  )
}
ColListLayout.ListItem = ListItem
ListItem.Title = slot.insert('Title', ({ className, children }) => (
  <div
    className={cn(
      'text-3xl leading-snug sm:text-[2.5rem] sm:leading-snug md:pl-4 md:text-5xl md:leading-snug',
      className,
    )}
  >
    {children}
  </div>
))
ListItem.Sub = slot.insert('Sub', ({ className, children }) => (
  <div
    className={cn(
      'text-xl italic sm:text-2xl sm:not-italic md:border-b md:border-l md:border-black md:px-1 md:text-3xl',
      className,
    )}
  >
    {children}
  </div>
))
ListItem.Description = slot.insert('Description', ({ className, children }) => (
  <p className={cn('mt-1 sm:mt-0 md:px-4', className)}>{children}</p>
))
