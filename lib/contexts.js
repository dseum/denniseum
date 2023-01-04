import { createContext } from 'react'

export const FirstLoadContext = createContext({
  state: false,
  set: value => value
})
