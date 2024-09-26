# PlantUML Server Extension Setup Guide

このガイドでは、Visual Studio Code (VSCode) に PlantUML サーバー拡張機能を設定する方法を説明します。これにより、PlantUML ダイアグラムを簡単にプレビューし、編集できるようになります。

## 前提条件

- Visual Studio Code がインストールされていること。
- Docker がインストールされていること。

## インストール手順

### Step 1: PlantUML 拡張機能のインストール

1. VSCode を開きます。
1. 拡張機能ビューを開くためにサイドバーのアイコンをクリックするか、Ctrl+Shift+X を押します。
1. 検索バーに jebbs.plantuml と入力し、検索結果から PlantUML 拡張機能を見つけます。
1. 「インストール」ボタンをクリックして、拡張機能をインストールします。

### Step 2: PlantUML サーバーの設定

PlantUML サーバーを Docker コンテナとして起動するには、以下のコマンドを実行します。

```bash
docker run -d -p 8888:8080 plantuml/plantuml-server:jetty
```

このコマンドは、ローカルマシンの 8888 ポートを使用して PlantUML サーバーをバックグラウンドで実行します。

### Step 3: PlantUML ダイアグラムのプレビュー

1. VSCode で .plantuml ファイルを開きます。
1. Option + D (Mac) または Alt + D (Windows/Linux) を押して、プレビューウィンドウを開きます。


npx prisma migrate dev --name init
