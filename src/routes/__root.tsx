import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import appCss from '../styles.css?url'
import { I18nProvider } from '#/lib/i18n'

export const Route = createRootRoute({
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
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased [overflow-wrap:anywhere]">
        <I18nProvider>
          <Header />
          {children}
          <Footer />
        </I18nProvider>
        <Scripts />
      </body>
    </html>
  )
}
