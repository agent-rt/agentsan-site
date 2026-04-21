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
import { cn } from '#/lib/utils'

export const Route = createFileRoute('/')({ component: HomePage })

const highlights = [
  {
    title: '多 Agent 协作',
    body: '将研究、执行、校验分配给不同 Agent，形成可复用的任务流水线。',
  },
  {
    title: '企业系统连接',
    body: '把 Wiki、工单、支付、数据库接入 Agent，让输出直接进入业务流程。',
  },
  {
    title: '可观测与治理',
    body: '记录调用轨迹、上下文和策略结果，便于审计、优化与风险控制。',
  },
]

const products = [
  {
    name: 'Agent San Studio',
    detail: '统一管理团队 Agent、提示模板和执行记录。',
    state: 'Private Beta',
  },
  {
    name: 'Agent San Flow',
    detail: '以流程方式编排多 Agent，支持人机协同与自动回滚。',
    state: 'Design Partner',
  },
  {
    name: 'Agent San Guard',
    detail: '提供权限边界、策略拦截和异常告警，保障生产安全。',
    state: 'Roadmap',
  },
]

function HomePage() {
  return (
    <main className="page-wrap px-4 pb-16 pt-10 sm:pt-14">
      <section className="hero-panel rounded-3xl p-6 sm:p-10">
        <Badge variant="secondary">Agent Apps Platform</Badge>
        <h1 className="mt-5 font-heading text-4xl leading-tight font-semibold tracking-tight text-foreground sm:text-6xl">
          Agent San
          <br />
          一组面向真实场景的 Agent 应用
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          Agent San 是一系列 Agent 应用的统称，目标是让团队把 AI 能力稳定接入日常业务：
          能编排、能连接、能治理、能上线。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://agentsan.app"
            className={cn(buttonVariants({ size: 'lg' }), 'no-underline')}
          >
            打开 agentsan.app
          </a>
          <Link
            to="/about"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'no-underline'
            )}
          >
            了解产品方向
          </Link>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
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
          <h2 className="font-heading text-2xl font-semibold tracking-tight">应用矩阵</h2>
          <Badge variant="outline">持续演进</Badge>
        </div>
        <Separator className="my-5" />
        <div className="grid gap-4 lg:grid-cols-3">
          {products.map((item) => (
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
