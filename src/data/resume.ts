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
  teamSize?: string;
  phases: string[];
  technologies: string[];
  tasks: string[];
  notes?: string[];
}

export interface InterestSection {
  title: string;
  items: { name: string; description?: string }[];
}

export interface Achievement {
  title: string;
  description: string;
}

export interface WorkCondition {
  label: string;
  value: string;
}

export interface ResumeData {
  name: string;
  nameEn: string;
  links: Link[];
  experienceYears: string;
  freelanceYears: string;
  positions: string[];
  summary: string[];
  achievements: Achievement[];
  workConditions: WorkCondition[];
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
    { label: "GitHub", url: "https://github.com/subaru-shoji" },
    { label: "Zenn", url: "https://zenn.dev/suba" },
    { label: "Blog", url: "https://www.simple-web-system.work/" },
    { label: "X", url: "https://x.com/subaru_shoji" },
  ],
  experienceYears: "2014年〜",
  freelanceYears: "2016年〜",
  positions: [
    "フルスタックエンジニア（Web / API / DB / AWS）",
    "AI を活用したプロダクト開発",
    "テックリード",
    "アーキテクト",
    "サーバーサイド / API エンジニア",
    "モバイルエンジニア（Flutter）",
  ],
  summary: [
    "フロントエンド・API・DB・AWS インフラを横断して担当するフルスタックエンジニアです。Flutter でのモバイル開発、テックリード・アーキテクトとしての参画経験もあります。",
    "約 2 年前から AI コーディングを前提に開発しており、現在は Claude Code を中心に使っています。AI が一貫したコードを書けるように設計方針・ドキュメント・テストを整え、実装は AI に任せて、設計判断とレビューは自分が担っています。",
  ],
  achievements: [
    {
      title: "AI 前提の少人数開発",
      description:
        "2〜3 名のチームで、Next.js・DB・AWS CDK・LLM 組み込み（チャット UI、Step Functions による AI ワークフロー）までを担当。Claude Code を 3〜5 セッション並行で動かし、hooks で lint・型チェック・テストを自動実行する仕組みを整えた",
    },
    {
      title: "パフォーマンス改善",
      description:
        "Datadog APM で P95 が 1.0 秒を超えていた API で、約 1.3 秒かかっていたクエリを 0.01 秒以下に短縮",
    },
    {
      title: "API 仕様と実装の整合性",
      description:
        "committee-rails で OpenAPI と実装の乖離を CI で検知できるようにした。別案件では、OpenAPI から API クライアントを自動生成し、約 50 本の API について手書きのコードを 1,000〜3,000 行削減",
    },
    {
      title: "開発環境の改善",
      description:
        "esbuild の導入で、ビルド時間を約 5〜10 分から数十秒に短縮",
    },
    {
      title: "大規模リファクタリング",
      description:
        "3,000〜5,000 行規模のクラスを、先にテストで振る舞いを固定したうえで、約 1 年かけてレイヤーごとに分解",
    },
    {
      title: "チームへの手法の導入",
      description:
        "DDD・BDD をまず自分の担当範囲で試し、効果を見せてからチームに広げた。フロントエンド・サーバーサイド・QA・デザインで振る舞いを共有できるようにした",
    },
  ],
  workConditions: [
    { label: "稼働開始", value: "2026 年 10 月〜" },
    { label: "稼働日数", value: "フルタイム（週 5 日）" },
    {
      label: "勤務形態",
      value: "フルリモート希望（一部出社のあるリモート案件も可）",
    },
    {
      label: "希望ポジション",
      value:
        "フルスタックエンジニア（Web / API / DB / AWS）、AI を活用したプロダクト開発、テックリード",
    },
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
                { name: "Next.js" },
                { name: "React Router" },
                { name: "TanStack Query" },
                { name: "Tailwind CSS" },
                { name: "assistant-ui" },
              ],
            },
            { name: "SolidJS" },
            { name: "Angular" },
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
          children: [{ name: "Ruby on Rails" }, { name: "RBS" }],
        },
        {
          name: "Golang",
          years: "2年",
          children: [{ name: "Echo" }, { name: "Gin" }],
        },
        {
          name: "Python",
          years: "2年",
          children: [{ name: "Flask" }],
        },
        {
          name: "OpenAPI",
          years: "2年",
          children: [{ name: "TypeSpec" }],
        },
        { name: "Drizzle ORM" },
        {
          name: "Kotlin",
          years: "0.5年",
          children: [{ name: "Spring Boot" }, { name: "Gauge" }],
        },
        {
          name: "Clojure",
          years: "0.5年",
          children: [{ name: "duct" }],
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
        { name: "Firebase", years: "2年" },
      ],
    },
    {
      category: "インフラ / DB",
      items: [
        {
          name: "AWS",
          years: "3.5年",
          children: [
            { name: "CDK" },
            { name: "ECS" },
            { name: "Fargate" },
            { name: "Lambda" },
            { name: "Step Functions" },
            { name: "S3" },
            { name: "SQS" },
            { name: "Aurora" },
            { name: "Amplify" },
          ],
        },
        { name: "Docker", years: "4年" },
        {
          name: "DB",
          children: [
            { name: "MySQL" },
            { name: "PostgreSQL" },
            { name: "Oracle", years: "2年" },
          ],
        },
        { name: "GCP", years: "1年" },
        {
          name: "Kubernetes",
          years: "0.5年",
          children: [{ name: "Skaffold" }],
        },
      ],
    },
    {
      category: "LLM 組み込み",
      items: [
        {
          name: "Claude / GPT / Gemini",
          children: [{ name: "各社 API" }, { name: "Amazon Bedrock" }],
        },
        { name: "assistant-ui" },
        { name: "Step Functions による AI ワークフロー" },
      ],
    },
    {
      category: "テスト / 監視",
      items: [
        { name: "Vitest" },
        { name: "Playwright" },
        { name: "RSpec" },
        { name: "Storybook" },
        { name: "Datadog", children: [{ name: "APM" }] },
      ],
    },
    {
      category: "AI 開発支援（約 2 年）",
      items: [
        {
          name: "Claude Code（メイン）",
          children: [
            { name: "既存コードの調査、実装、テスト生成" },
            {
              name: "CLAUDE.md・hooks・スキル・サブエージェントを作成し、プロジェクトに合わせて拡張",
            },
          ],
        },
        {
          name: "Codex",
          children: [{ name: "セカンドオピニオンとしてのコード生成・レビュー" }],
        },
        {
          name: "Cursor / Cline / Antigravity",
          children: [
            { name: "エディタ上での小さな修正、自律的に進めるタスクの並行実行" },
          ],
        },
        {
          name: "openspec",
          children: [
            { name: "AI に実装を任せる前に仕様をドキュメント化（仕様駆動開発）" },
          ],
        },
      ],
    },
    {
      category: "その他",
      items: [
        {
          name: "Linux",
          years: "9年",
          children: [{ name: "ArchLinux" }, { name: "Debian" }],
        },
        {
          name: "ShellScript",
          years: "8年",
          children: [{ name: "bash" }, { name: "fish" }],
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
    "一言で言うと「シンプルさ」を大事にしています",
    "シンプルなものが好き。巨大なフレームワークを使うのではなく、小さいライブラリを組み合わせてミニマムに開発する",
    "この職務経歴書も、スキルシート（Excel 等）ではなくテキスト形式で管理している。変更履歴を取りやすく、LLM でも読み込みやすいため",
    "AI とチームのベロシティを上げることが開発において大事。改善できる箇所があれば、すぐに改善する",
    "チームの技術レベルが上がるような行動を心掛け、困っている人がいたら助ける",
    "なるべく難しいことをしない。前提条件を確認すると、そもそももっと簡単な issue になることが多い",
    "既存のやり方をそのまま踏襲するのではなく、もっと簡単な方法を探す",
    "なるべくコードやドキュメントを自動生成し、宣言的にプログラミングする",
    "なるべく小さなモジュールで開発し、その段階でテストコードや Storybook を書きながら進める",
    "長く考えるよりも、手を動かす。詰まったら GitHub でライブラリのソースコードや Example を読んで解決する（DeepWiki で確認することもある）",
  ],
  strengths: [
    "プロダクト横断で設計・実装できる（画面、API、DB、外部サービス連携、インフラ）",
    "Web、モバイル、サーバーサイドの境界を意識して、変更しやすい構造を作れる",
    "OpenAPI や自動生成を活用して、クライアントとサーバーの整合性を取りやすくできる",
    "AI が一貫したコードを書けるように、ドキュメント、テスト、アーキテクチャを整備できる",
    "大量の既存コードを Claude Code で調査し、現状の実装を踏まえて実装方針を決定できる",
    "スキルやメモリで繰り返し発生する作業を自動化し、自分の定型作業は Claude Code のスケジュール機能で定期実行している",
    "実装やテストコードの生成は AI に任せつつ、設計判断とレビューは自分で担う",
    "自分の担当範囲でまず試し、結果を見せてからチームに広げる（DDD、BDD、TDD、Clean Architecture、宣言的プログラミングなど）",
    "DDD や BDD を、チーム間の認識合わせや変更容易性のために導入できる",
    "リファクタリングが得意（複雑になったシステムの概念整理、計画的なリファクタリング）",
    "曖昧な問題を言語化し、具体的な課題として扱える形にできる",
    "幅広く興味を持って、実際に試してみる",
  ],
  growthAreas: [
    "LLM や AI エージェントを活用したプロダクト開発、開発プロセス改善、チームへの導入",
    "クラウド系の知見（Cloudflare や AWS 等）",
  ],
  careerDirection: [
    "趣味でも AI に関する実験・検証を続けている",
    "ChatGPT、Gemini、Grok など複数の LLM サービスを契約し、使い心地を比較検証",
    "hermes agent で個人用のエージェントを作成し、そこから呼べる個人用スキルも作成",
  ],
  recentTech: [
    {
      title: "AI / LLM",
      items: [
        {
          name: "AI エージェント",
          description:
            "Claude Code / Codex / Grok / opencode / browser use / hermes agent",
        },
        {
          name: "MiniMax H3",
          description:
            "動画生成モデル。生成した動画をアプリに組み込んで試すのに良かった",
        },
        {
          name: "opendesign",
          description:
            "LLM によるデザインツール。画面デザインの叩き台作りに良かった",
        },
        {
          name: "openspec",
          description:
            "仕様駆動開発用のフレームワーク。実装指示とその理由をドキュメントにでき、複数人での開発でもイメージを共有しやすい",
        },
        {
          name: "assistant-ui",
          description: "TypeScript で簡単に chat UI を作成できる",
        },
      ],
    },
    {
      title: "プロダクト開発効率化",
      items: [
        {
          name: "OpenAPI / TypeSpec",
          description:
            "クライアントとサーバーの整合性を取りやすく、コードやドキュメントを自動生成しやすい",
        },
        {
          name: "SolidJS",
          description:
            "React よりも仕様やエコシステムが小さくまとまっているので扱いやすい",
        },
      ],
    },
  ],
  interests: [
    {
      title: "AI / LLM",
      items: [
        { name: "LLM エージェントによる文章作成" },
        { name: "MCP" },
        { name: "Skills" },
      ],
    },
    {
      title: "アーキテクチャ / インフラ",
      items: [
        { name: "3factor" },
        { name: "Cloudflare" },
        { name: "Edge Computing" },
        { name: "DDD" },
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
        "転職エージェントの紹介や面談リクエストなどの機能を持つ転職支援サービスで、Rails API から Next.js の画面までを横断して担当。大量の既存コードがある環境で、Claude Code を活用して現状の実装を調査し、実装方針を決定しながら開発を進めた。",
      positions: ["フルスタックエンジニア（Rails API / Next.js）"],
      teamSize: "開発全体で約 30 名（うち所属チームは約 4〜5 名）",
      phases: [
        "既存実装の調査・実装方針の検討",
        "開発",
        "テスト",
        "パフォーマンス改善",
      ],
      technologies: [
        "Ruby on Rails",
        "committee-rails",
        "PostgreSQL",
        "Next.js",
        "Nuxt（一部改修）",
        "Vitest",
        "Datadog (APM)",
        "Google Tag Manager",
        "Claude Code",
      ],
      tasks: [
        "求職者向けのエージェント企業・エージェントページ（エージェント企業 TOP、一覧、トップページ、支援実績、主な支援先企業例など）を、Rails API から Next.js の画面まで一貫して実装",
        "契約状態・活動状態・権限に応じた表示制御や、支援実績の多い順・オファー獲得年の新しい順といった並び替えなどのビジネスルールを実装",
        "管理画面で、承認待ち・公開停止中の支援実績を編集できるようにした",
        "committee-rails によるリクエスト検証を正常系のテストに追加し、OpenAPI と実装の乖離を CI で検知できるようにした",
        "既存の不一致をエンドポイント単位で解消。Claude Code で乖離の一覧と設計判断のたたき台を作成し、機械的に直せるものと設計判断が必要なものを切り分けて対応",
        "Datadog APM で P95 レイテンシが 1.0 秒を超えていた API を改善し、約 1.3 秒かかっていたクエリを 0.01 秒以下に短縮",
        "面談リクエスト機能のテストケースを作成し、どの画面・導線からリクエストが来たかを GTM イベントで計測できるようにした",
        "エージェント関連コンポーネントを、エージェント企業・エージェント・共通の単位に再構成するリファクタリング",
        "開発用のダミーデータを作成する rake タスクを実装",
        "仕様書からチケットに必要な項目を書き出す Claude Code のスキルを作成し、起票の手間と記載漏れを削減",
        "自分の定型作業を Claude Code のスケジュール機能で定期実行し、手作業を削減",
      ],
      notes: [
        "既存コードが多いため、現状の実装を理解したうえで実装方針を決めることを重視した",
        "AI が生成した調査結果はたたき台として扱い、最終的な設計判断は人間が行う前提でチームに共有した",
      ],
    },
    {
      title: "AI エージェント・アプリ開発",
      period: "2025-06 〜 2026-06",
      overview:
        "AI で文字起こしや画像編集などの様々な作業を行うアプリ。フロントエンド（Next.js）から BFF、DB スキーマ設計、AWS インフラ構築、LLM の組み込みまでを一貫して担当した。",
      positions: [
        "フルスタックエンジニア（フロント / BFF / DB / インフラ / LLM 組み込み）",
      ],
      teamSize: "約 2〜3 名",
      phases: ["開発", "インフラ", "テスト"],
      technologies: [
        "Next.js",
        "TanStack Query",
        "assistant-ui",
        "Drizzle",
        "AWS CDK",
        "Fargate",
        "S3",
        "PostgreSQL (Aurora)",
        "Step Functions",
        "Bedrock",
        "Claude / GPT / Gemini",
        "Whisper",
        "Vitest",
        "Playwright",
        "Claude Code",
        "Cursor",
      ],
      tasks: [
        "Next.js を用いたフロントエンド・BFF の実装。TanStack Query でデータ取得・キャッシュ、更新後の再取得、処理状況のポーリング、楽観的更新を実装",
        "Drizzle ORM を利用したデータベーススキーマの設計とマイグレーション",
        "AWS CDK を用いたインフラ構築",
        "Claude / GPT / Gemini などの複数モデルを、各社の API と Amazon Bedrock 経由で用途に応じて使い分け",
        "assistant-ui を用いたチャット機能（ストリーミング応答、会話履歴の DB 保存、プロンプトの管理・切り替え、ファイル添付）を実装",
        "Step Functions による AI 処理ワークフロー（文字起こし → 要約 → 保存、画像の加工・生成 → 保存 など）を構築・改修。ステップの追加、エラー処理・リトライの修正、並列化、CDK による定義の修正",
      ],
      notes: [
        "Claude Max をフル活用し、2〜3 名の少人数でも効率的に開発できる体制を作った",
        "AI が一貫したコードを書けるように、設計方針を CLAUDE.md とドキュメントに明文化した",
        "Claude Code の拡張を作成（hooks：編集後に lint・型チェック・テストを自動実行／スキル：新機能の雛形作成、マイグレーション作成の手順化／サブエージェント：コードレビュー用）",
        "作業ごとにセッションを分けて 3〜5 セッションを並行で動かし、自分は設計とレビューに集中した",
        "既存コードの作り直し、設計ルールの無視、テスト側の書き換えといった AI が起こしがちな問題を、CLAUDE.md へのルール明記、テスト・lint による機械的なチェック、hooks による自動実行を組み合わせて防いだ",
      ],
    },
    {
      title: "API 提供サービスの保守・新規開発",
      period: "2024-10 〜 2025-05",
      overview:
        "API 提供サービスで、既存 API の保守、新規 API 設計、DB スキーマ設計、React 画面までを横断して開発した。（保守: 2024-10 〜 2024-11 ／ 新規: 2024-12 〜 2025-05）",
      positions: ["フルスタックエンジニア（API / DB / フロント）"],
      teamSize: "開発全体で約 30 名（うち所属チームは約 4〜5 名）",
      phases: ["開発", "テスト"],
      technologies: [
        "React",
        "React Router",
        "Express",
        "Spring Boot",
        "MySQL (Aurora)",
        "Drizzle",
        "Vitest",
        "Playwright",
      ],
      tasks: [
        "保守: マイクロサービス群の既存 API（Express, Spring Boot）のバグ修正、パフォーマンス改善、および小規模な機能追加",
        "保守: 定期的なライブラリのアップデートと脆弱性対応",
        "保守: フロントエンド（React）部分の改修",
        "新規: 新規 API エンドポイントの設計・開発",
        "新規: React および React Router を用いた新規画面の開発",
        "新規: Drizzle ORM を利用したデータベーススキーマの設計とマイグレーション",
      ],
    },
    {
      title: "配車管理サービスの改修（サーバー側）",
      period: "2023-10 〜 2024-06",
      overview:
        "配送業者向けの配車管理サービスで、Rails、API スキーマ、DB、AWS 連携を含むサーバー側の機能改修を担当した。",
      positions: ["サーバーサイドエンジニア"],
      teamSize: "開発全体で約 30 名（うち所属チームは約 4〜5 名）",
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
        "JTD",
        "Docker Compose",
        "VSCode (Live Share / devcontainer)",
      ],
      tasks: [
        "Rails、MySQL、AWS、OpenAPI / TypeSpec を用いたサービス改修全般を担当",
        "API / スキーマ設計と、チーム横断での仕様整理",
        "「ビジネスの要件が難しく、コードに落とし込みにくい」という問題に対して DDD や BDD を導入",
        "DDD: 人によって違う用語を使っている状態だったため、ユビキタス言語から定義し、それをもとにドメインを定義",
        "DDD: 定義自体も整理してメンバーが理解・挑戦しやすい形で導入し、Rails の機能を使って DDD を導入する方法を考案",
        "BDD: Notion の Issue の記述不足で仕様を知っている人に聞きに行く必要があったため、まず自分の担当範囲で試して結果を見せ、チームに少しずつ広げた",
        "結果として、フロントエンド、サーバーサイド、QA、デザインの各メンバーで振る舞いを共有できるようになった",
      ],
    },
    {
      title: "配車管理サービスの改修（モバイル側）",
      period: "2023-02 〜 2023-09",
      overview:
        "ジオフェンシング機能の実装と、Firebase / Cloud Functions / Google Maps API 連携の改善を担当した。",
      positions: ["モバイルエンジニア"],
      teamSize: "開発全体で約 30 名（うち所属チームは約 4〜5 名）",
      phases: ["アーキテクチャ設計", "開発", "テスト"],
      technologies: [
        "Flutter",
        "Riverpod",
        "auto_router",
        "freezed",
        "flutter_background_geolocation",
        "Firebase Realtime Database",
        "Cloud Functions (JavaScript / Jest)",
        "Google Maps API",
      ],
      tasks: [
        "モバイル、Firebase、Cloud Functions を横断して担当",
        "geofencing と、その状態を管理する機能を実装",
        "エミュレータでは動くが実機では動かない問題に対し、実機でのデバッグ環境（デバッグ用機能など）を整備",
        "Google Maps でルートを補正する際に一方通行でおかしくなるなど、原因の分かりづらい問題があった Google Maps API との通信を改善",
        "Cloud Functions のレイヤー構造をリファクタリングし、e2e テスト環境を整備",
      ],
    },
    {
      title: "教材配信サービスの改修",
      period: "2022-08 〜 2022-12",
      overview:
        "学校や企業へ教材を配信するサービスで、React 画面、OpenAPI からのコード自動生成、Rails / MySQL / Docker との連携を意識した改修を担当した。",
      positions: ["フロントエンドエンジニア"],
      teamSize: "約 4〜5 名",
      phases: ["アーキテクチャ設計", "開発", "テスト"],
      technologies: [
        "React",
        "TypeScript",
        "Jest",
        "Cypress",
        "Storybook",
        "esbuild",
        "Material UI",
        "Immer",
        "Redux Toolkit",
        "axios",
        "Rails（閲覧のみ）",
        "MySQL",
        "Docker",
      ],
      tasks: [
        "OpenAPI から RTK Query のコードを自動生成できるようにし、約 50 本の API について、1 本追加するたびに 4〜6 ファイルを手書きしていた作業を OpenAPI の更新とコマンド実行だけで済むようにした",
        "手書きの boilerplate を約 1,000〜3,000 行削減",
        "custom hooks でグローバルなストアと関数を定義し、props のバケツリレーをなくして保守性を改善",
        "クライアントと API の境界を整理",
        "UI 用のコンポーネントやテーマを整理",
        "esbuild を導入し、ビルド時間を約 5〜10 分から数十秒に短縮",
      ],
    },
    {
      title: "不動産建築の工程管理チャットアプリ",
      period: "2022-01 〜 2022-06",
      overview:
        "不動産建築のため、施工主や施主がコミュニケーションできるチャットアプリ。Web、Android、iOS、Firebase、Firestore、OpenAPI 連携を含む横断的な設計・実装を担当した。",
      positions: ["テックリード（Web / モバイル）"],
      teamSize: "約 4〜5 名",
      phases: ["要件定義", "アーキテクチャ設計", "開発", "テスト"],
      technologies: [
        "Flutter",
        "Riverpod",
        "go_router_builder",
        "flutter_hooks",
        "freezed",
        "Firebase (Firestore, Cloud Functions, FCM, App Authentication)",
        "OpenAPI",
        "Django（実装は担当外）",
        "Bitrise",
      ],
      tasks: [
        "Web と Mobile の両方を Flutter で実装",
        "前任から引き継いだコードがレイヤー分割されておらず拡張・保守が困難だったため、関係者と合意のうえで全面的にリアーキテクチャ（フルリプレイス）",
        "リリース日に間に合わせるため、デザインを Flutter のデフォルトにある程度寄せるよう調整",
        "Web と Mobile で別々だったデザインに対し、先に Mobile 側を作り込み、その Widget を Web 側でも利用できるよう調整",
        "Web / Mobile 全体のアーキテクチャを策定",
        "JOIN ができないなど RDB と違う点も考慮しつつ、データの整合性を取りやすい Firestore スキーマを設計",
        "サーバー側の Django で生成した OpenAPI を Flutter のクラスファイルに変換し、サーバー側との整合性を取りやすくした",
        "他のメンバーに渡すタスクを、レイヤーやエンジニアのレベルに応じて整理して渡した",
      ],
    },
    {
      title: "為替データ保存/参照用の Microservice",
      period: "2021-10 〜 2021-12",
      overview:
        "共通データベースに保存された日次の為替情報を読み出して保存し、保存したデータを参照できる Microservice を作成した。",
      positions: ["サーバーサイドエンジニア"],
      teamSize: "開発全体で約 40 名（うち所属チームは約 4〜5 名）",
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
        "開発している間にデータ構造が分かりづらくなったため、DDD を参考にドメインを定義",
        "100% ペアプログラミングで開発",
        "テストは e2e で担保",
      ],
    },
    {
      title: "アンケート動画配信サービスの改修",
      period: "2021-06 〜 2021-09",
      overview:
        "アンケート付きの動画を配信するサービス。動画を再生すると、一定時間でアンケートが表示される。",
      positions: ["Web アプリケーションエンジニア（Rails / フロントエンド）"],
      teamSize: "約 4〜5 名",
      phases: ["アーキテクチャ設計（フロントエンド）", "開発", "テスト"],
      technologies: ["Ruby on Rails", "Preact (TypeScript)", "MySQL", "Docker"],
      tasks: [
        "既存の設計では改修が難しかったため、フロントエンドの新規部分は新しく設計",
        "ビルドファイルの容量を小さくする要件に対し、Preact の hooks のみを使い、保守性が高くなるように実装",
      ],
    },
    {
      title: "百貨店アプリ",
      period: "2019-04 〜 2021-06",
      overview:
        "百貨店向けの総合アプリ。百貨店サービスの予約、クーポン券の発行、百貨店の情報などの機能がある。",
      positions: ["アーキテクト（モバイル）"],
      teamSize: "約 10 名",
      phases: ["要件定義", "アーキテクチャ設計", "開発", "テスト"],
      technologies: ["Flutter", "freezed", "BLoC", "Bitrise", "CircleCI"],
      tasks: [
        "アプリ部分全体の設計",
        "3,000〜5,000 行規模の神クラスが 2〜3 個存在していたため、壊さずに進められるリファクタリングの手順を決め、1 年ほどかけて分解",
        "先にテストを書いて既存の振る舞いを固定してから、画面ごとの BLoC に分け、さらに Repository / UseCase などのレイヤーに分割",
        "アプリの構造が崩れないよう、チームメンバーへアーキテクチャのティーチングやレビューを積極的に実施",
        "サーバーサイドとモバイルで開発会社が別だったため、仕様変更に柔軟に対応できるよう腐敗防止層を設けるなどのアーキテクチャ変更",
      ],
    },
    {
      title: "VOD（動画配信）サービスの改修",
      period: "2018-07 〜 2019-03",
      overview:
        "B2B の動画配信サービスで、機能ごとの Microservice を作成した。",
      positions: ["サーバーサイドエンジニア"],
      teamSize: "開発全体で約 30 名（うち所属チームは約 4〜5 名）",
      phases: ["開発", "テスト"],
      technologies: [
        "Golang (Gin)",
        "Python (Flask)",
        "React",
        "Ruby on Rails",
      ],
      tasks: [
        "外部の動画変換サービスでストリーミング用に変換した動画のマニフェストを変換する Microservice を作成",
        "外部の動画変換サービスへアクセスする SDK を、自社用にラップするライブラリを作成",
      ],
    },
  ],
};
