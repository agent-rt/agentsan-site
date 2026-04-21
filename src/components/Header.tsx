import { Link } from '@tanstack/react-router'
import LanguageSwitcher from './LanguageSwitcher'
import { useI18n } from '#/lib/i18n'

export default function Header() {
  const { messages } = useI18n()

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 px-4 backdrop-blur-lg">
      <nav className="page-wrap flex items-center gap-3 py-3">
        <Link to="/" className="brand no-underline">
          <span className="brand-dot" aria-hidden="true" />
          Agent San
        </Link>

        <div className="ml-auto flex items-center gap-2 text-sm font-medium text-muted-foreground sm:gap-4">
          <Link to="/" className="hover:text-foreground">
            {messages.nav.home}
          </Link>
          <Link to="/about" className="hover:text-foreground">
            {messages.nav.about}
          </Link>
          <a
            href="https://github.com/agent-rt/agentsan-site"
            target="_blank"
            rel="noreferrer"
            className="hidden hover:text-foreground sm:inline-flex"
          >
            GitHub
          </a>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  )
}
