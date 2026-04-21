import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 px-4 backdrop-blur-lg">
      <nav className="page-wrap flex items-center gap-4 py-3">
        <Link to="/" className="brand no-underline">
          <span className="brand-dot" aria-hidden="true" />
          Agent San
        </Link>

        <div className="ml-auto flex items-center gap-4 text-sm font-medium text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            首页
          </Link>
          <Link to="/about" className="hover:text-foreground">
            关于
          </Link>
          <a
            href="https://github.com/agent-rt/agentsan-site"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  )
}
