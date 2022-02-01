# HAL 時間割

<img width="400" alt="スクリーンショット 2022-02-02 0 11 48" src="https://user-images.githubusercontent.com/50824354/151994993-25de7785-9037-454d-b93a-353c06560fdd.png">

時間割を作成する為のテンプレートコードです。<br>
ワンクリックで授業用の Zoom Meeting を起動することができます。

## カスタマイズ

### 1. プロジェクトをローカルに Clone

このリポジトリは [HALOSAKA](https://github.com/HALOSAKA) に所属したリポジトリとなっております。<br>
一旦、ローカルの PC に Clone して Origin の URL を書き換えることでカスタマイズします。

具体的な手順：

```
# ローカルにClone
git clone https://github.com/HALOSAKA/hal-timetable.git

または

git clone git@github.com:HALOSAKA/hal-timetable.git

# Originを変更
git remote set-url origin 新しく作成したリポジトリのURL

# 新しいリポジトリに内容をPush
git push origin main
```

これで自身のリポジトリで開発が可能となります。

### 2. 授業時間の設定

`src/config/index.ts` 内にある `periods` に**授業時間**が格納されています。

### 3. 各授業名の設定

`src/config/index.ts` 内にある `lessonNames` に**各授業名**が格納されています。

### 4. 各授業名とそれに対応する Zoom ID の設定

`src/config/index.ts` 内にある `zoomIds` に**各授業名とそれに対応する Zoom ID** がセットで格納されています。

### 5. 時間割の修正

`src/config/index.ts` 内にある `timetable` に**時間割**が配列で格納されています。<br>
例えば、`timetable[1][2]` の要素を置き換えると、**火曜日の 3 限目** が置き換わります。<br>
これを自クラスの時間割に置き換えましょう。

### 6. 開発サーバーの起動

開発環境は [`create-react-app`](https://github.com/facebook/create-react-app) を用いて構築しています。<br>

```
# 依存関係のインストール
$ yarn install

# 開発サーバーを起動
$ yarn run start
```

http://localhost:3000 にアクセスし、見た目や機能が意図したものとなっているか確認しましょう。

### 7. アプリケーションのデプロイ

時間割が完成した後は折角なのでクラスメイトに共有しましょう！<br>
デプロイ方法は様々ですが、個人的には Vercel や Firebase にデプロイするのが比較的簡単でお勧めです。

### その他

今後、下記のような機能を追加していけば面白いかも 👀

- 選択科目の UI を設計
- `src/config/index.ts` 内のデータを Database で管理
- 授業時間割を変更する為の管理画面を追加

### License

[MIT License](https://licenses.opensource.jp/MIT/MIT.html) に則り自由にカスタマイズして頂いて OK です。<br>
※ **機密情報の取り扱いには十分気を付けましょう。**
