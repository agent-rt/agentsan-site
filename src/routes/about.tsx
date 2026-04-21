import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '#/components/ui/badge'

export const Route = createFileRoute('/about')({ component: AboutPage })

function AboutPage() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="rounded-3xl border border-border/70 bg-card/90 p-6 sm:p-8">
        <Badge variant="secondary">About Agent San</Badge>
        <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          从 Demo AI 到 Production Agent
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
          Agent San 聚焦企业落地：通过标准化的 Agent 组件、连接器和治理能力，
          让不同团队可以按业务优先级逐步上线 Agent 场景，而不是一次性重构系统。
        </p>
      </section>
    </main>
  )
}
