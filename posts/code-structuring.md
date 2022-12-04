---
title: 'Code Structuring'
date: '2021-09-06'
archived: true
---

There's a lot I've been learning through projects I've been working on. But my highlights aren't actually the final product. They're rather the improvements I've made in my formatting and structuring. This post serves as a record of universal styles I'm thinking of — maybe I'll create documentation for this later too.

Something I definitely aspired to in any language is structuring imports. For instance, when using NextJS:

```jsx
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import PostItem from '../components/items/PostItem'
```

React, being the foundation, would come first. Then the imports for the framework, ordered in terms of importance, and finally, JS I've written up for the app.

This is absolutely terrible logic: not only is it convoluted, it constantly takes extreme concentration to preserve this structure.

Instead, a better system is, as demonstrated in a Django app:

```python
import csv
import os

import calendar.models import Event
import calendar.serializers import EventSerializer
```

First divided into system and app imports, they are, hopefully, alphabetically organized automatically. If not, at least they are divided.

In JS, nevertheless, I believe there isn't a clear solution to the import structuring.

I do have firm opinions on components in JS, specifically in frameworks like Vue and React. Component names should always be PascalCase and, critically, should be created whenever there needs to be scoped styling. This is true even for native HTML tags like `<main></main>`.

Rather than:

```jsx
<main className="bg-gray rounded-md text-lg sm:text-xl font-medium"></main>
```

it should be:

```jsx
<Main></Main>
```

from the component:

```jsx
const Main = ({ children }) => (
  <main className="bg-gray rounded-md text-lg sm:text-xl font-medium">
    {children}
  </main>
)
```

This makes it cleanly reusable across pages while keeping the consistency of scoped styles.

There's much more I'm establishing in terms of my structuring standards, but I think this is enough for one introduction.
