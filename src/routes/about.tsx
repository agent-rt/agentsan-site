import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '#/components/ui/badge'
import { useI18n } from '#/lib/i18n'

export const Route = createFileRoute('/about')({ component: AboutPage })

function AboutPage() {
  const { messages } = useI18n()

  return (
    <main className="page-wrap px-4 py-12">
      <section className="rounded-3xl border border-border/70 bg-card/90 p-6 sm:p-8">
        <Badge variant="secondary">{messages.about.badge}</Badge>
        <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          {messages.about.title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
          {messages.about.body}
        </p>
      </section>
    </main>
  )
}
