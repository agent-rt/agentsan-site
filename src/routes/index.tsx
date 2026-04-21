import { createFileRoute, Link } from '@tanstack/react-router'
import { Badge } from '#/components/ui/badge'
import { buttonVariants } from '#/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import { Separator } from '#/components/ui/separator'
import { useI18n } from '#/lib/i18n'
import { cn } from '#/lib/utils'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  const { messages } = useI18n()

  return (
    <main className="page-wrap px-4 pb-16 pt-10 sm:pt-14">
      <section className="hero-panel rounded-3xl p-6 sm:p-10">
        <Badge variant="secondary">{messages.hero.badge}</Badge>
        <h1 className="mt-5 font-heading text-4xl leading-tight font-semibold tracking-tight text-foreground sm:text-6xl">
          {messages.hero.titleLine1}
          <br />
          {messages.hero.titleLine2}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          {messages.hero.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://agentsan.app"
            className={cn(buttonVariants({ size: 'lg' }), 'no-underline')}
          >
            {messages.hero.primaryCta}
          </a>
          <Link
            to="/about"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'no-underline'
            )}
          >
            {messages.hero.secondaryCta}
          </Link>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {messages.highlights.map((item) => (
          <Card key={item.title} className="glass-card">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.body}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section className="mt-10 rounded-3xl border border-border/70 bg-card/90 p-6 sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">
            {messages.matrix.title}
          </h2>
          <Badge variant="outline">{messages.matrix.badge}</Badge>
        </div>
        <Separator className="my-5" />
        <div className="grid gap-4 lg:grid-cols-3">
          {messages.matrix.items.map((item) => (
            <Card key={item.name} className="h-full">
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.detail}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="ghost">{item.state}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
