---
title: 'Shift to TypeScript'
date: '2021-07-29'
archived: true
---

I'm a bit late to the TypeScript trend, but I finally decided to try it out. The specific structuring it required as well as the types I had to code and keep track of made the learning curve seem extremely steep. I also thought it was a waste of time. I kept already visualized types when I coded in JavaScript and spending time simply to fit the TypeScript rules seemed like extra fluff. More than that, I liked JavaScript because it wasn't typed; when I was dabbling a few years ago in Java and C++, I was consistently writing more lines of code.

But returning to a strongly typed language after mastering fundamentals was honestly a breath of fresh air. While I'm still learning the basics of TypeScript, implementing it into some simple projects made structuring much simpler. I no longer had keep all knowledge of what each variable represented within the jumble of functions and could rely on TypeScript to figure out contradictions. Even if it took a little more effort to write code, I actually spent less time coding overall.

This was most useful for my utilities. For instance, for simpler and cleaner className joining, I often used the following function:

```jsx
const classNames = (...classes) => classes.filter(Boolean).join(' ')
```

After implementing TypeScript, it didn't realistically change much:

```tsx
const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ')
```

However, the real benefit was when using the utility in different components. This definitely wasn't the most life-changing example, but it was neat in showing a general use case.

A better example is for an folder/file item I needed for a simple project I was making:

```tsx
interface ItemInteface {
    type: string // 'folder' or 'file'
    name: string
    ?href: string
    ?children: ItemInterface[]
}
```

Although not fully accurate as I am still learning, it made sorting and using the item much safer and easier when I was coding. VS Code with its great TypeScript support also autocomplete each property, so I didn't need to waste time typing out the entire name.

One downside I'm finding is the need to memorize the nuances in types for a React component. For example, the different between `ReactNode` and `JSX.Element` was lost on me for a bit. But after I figured it out, I actually had a better understanding of React, so TypeScript is definitely helpful overall.

I'm still early in my TypeScript journey, but I think this will be extremely useful as I make larger applications!
