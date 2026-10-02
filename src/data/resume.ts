// Types
export interface Link {
  label: string;
  url: string;
}

export interface SkillItem {
  name: string;
  years?: string;
  children?: SkillItem[];
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface CareerEntry {
  title: string;
  period: string;
  overview: string;
  positions: string[];
  phases: string[];
  technologies: string[];
  tasks: string[];
  notes?: string[];
}

export interface InterestSection {
  title: string;
  items: { name: string; description?: string }[];
}

export interface ResumeData {
  name: string;
  nameEn: string;
  links: Link[];
  experienceYears: string;
  freelanceYears: string;
  positions: string[];
  skills: SkillCategory[];
  values: string[];
  strengths: string[];
  growthAreas: string[];
  careerDirection: string[];
  recentTech: InterestSection[];
  interests: InterestSection[];
  books: string[];
  career: CareerEntry[];
}

// Data
export const resume: ResumeData = {
  name: "東海林 昴",
  nameEn: "Subaru Shoji",
  links: [
    { label: "Zenn", url: "https://zenn.dev/suba" },
    { label: "Blog", url: "https://www.simple-web-system.work/" },
    { label: "X", url: "https://x.com/subaru_shoji" },
    { label: "GitHub", url: "https://github.com/subaru-shoji" },
  ],
  experienceYears: "2014年〜",
  freelanceYears: "2016年〜",
  positions: [
    "フルスタックエンジニア（フロント / API / DB / インフラ）",
    "サーバーサイド / API エンジニア",
    "インフラ / DB 設計",
    "Web アプリケーションエンジニア",
    "モバイルエンジニア(Flutter)",
    "テックリード",
    "アーキテクト",
  ],
  skills: [
    {
      category: "フロントエンド",
      items: [
        {
          name: "TypeScript",
          years: "7年",
          children: [
            {
              name: "React",
              children: [
                {
                  name: "React Router",
                },
                {
                  name: "Next.js",
                },
                {
                  name: "tailwind",
                },
              ],
            },
            {
              name: "SolidJS",
            },
            {
              name: "Angular",
            },
          ],
        },
      ],
    },
    {
      category: "サーバーサイド",
      items: [
        {
          name: "Ruby",
          years: "4年",
          children: [
            {
              name: "Ruby on Rails",
            },
            {
              name: "RBS",
            },
          ],
        },
        {
          name: "OpenAPI",
          years: "2年",
          children: [
            {
              name: "TypeSpec",
            },
          ],
        },
        {
          name: "Golang",
          years: "2年",
          children: [
            {
              name: "Echo",
            },
            {
              name: "Gin",
            },
          ],
        },
        {
          name: "Python",
          years: "2年",
          children: [
            {
              name: "Flask",
            },
          ],
        },
        {
          name: "Kotlin",
          years: "0.5年",
          children: [
            {
              name: "Spring Boot",
            },
            {
              name: "Gauge",
            },
          ],
        },
        {
          name: "Clojure",
          years: "0.5年",
          children: [
            {
              name: "duct",
            },
          ],
        },
      ],
    },
    {
      category: "モバイル",
      items: [
        {
          name: "Dart",
          years: "3.5年",
          children: [
            {
              name: "Flutter",
              children: [
                {
                  name: "Riverpod",
                },
                {
                  name: "BLoC",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      category: "インフラ / DB",
      items: [
        {
          name: "AWS",
          years: "3.5年",
          children: [
            {
              name: "Amplify",
            },
            {
              name: "Lambda",
            },
            {
              name: "Step Functions",
            },
            {
              name: "ECS",
            },
            {
              name: "Fargate",
            },
            {
              name: "S3",
            },
            {
              name: "CDK",
            },
          ],
        },
        {
          name: "Docker",
          years: "4年",
        },
        {
          name: "DB",
          children: [
            {
              name: "MySQL",
            },
            {
              name: "PostgreSQL",
            },
            {
              name: "Oracle",
              years: "2年",
            },
          ],
        },
        {
          name: "Linux",
          years: "9年",
          children: [
            {
              name: "ArchLinux",
            },
            {
              name: "Debian",
            },
          ],
        },
        {
          name: "ShellScript",
          years: "8年",
          children: [
            {
              name: "bash",
            },
            {
              name: "fish",
            },
          ],
        },
        {
          name: "GCP",
          years: "1年",
          children: [
            {
              name: "Firebase",
              years: "2年",
            },
          ],
        },
        {
          name: "Kubernetes",
          years: "0.5年",
          children: [
            {
              name: "Skaffold",
            },
          ],
        },
      ],
    },
    {
      category: "AI 開発支援(2 年)",
      items: [
        {
          name: "Claude Code",
          children: [
            {
              name: "既存コードの調査・実装方針の検討",
            },
            {
              name: "スキル・メモリを活用した定型業務の自動化・定期実行",
            },
          ],
        },
        {
          name: "Codex",
        },
        {
          name: "Cursor",
        },
        {
          name: "Cline",
        },
        {
          name: "antigravity",
        },
        {
          name: "openspec",
        },
      ],
    },
    {
      category: "その他",
      items: [
        {
          name: "Neovim",
          years: "2年",
          children: [
            {
              name: "Lua",
            },
          ],
        },
      ],
    },
  ],
  values: [
    "シンプルさ",
    "開発の効率化とチームの技術力向上に注力",
    "簡潔な解決策を模索",
    "小さなライブラリの組み合わせやテキスト形式の採用など、シンプルで効率的な方法",
    "長く考えるよりも、手を動かす",
    "シンプルなものが好き",
    "AIとチームのベロシティを上げることが開発において大事",
    "詰まったらGithubでソースコード読もう",
    "なるべく難しいことを行わない",
    "宣言的にプログラミングする",
    "なるべく小さなモジュールで開発する",
    "単純な方法をとる",
  ],
  strengths: [
    "プロダクト横断で設計・実装できる（画面、API、DB、外部サービス連携、インフラ）",
    "Web・モバイル・サーバーサイドの境界を意識し、変更しやすい構造を作れる",
    "OpenAPIや自動生成を活用して、クライアントとサーバーの整合性を取りやすくできる",
    "現場を改善した経験が多い（DDD、TDD、BDD、Clean Architecture、宣言的プログラミングの導入）",
    "DDDやBDDを、チーム間の認識合わせや変更容易性のために導入できる",
    "リファクタリングが得意（複雑なシステムの概念整理、計画的リファクタリング）",
    "開発チーム全体への意見ができる（曖昧な問題の言語化、非効率な開発方法の改善提案）",
    "AIによる実装・テストコード生成を活用し、設計判断とレビューは人間側で担う",
    "AIが一貫したコードを書けるように、ドキュメント・テスト・アーキテクチャを整備できる",
    "大量の既存コードをClaude Codeで調査し、現状の実装を踏まえて実装方針を決定できる",
    "スキルやメモリを活用し、繰り返し発生する定型業務を自動化・定期実行できる",
    "幅広く興味を持って、実際に試してみる",
  ],
  growthAreas: [
    "クラウド系の知見（CloudflareやAWS等）",
    "LLM や AI エージェントを活用したプロダクト開発、開発プロセス改善、チームへの導入",
  ],
  careerDirection: [
    "AIやLLMに興味があるので、その分野にも進出していきたい",
    "最近は趣味でAIに関する様々な実験や検証を行っている",
    "ChatGPT、Gemini、Grokなど複数のLLMサービスを契約し、使い心地の比較検証",
    "hermes agentで個人用のエージェントや、エージェントから呼べる個人用スキルを作成",
  ],
  recentTech: [
    {
      title: "AI / LLM",
      items: [
        {
          name: "AIエージェント",
          description: "Claude Code, Codex, grok, opencode, browser use",
        },
        {
          name: "openspec",
          description:
            "仕様駆動開発用のフレームワーク。実装指示と理由をドキュメント化",
        },
        {
          name: "assistant-ui",
          description: "TypeScriptで簡単にchat UIを作成できる",
        },
      ],
    },
    {
      title: "プロダクト開発効率化",
      items: [
        {
          name: "OpenAPI / TypeSpec",
          description:
            "クライアントとサーバーの整合性を保ち、コードやドキュメントを自動生成しやすい",
        },
        {
          name: "SolidJS",
          description:
            "Reactと似た文法だがレンダリングが分かりやすい。エコシステムが小さくまとまっていて扱いやすい",
        },
      ],
    },
  ],
  interests: [
    {
      title: "AI / LLM",
      items: [
        { name: "LLMエージェントによる文章作成" },
        { name: "character.aiのようなキャラクターチャット" },
        { name: "MCP" },
        { name: "Skills" },
      ],
    },
    {
      title: "アーキテクチャ / インフラ",
      items: [
        { name: "3factor" },
        { name: "Cloudflare" },
        { name: "DDD" },
        { name: "Edge Computing" },
      ],
    },
    {
      title: "プロダクト開発効率化",
      items: [{ name: "ui-ux-pro-max-skill" }, { name: "playwright-agent" }],
    },
  ],
  books: [
    "セキュアバイ・デザイン - 安全なソフトウェア設計",
    "関数型ドメインモデリング",
    "Clean Architecture",
    "良いコード/悪いコードで学ぶ設計入門",
    "エリック・エヴァンスのドメイン駆動設計",
  ],
  career: [
    {
      title: "転職支援サービスの開発",
      period: "2026/07 - 2026/09",
      overview:
        "転職エージェントの一覧取得や面談予約などの機能を持つ転職支援サービスで、実装を中心に担当。大量の既存コードをClaude Codeで調査し、実装方針を決定しながら開発を進めた。",
      positions: ["Web アプリケーションエンジニア"],
      phases: [
        "既存実装の調査・実装方針の検討",
        "開発（実装中心）",
        "定型業務の自動化",
      ],
      technologies: [
        "Ruby on Rails",
        "PostgreSQL",
        "Next.js",
        "Nuxt",
        "Claude Code",
      ],
      tasks: [
        "転職エージェントの一覧取得や面談予約などに関する機能の実装",
        "Claude Codeを用いた既存コードの調査と、調査結果を踏まえた実装方針の決定",
        "Claude Codeのスキルやメモリを活用した定型業務の自動化・定期実行の整備",
      ],
      notes: [
        "既存コードの現状を理解した上で実装方針を決めることを重視",
        "定型業務をスキルやメモリで再利用できる形に整理し、手作業を削減",
      ],
    },
    {
      title: "AIエージェント・アプリ開発",
      period: "2025-06 〜 2026-06",
      overview:
        "AIで文字起こしや画像編集等の様々な作業を行うアプリで、フロントエンド（Next.js）からBFF、DBスキーマ設計、AWSインフラ構築までを一貫して担当。機能改修では、Step Functions によるワークフローも修正。",
      positions: [
        "フルスタックエンジニア（フロント / BFF / DB / インフラ）",
        "BFF / DB スキーマ設計",
        "インフラ構築・改修（AWS CDK / Step Functions）",
        "Web アプリケーションエンジニア",
      ],
      phases: ["開発", "インフラ", "テスト"],
      technologies: [
        "Next.js",
        "assistant-ui",
        "Drizzle",
        "AWS CDK",
        "Fargate",
        "S3",
        "PostgreSQL (Aurora)",
        "Step Functions",
        "Claude Code",
        "Cursor",
      ],
      tasks: [
        "assistant-uiを用いたチャット機能作成",
        "Next.jsを用いたフロントエンド・BFFの実装",
        "Drizzle ORMを利用したDBスキーマ設計とマイグレーション",
        "AWS CDKを用いたインフラ構築",
      ],
      notes: [
        "Claude Code pro maxをフル活用し、少ない人員で効率的にシステム開発",
        "ソフトウェアアーキテクチャ整備、ドキュメント整備、テスト整備、並行開発",
      ],
    },
    {
      title: "API提供サービスの保守・新規開発",
      period: "2024-10 〜 2025-05",
      overview:
        "API 提供サービスで、既存APIの保守、新規API設計、DBスキーマ設計、React画面までを横断して開発した",
      positions: [
        "Web アプリケーションエンジニア",
        "API 開発 / 保守",
        "DB スキーマ設計",
      ],
      phases: ["開発", "テスト"],
      technologies: [
        "React",
        "React Router",
        "Express",
        "Spring Boot",
        "MySQL (Aurora)",
        "Drizzle",
      ],
      tasks: [
        "既存API(Express, Spring Boot)のバグ修正、パフォーマンス改善、機能追加",
        "定期的なライブラリのアップデートと脆弱性対応",
        "フロントエンド(React)部分の改修",
        "React・React Routerを用いた新規画面の開発",
        "新規APIエンドポイントの設計・開発",
        "Drizzle ORMを利用したDBスキーマ設計とマイグレーション",
      ],
    },
    {
      title: "配車管理サービスの改修（サーバー側）",
      period: "2023-10 〜 2024-06",
      overview:
        "配送業者向けの配車管理サービスで、Rails、APIスキーマ、DB、AWS連携を含むサーバー側の機能改修を担当",
      positions: [
        "サーバーサイドエンジニア",
        "API / スキーマ設計",
        "チーム横断の仕様整理",
      ],
      phases: ["開発", "テスト"],
      technologies: [
        "Ruby on Rails",
        "RBS",
        "Sidekiq",
        "RSpec",
        "AWS SQS",
        "S3",
        "MySQL",
        "OpenAPI",
        "TypeSpec",
        "Docker",
      ],
      tasks: [
        "Rails、MySQL、AWS、OpenAPI / TypeSpecを用いたサービス改修全般を担当",
        "DDDやBDDの導入（ユビキタス言語の定義、ドメイン設計）",
        "Railsの機能を活用したDDD導入方法の考案",
        "BDDによるフロント・サーバー・QA・デザイン間の振る舞い共有",
      ],
    },
    {
      title: "配車管理サービスの改修（モバイル側）",
      period: "2023-02 〜 2023-09",
      overview:
        "ジオフェンシング機能の実装と、Firebase / Cloud Functions / Google Maps API 連携の改善を担当",
      positions: [
        "モバイルエンジニア",
        "サーバーレス連携（Firebase / Cloud Functions）",
        "外部API連携（Google Maps API）",
      ],
      phases: ["アーキテクチャ設計", "開発", "テスト"],
      technologies: [
        "Flutter",
        "Riverpod",
        "auto_router",
        "freezed",
        "flutter_background_geolocation",
        "Firebase Realtime Database",
        "Cloud Functions",
        "Google Maps API",
      ],
      tasks: [
        "モバイルとFirebaseとCloud Functionsを担当",
        "ジオフェンシング状態管理機能の実装",
        "実機デバッグ環境の整備",
        "Google Maps APIとの通信改善",
        "Cloud Functionsのレイヤー構造リファクタリング・e2eテスト環境整備",
      ],
    },
    {
      title: "教材配信サービスの改修",
      period: "2022-08 〜 2022-12",
      overview:
        "学校や企業へ教材を配信するサービスで、React画面、OpenAPI自動生成、Rails / MySQL / Docker 連携を意識した改修を担当",
      positions: [
        "Web アプリケーションエンジニア",
        "クライアントとAPI境界の改善",
      ],
      phases: ["アーキテクチャ設計", "開発", "テスト"],
      technologies: [
        "React",
        "TypeScript",
        "Jest",
        "Cypress",
        "Storybook",
        "Material UI",
        "Redux Toolkit",
        "Rails（閲覧のみ）",
        "MySQL",
        "esbuild",
        "Docker",
      ],
      tasks: [
        "OpenAPIからRTK Queryコードの自動生成を導入",
        "propsリレーをcustom hooksで解消し保守性を改善",
        "UIコンポーネントやテーマの整理",
        "esbuild導入によるビルド高速化",
      ],
    },
    {
      title: "不動産建築の工程管理チャットアプリ",
      period: "2022-01 〜 2022-06",
      overview:
        "不動産建築のため、施工主や施主がコミュニケーションできるチャットアプリ。Web、Android、iOS、Firebase、Firestore、OpenAPI連携を含む横断的な設計・実装を担当。",
      positions: [
        "テックリード",
        "Web / モバイルエンジニア",
        "Firebase / Firestore スキーマ設計",
        "API 連携設計",
      ],
      phases: ["要件定義", "アーキテクチャ設計", "開発", "テスト"],
      technologies: [
        "Flutter",
        "Riverpod",
        "go_router_builder",
        "freezed",
        "Firebase (Firestore, Cloud Functions, FCM)",
        "OpenAPI",
        "Bitrise",
      ],
      tasks: [
        "WebとMobileの両方をFlutterで実装",
        "前任から引き継いだコードを全面リアーキテクチャ（フルリプレイス）",
        "Firestoreスキーマ設計（RDBと異なる特性を考慮）",
        "OpenAPIによるサーバー・フロント間の整合性確保",
        "メンバーへのタスク分配（レイヤーやレベルに応じて整理）",
      ],
    },
    {
      title: "為替データ保存/参照用のMicroservice",
      period: "2021-10 〜 2021-12",
      overview:
        "共通DBに保存された日次の為替情報を読み出して保存し、参照できるMicroservice作成",
      positions: ["サーバーサイドエンジニア"],
      phases: ["アーキテクチャ設計（ドメイン）", "開発", "テスト（e2e）"],
      technologies: [
        "Clojure",
        "duct",
        "gauge-java",
        "WireMock",
        "Kubernetes",
        "Skaffold",
        "PostgreSQL",
        "MySQL",
      ],
      tasks: [
        "DDDを参考にドメインを定義",
        "100%ペアプログラミングで開発",
        "テストはe2eで担保",
      ],
    },
    {
      title: "アンケート動画配信サービスの改修",
      period: "2021-06 〜 2021-09",
      overview:
        "アンケート付きの動画を配信するサービス。動画再生中に一定時間でアンケートが出現",
      positions: ["Web アプリケーションエンジニア（Rails / フロントエンド）"],
      phases: ["アーキテクチャ設計（フロントエンド）", "開発"],
      technologies: ["Ruby on Rails", "Preact (TypeScript)", "MySQL", "Docker"],
      tasks: [
        "フロントエンドの新規部分を設計",
        "Preact-hooksのみで保守性の高い実装（ビルドサイズ最小化要件対応）",
      ],
    },
    {
      title: "百貨店アプリ",
      period: "2019-04 〜 2021-06",
      overview:
        "百貨店向けの総合アプリ（サービス予約、クーポン券発行、百貨店情報）",
      positions: ["アーキテクト"],
      phases: ["要件定義", "アーキテクチャ設計", "開発", "テスト"],
      technologies: ["Flutter", "freezed", "BLoC", "Bitrise", "CircleCI"],
      tasks: [
        "アプリ部分の全体設計",
        "巨大な神クラスを1年かけて計画的にリファクタリング",
        "チームメンバーへのアーキテクチャに関するティーチング・レビュー",
        "サーバーサイドの仕様変更に対する腐敗防止層の設計",
      ],
    },
    {
      title: "VOD（動画配信）サービスの改修",
      period: "2018-07 〜 2019-03",
      overview: "B2Bの動画配信サービスの機能ごとのMicroservice作成",
      positions: ["サーバーサイドエンジニア"],
      phases: ["開発", "テスト"],
      technologies: [
        "Golang (Gin)",
        "Python (Flask)",
        "React",
        "Ruby on Rails",
      ],
      tasks: [
        "ストリーミング用に変換した動画のマニフェスト変換Microservice作成",
        "外部動画変換サービスSDKの自社用ラッパーライブラリ作成",
      ],
    },
  ],
};
