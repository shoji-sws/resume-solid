## Why

既存のMarkdown形式の職務経歴書をWebサイトとして公開し、採用担当者やクライアントがブラウザで閲覧できるようにする。プロジェクト名の通りSolidJSを使用し、モダンで高速なレジュメサイトを構築する。

## What Changes

- SolidJSプロジェクトの初期セットアップ（Vite + TypeScript + Park UI + Kobalte + Tailwind CSS）
- レジュメデータの構造化（JSON/TypeScript形式）
- レジュメ表示用のページ・コンポーネント群の作成
  - ヘッダー（名前、リンク、ポジション）
  - スキルセクション（フロントエンド、モバイル、バックエンド、インフラ、AI）
  - 価値観・強みセクション
  - 職務経歴セクション（タイムライン形式）
  - 関心・技術書セクション
- Kobalteによるスクロールアニメーション・マイクロインタラクション
- レスポンシブデザイン（モバイル・デスクトップ対応）
- 静的サイトとしてビルド・デプロイ可能な構成

## Capabilities

### New Capabilities
- `project-setup`: SolidJS + Vite + TypeScript + Park UI + Kobalte + Tailwind CSSのプロジェクト初期構成
- `resume-data`: 職務経歴書データのTypeScript型定義と構造化データ
- `resume-page`: レジュメ全体を表示するページとコンポーネント群（ヘッダー、スキル、経歴、価値観等）
- `responsive-layout`: モバイル・デスクトップ対応のレスポンシブレイアウト

### Modified Capabilities
（既存のspecなし）

## Impact

- 新規プロジェクト作成のため、既存コードへの影響なし
- 依存パッケージ: solid-js, vite, typescript, tailwindcss, @tailwindcss/vite, @park-ui/*, @ark-ui/solid, @kobalte/core
- ビルド成果物: 静的HTML/CSS/JSファイル（任意のホスティングサービスにデプロイ可能）
