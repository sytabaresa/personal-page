import { renderToStream } from 'react-streaming/server'
import React from 'react'
import { escapeInject } from 'vite-plugin-ssr'
import { PageShell } from './PageShell'
import { getPageProps } from './getPageTitle'
import type { PageContextServer } from './types'
import logoUrl from './logo.svg'

export { render }
export { passToClient }

const passToClient = ['pageProps', 'documentProps', 'urlPathname', 'posts']


export { onBeforeRender }

async function onBeforeRender(pageContext: PageContextServer) {
  const tposts = import.meta.glob('/pages/posts/*.page.mdx', { import: 'documentProps', eager: true })
  // console.log('Posts', posts)
  const posts = Object.keys(tposts).map(k => ({ slug: k.match(/\/pages\/posts\/(\w+)\.page\.mdx/)?.[1] ?? '', ...tposts[k] as any }))
  return { pageContext: { posts } }
}

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext

  // console.log(pageContext)

  const stream = await renderToStream(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>,
    // We don't need react-streaming for this app. (We use it merely to showcase that VPS can handle react-streaming with a pre-rendered app. Note that using react-streaming with pre-rendering can make sense if we want to be able to use React's latest <Suspsense> techniques.)
    { disable: true }
  )

  const { title, description } = getPageProps(pageContext)

  const documentHtml = escapeInject`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="${logoUrl}" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${!!description ? escapeInject`<meta name="description" content="${description}" />` : ''}
    <title>${title}</title>
  </head>
  <body>
  <div id="page-view">${stream}</div>
</body>
</html>`

  return {
    documentHtml,
    // See https://vite-plugin-ssr.com/stream#initial-data-after-stream-end
    pageContext: async () => {
      return {
        someAsyncProps: 42
      }
    }
  }
}