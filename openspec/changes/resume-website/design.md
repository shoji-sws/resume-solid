## Context

職務経歴書（README.md）がMarkdown形式で管理されており、PDF/HTML変換用のビルドシステムが存在する。これをSolidJSベースのWebサイトとして再構築し、ブラウザで直接閲覧可能にする。プロジェクト名`resume-solid`の通り、SolidJSを採用する。

## Goals / Non-Goals

**Goals:**
- SolidJS + Vite + TypeScript + Park UI + Kobalteで高品質なレジュメサイトを構築
- 職務経歴書の全セクションをWebページとして表示
- モバイル・デスクトップ対応のレスポンシブデザイン
- 静的サイトとしてビルド可能（GitHub Pages等にデプロイ可能）

**Non-Goals:**
- CMS機能やデータの動的編集機能
- 多言語対応（日本語のみ）
- ページルーティング（SPA単一ページ構成）

## Decisions

### 1. SolidJS + Vite + TypeScript
- **選択**: SolidJS（Vite テンプレート使用）
- **理由**: プロジェクト名の意図通り。Reactに似た文法で軽量・高速。ユーザー自身がSolidJSに関心を持っている。
- **代替案**: Next.js（SSG可能だがオーバーキル）、Astro（静的サイト向きだがSolidJS単体で十分）

### 2. Park UI + Kobalte + Tailwind CSS v4
- **選択**: Park UI（Ark UIベースのコンポーネントライブラリ）+ Kobalte（アクセシブルUIプリミティブ + アニメーション）+ Tailwind CSS v4
- **理由**: Park UIで洗練されたデザインコンポーネントを使用。KobalteでSolidJSネイティブのアニメーション・トランジションを実現。Tailwind CSSでカスタムスタイリング。
- **代替案**: shadcn-solid（Kobalteベースだが Park UIの方がスタイル込み）、SUID（Material UIスタイルは好みに合わない）

### 3. データ構造
- **選択**: TypeScriptファイルにデータを直接定義（`src/data/resume.ts`）
- **理由**: 型安全、ビルド時に最適化、外部ファイル読み込み不要。コンテンツ量が固定的で頻繁に変わらない。
- **代替案**: JSON（型安全性が低い）、Markdown解析（パーサーが追加依存になる）

### 4. 単一ページ構成
- **選択**: ルーティングなしの単一ページ
- **理由**: レジュメは一覧性が重要。スクロールで全セクション閲覧可能。ルーター不要でシンプル。
- **代替案**: セクション別ページ（ナビゲーション複雑化、一覧性低下）

### 5. コンポーネント構成
```
src/
├── App.tsx              # メインレイアウト
├── data/
│   └── resume.ts        # レジュメデータ（型定義+データ）
├── components/
│   ├── Header.tsx       # 名前、リンク、ポジション
│   ├── Skills.tsx       # スキルセクション（カテゴリ別）
│   ├── Values.tsx       # 価値観・強み
│   ├── Career.tsx       # 職務経歴（タイムライン）
│   ├── Interests.tsx    # 関心・技術書
│   └── Section.tsx      # 共通セクションラッパー
└── index.tsx            # エントリポイント
```

## Risks / Trade-offs

- **データ更新時の再ビルド必要** → レジュメ更新頻度は低いため許容範囲。将来的にMarkdown解析に移行可能。
- **SolidJSエコシステムが小さい** → Park UI + Kobalteという確立されたSolidJS対応ライブラリを採用し、リスクを低減。
- **SEO** → 静的ビルドでHTMLが生成されるため基本的なSEOは確保。メタタグを適切に設定する。
