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
  valuesDetailed: string[];
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
    { label: "Twitter", url: "https://twitter.com/subaru_shoji" },
    { label: "GitHub", url: "https://github.com/subaru-shoji" },
  ],
  experienceYears: "2014年〜（12年目）",
  freelanceYears: "2016年〜（10年目）",
  positions: [
    "テックリード",
    "アーキテクト",
    "フロントエンドエンジニア",
    "サーバーサイドエンジニア",
    "モバイルエンジニア（Flutter）",
  ],
  skills: [
    {
      category: "フロントエンド",
      items: [
        {
          name: "TypeScript",
          years: "6年",
          children: [
            {
              name: "React",
              children: [
                { name: "React Router" },
                { name: "Next.js" },
                { name: "Material UI" },
              ],
            },
            { name: "SolidJS", years: "趣味で2ヶ月" },
            { name: "Angular" },
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
              children: [{ name: "Riverpod" }, { name: "BLoC" }],
            },
          ],
        },
      ],
    },
    {
      category: "サーバーサイド",
      items: [
        {
          name: "Python",
          years: "2年",
          children: [{ name: "Flask" }],
        },
        {
          name: "Golang",
          years: "2年",
          children: [{ name: "Echo" }, { name: "Gin" }],
        },
        {
          name: "Ruby",
          years: "4年",
          children: [{ name: "Ruby on Rails" }, { name: "RBS" }],
        },
        {
          name: "Clojure",
          years: "0.5年",
          children: [{ name: "duct" }],
        },
        {
          name: "Kotlin",
          years: "0.5年",
          children: [{ name: "Spring Boot" }, { name: "Gauge" }],
        },
      ],
    },
    {
      category: "インフラ",
      items: [
        {
          name: "Linux",
          years: "9年",
          children: [{ name: "ArchLinux" }, { name: "Debian" }],
        },
        {
          name: "AWS",
          years: "3.5年",
          children: [
            { name: "Amplify" },
            { name: "Lambda" },
            { name: "Step Functions" },
            { name: "ECS" },
          ],
        },
        { name: "GCP", years: "1年" },
        { name: "Firebase", years: "2年" },
        {
          name: "ShellScript",
          years: "8年",
          children: [{ name: "bash" }, { name: "fish" }],
        },
        {
          name: "DB",
          children: [
            { name: "MySQL" },
            { name: "PostgreSQL" },
            { name: "Oracle", years: "2年" },
          ],
        },
        {
          name: "Kubernetes",
          years: "0.5年",
          children: [{ name: "Skaffold" }],
        },
        { name: "Docker", years: "4年" },
      ],
    },
    {
      category: "AI Tool",
      items: [
        {
          name: "AI Tool",
          years: "2年",
          children: [
            { name: "Claude Code" },
            { name: "Codex" },
            { name: "Cline" },
            { name: "Cursor" },
            { name: "antigravity" },
            { name: "openspec" },
          ],
        },
      ],
    },
    {
      category: "その他",
      items: [
        {
          name: "OpenAPI",
          years: "2年",
          children: [{ name: "TypeSpec" }],
        },
        {
          name: "Neovim",
          years: "2年",
          children: [{ name: "Lua" }],
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
  ],
  valuesDetailed: [
    "シンプルなものが好き",
    "AIとチームのベロシティを上げることが開発において大事",
    "詰まったらGithubでソースコード読もう",
    "なるべく難しいことを行わない",
    "宣言的にプログラミングする",
    "なるべく小さなモジュールで開発する",
    "単純な方法をとる",
  ],
  strengths: [
    "現場を改善した経験が多い（DDD, TDD, BDD, Clean Architecture導入）",
    "リファクタリングが得意（複雑なシステムの概念整理、計画的リファクタリング）",
    "開発チーム全体への意見ができる（曖昧な問題の言語化、非効率な開発方法の改善提案）",
    "幅広く興味を持って、実際に試してみる",
  ],
  growthAreas: [
    "大規模で複雑なシステム（複数のマイクロサービス群）でチューニングした経験はあまりない",
    "理論的にLLMのチューニングをしたことはあまりない",
  ],
  careerDirection: [
    "AIやLLMに興味があるので、その分野にも進出していきたい",
    "最近は趣味でAIに関する様々な実験や検証を行っている",
    "Mastraを使ったAIエージェントの開発",
    "ChatGPT、Gemini、Grokなど複数のLLMサービスを契約し、使い心地の比較検証",
    "openclawで個人用のエージェント作成",
  ],
  recentTech: [
    {
      title: "LLM",
      items: [
        { name: "AIエージェント", description: "Claude Code, Codex, antigravity" },
        {
          name: "openspec",
          description: "仕様駆動開発用のフレームワーク。実装指示と理由をドキュメント化",
        },
        {
          name: "assistant-ui",
          description: "TypeScriptで簡単にchat UIを作成できる",
        },
      ],
    },
    {
      title: "フロントエンド",
      items: [
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
      title: "AI",
      items: [
        { name: "LLMエージェントによる文章作成" },
        { name: "character.aiのようなキャラクターチャット" },
      ],
    },
    {
      title: "アーキテクチャ",
      items: [
        { name: "3factor" },
        { name: "Supabase" },
        { name: "Hasura" },
        { name: "DDD" },
        { name: "GraphQL" },
        { name: "serverless" },
        { name: "gRPC" },
      ],
    },
    {
      title: "フロントエンド",
      items: [
        { name: "shadcn/ui" },
        { name: "Tailwind CSS" },
        { name: "Storybook" },
      ],
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
      title: "AIエージェント・アプリ開発",
      period: "2025-06 〜 2026-03",
      overview:
        "AIで文字起こしや画像編集等の様々な作業を行うアプリで主にフロントエンド（Next.js）を担当。機能改修では一部Step Functionsも修正。",
      positions: ["フロントエンドエンジニア", "サーバーサイドエンジニア（Step Functions）"],
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
      overview: "API提供サービスの保守・新規開発を行った",
      positions: ["フロントエンドエンジニア", "サーバーサイドエンジニア"],
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
        "フロントエンド(React)部分の改修",
        "新規APIエンドポイントの設計・開発",
        "Drizzle ORMを利用したDBスキーマ設計とマイグレーション",
      ],
    },
    {
      title: "配車管理サービスの改修（サーバー側）",
      period: "2023-10 〜 2024-06",
      overview: "配送業者向けの配車管理サービスのサーバー側の機能改修",
      positions: ["フロントエンドエンジニア", "サーバーサイドエンジニア"],
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
        "サービスの改修全般を担当",
        "DDDやBDDの導入（ユビキタス言語の定義、ドメイン設計）",
        "Railsの機能を活用したDDD導入方法の考案",
        "BDDによるフロント・サーバー・QA・デザイン間の振る舞い共有",
      ],
    },
    {
      title: "配車管理サービスの改修（モバイル側）",
      period: "2023-02 〜 2023-09",
      overview: "ジオフェンシング機能の実装",
      positions: ["モバイルエンジニア", "サーバーサイド（Firebase/Cloud Functions）"],
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
      overview: "学校や企業へ教材を配信するサービスの改修",
      positions: ["フロントエンドエンジニア"],
      phases: ["アーキテクチャ設計", "開発", "テスト"],
      technologies: [
        "React",
        "TypeScript",
        "Jest",
        "Cypress",
        "Storybook",
        "Material UI",
        "Redux Toolkit",
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
        "不動産建築のため、施工主や施主がコミュニケーションできるチャットアプリ（Web, Android, iOS）",
      positions: ["テックリード", "フロントエンドエンジニア", "モバイルエンジニア"],
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
      positions: ["フロントエンドエンジニア"],
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
      technologies: ["Golang (Gin)", "Python (Flask)", "React", "Ruby on Rails"],
      tasks: [
        "ストリーミング用に変換した動画のマニフェスト変換Microservice作成",
        "外部動画変換サービスSDKの自社用ラッパーライブラリ作成",
      ],
    },
  ],
};
