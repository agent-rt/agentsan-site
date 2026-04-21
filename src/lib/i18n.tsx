import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type Locale = 'en' | 'zh' | 'ja'

const LOCALE_STORAGE_KEY = 'agentsan.locale'

const META_DESCRIPTION =
  'Agent San is a family of agent applications for real-world business workflows.'

type Messages = {
  metaTitle: string
  metaDescription: string
  nav: {
    home: string
    about: string
  }
  hero: {
    badge: string
    titleLine1: string
    titleLine2: string
    description: string
    primaryCta: string
    secondaryCta: string
  }
  highlights: Array<{
    title: string
    body: string
  }>
  matrix: {
    title: string
    badge: string
    items: Array<{
      name: string
      detail: string
      state: string
    }>
  }
  about: {
    badge: string
    title: string
    body: string
  }
  footer: {
    rights: string
    tagline: string
  }
  language: {
    label: string
    en: string
    zh: string
    ja: string
  }
}

const messages: Record<Locale, Messages> = {
  en: {
    metaTitle: 'Agent San | Agent Apps Platform',
    metaDescription: META_DESCRIPTION,
    nav: {
      home: 'Home',
      about: 'About',
    },
    hero: {
      badge: 'Agent Apps Platform',
      titleLine1: 'Agent San',
      titleLine2: 'A family of agents for real business workflows',
      description:
        'Agent San is the umbrella name for a suite of agent applications designed for production teams: orchestrate, connect, govern, and ship.',
      primaryCta: 'Open agentsan.app',
      secondaryCta: 'Explore product direction',
    },
    highlights: [
      {
        title: 'Multi-agent collaboration',
        body: 'Split research, execution, and validation into reusable agent pipelines.',
      },
      {
        title: 'Enterprise integrations',
        body: 'Connect internal wiki, tickets, payments, and databases to real workflows.',
      },
      {
        title: 'Observability and governance',
        body: 'Track traces, context, and policy decisions for audit and optimization.',
      },
    ],
    matrix: {
      title: 'Product Matrix',
      badge: 'Evolving',
      items: [
        {
          name: 'Agent San Studio',
          detail: 'Manage agents, prompts, and execution history in one workspace.',
          state: 'Private Beta',
        },
        {
          name: 'Agent San Flow',
          detail: 'Orchestrate multi-agent workflows with human checkpoints and rollback.',
          state: 'Design Partner',
        },
        {
          name: 'Agent San Guard',
          detail: 'Apply permission boundaries, policy checks, and runtime alerts.',
          state: 'Roadmap',
        },
      ],
    },
    about: {
      badge: 'About Agent San',
      title: 'From demo AI to production agents',
      body: 'Agent San focuses on practical rollout with standardized agent components, connectors, and governance capabilities, so teams can ship incrementally by business priority.',
    },
    footer: {
      rights: 'All rights reserved.',
      tagline: 'A family of practical Agent applications.',
    },
    language: {
      label: 'Language',
      en: 'EN',
      zh: '中文',
      ja: '日本語',
    },
  },
  zh: {
    metaTitle: 'Agent San | Agent 应用平台',
    metaDescription: META_DESCRIPTION,
    nav: {
      home: '首页',
      about: '关于',
    },
    hero: {
      badge: 'Agent 应用平台',
      titleLine1: 'Agent San',
      titleLine2: '一组面向真实业务流程的 Agent 应用',
      description:
        'Agent San 是一系列 Agent 应用的统称，面向生产团队，帮助你把 AI 能力稳定接入业务：可编排、可连接、可治理、可上线。',
      primaryCta: '打开 agentsan.app',
      secondaryCta: '了解产品方向',
    },
    highlights: [
      {
        title: '多 Agent 协作',
        body: '将研究、执行、校验拆分为可复用的 Agent 流水线。',
      },
      {
        title: '企业系统连接',
        body: '连接内部 Wiki、工单、支付与数据库，直接进入业务闭环。',
      },
      {
        title: '可观测与治理',
        body: '追踪调用链路、上下文和策略决策，便于审计与优化。',
      },
    ],
    matrix: {
      title: '应用矩阵',
      badge: '持续演进',
      items: [
        {
          name: 'Agent San Studio',
          detail: '统一管理团队 Agent、提示词与执行历史。',
          state: '内测中',
        },
        {
          name: 'Agent San Flow',
          detail: '编排多 Agent 工作流，支持人工检查点与回滚。',
          state: '设计伙伴',
        },
        {
          name: 'Agent San Guard',
          detail: '提供权限边界、策略校验与运行时告警。',
          state: '路线图',
        },
      ],
    },
    about: {
      badge: '关于 Agent San',
      title: '从 Demo AI 到 Production Agent',
      body: 'Agent San 聚焦可落地的企业实践，通过标准化 Agent 组件、连接器和治理能力，让团队按业务优先级逐步上线。',
    },
    footer: {
      rights: '版权所有。',
      tagline: '一组可落地的 Agent 应用。',
    },
    language: {
      label: '语言',
      en: 'EN',
      zh: '中文',
      ja: '日本語',
    },
  },
  ja: {
    metaTitle: 'Agent San | Agentアプリ基盤',
    metaDescription: META_DESCRIPTION,
    nav: {
      home: 'ホーム',
      about: '概要',
    },
    hero: {
      badge: 'Agentアプリ基盤',
      titleLine1: 'Agent San',
      titleLine2: '実業務向けのAgentアプリ群',
      description:
        'Agent San は、業務現場で使える Agent アプリの総称です。オーケストレーション、連携、ガバナンス、運用までを一貫して支援します。',
      primaryCta: 'agentsan.app を開く',
      secondaryCta: 'プロダクト方針を見る',
    },
    highlights: [
      {
        title: 'マルチAgent協調',
        body: '調査・実行・検証を分離し、再利用可能なAgentパイプラインを構築。',
      },
      {
        title: '企業システム連携',
        body: '社内Wiki、チケット、決済、DBと接続し、業務フローに直結。',
      },
      {
        title: '可観測性とガバナンス',
        body: 'トレース、コンテキスト、ポリシー判定を記録し監査と改善を容易に。',
      },
    ],
    matrix: {
      title: 'プロダクトマトリクス',
      badge: '継続進化',
      items: [
        {
          name: 'Agent San Studio',
          detail: 'Agent、プロンプト、実行履歴を1つのワークスペースで管理。',
          state: 'Private Beta',
        },
        {
          name: 'Agent San Flow',
          detail: 'マルチAgentワークフローを編成し、人手チェックとロールバックに対応。',
          state: 'Design Partner',
        },
        {
          name: 'Agent San Guard',
          detail: '権限境界、ポリシー検査、実行時アラートを提供。',
          state: 'Roadmap',
        },
      ],
    },
    about: {
      badge: 'Agent Sanについて',
      title: 'デモAIから本番Agentへ',
      body: 'Agent San は、標準化されたAgentコンポーネント、コネクタ、ガバナンス機能により、チームが業務優先度に沿って段階的に導入できるよう設計されています。',
    },
    footer: {
      rights: 'All rights reserved.',
      tagline: '実運用に耐えるAgentアプリ群。',
    },
    language: {
      label: '言語',
      en: 'EN',
      zh: '中文',
      ja: '日本語',
    },
  },
}

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  messages: Messages
}

const I18nContext = createContext<I18nContextValue | null>(null)

function getStoredLocale(): Locale {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const value = window.localStorage.getItem(LOCALE_STORAGE_KEY)
  if (value === 'en' || value === 'zh' || value === 'ja') {
    return value
  }

  return 'en'
}

const htmlLangMap: Record<Locale, string> = {
  en: 'en',
  zh: 'zh-CN',
  ja: 'ja',
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    const stored = getStoredLocale()
    setLocaleState(stored)
  }, [])

  useEffect(() => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
    document.documentElement.lang = htmlLangMap[locale]
  }, [locale])

  const value = useMemo<I18nContextValue>(() => {
    return {
      locale,
      setLocale: setLocaleState,
      messages: messages[locale],
    }
  }, [locale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }

  return context
}
