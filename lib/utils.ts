import clsx, { type ClassValue } from 'clsx'
import { Children } from 'react'
import { twMerge } from 'tailwind-merge'

export function cn(...classNames: Array<ClassValue>) {
  return twMerge(clsx(...classNames))
}

export type ReactSlot = React.ReactElement<
  {
    children: React.ReactNode
  },
  React.JSXElementConstructor<any> & { displayName: string }
>

export const slot = {
  insert: (
    displayName: string,
    component: React.FC<any> = ({ children }) => {
      return children as ReactSlot
    },
  ) => {
    component.displayName = displayName
    return component
  },
  select: (children: ReactSlot | Array<ReactSlot>, displayName: string) => {
    return Children.map(children, (child: ReactSlot) => {
      if (child.type.displayName === displayName) {
        return child
      }
    })
  },
}
