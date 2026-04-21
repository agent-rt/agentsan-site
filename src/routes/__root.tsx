import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getCookie } from '@tanstack/react-start/server'
import Footer from '../components/Footer'
import Header from '../components/Header'
import appCss from '../styles.css?url'
import { I18nProvider, getHtmlLang, normalizeLocale } from '#/lib/i18n'

const getInitialLocale = createServerFn({ method: 'GET' }).handler(async () => {
  return normalizeLocale(getCookie('agentsan.locale.v2'))
})

export const Route = createRootRoute({
  loader: () => getInitialLocale(),
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Agent San | Agent Apps Platform' },
      {
        name: 'description',
        content:
          'Agent San is a family of agent applications for real-world business workflows.',
      },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const initialLocale = Route.useLoaderData()

  return (
    <html lang={getHtmlLang(initialLocale)}>
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased [overflow-wrap:anywhere]">
        <I18nProvider initialLocale={initialLocale}>
          <Header />
          {children}
          <Footer />
        </I18nProvider>
        <Scripts />
      </body>
    </html>
  )
}
