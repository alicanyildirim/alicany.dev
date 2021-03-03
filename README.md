[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Falicanyildirim%2Falicany.dev)

# alicany.dev

## Overview

- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) powering [`/dashboard`](https://alicany.dev/dashboard), and post views.
- `pages/blog/*` - Static pre-rendered blog pages using [MDX](https://github.com/mdx-js/mdx).
- `pages/dashboard` - [Personal dashboard](https://alicany.dev/dashboard) containing metrics like sales, views, and subscribers.
- `pages/*` - All other static pages.

## Running Locally

```bash
$ git clone https://github.com/alicanyildirim/alicany.dev.git
$ cd alicany.dev
$ yarn
$ yarn dev
```

Create a `.env.local` file similar to [`.env.example`](https://github.com/alicanyildirim/alicany.dev/blob/master/.env.example).

## Built Using

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com)
- [MDX](https://github.com/mdx-js/mdx)
- [Tailwind CSS](https://tailwindcss.com/)
