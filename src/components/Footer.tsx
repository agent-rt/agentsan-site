import { useI18n } from '#/lib/i18n'

export default function Footer() {
  const year = new Date().getFullYear()
  const { messages } = useI18n()

  return (
    <footer className="mt-20 border-t border-border/70 px-4 py-10 text-sm text-muted-foreground">
      <div className="page-wrap flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="m-0">
          © {year} Agent San. {messages.footer.rights}
        </p>
        <p className="m-0">{messages.footer.tagline}</p>
      </div>
    </footer>
  )
}
