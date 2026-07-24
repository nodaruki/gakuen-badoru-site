# 学園バドる！ 公式サイト

GitHub Pages向けの静的1ページサイトです。ビルド作業は不要です。

## 公開方法

このフォルダの内容をGitHubリポジトリへ置き、GitHub Pagesを有効化してください。

- `index.html`
- `style.css`
- `script.js`
- `assets/`

## URLの設定

`script.js` 冒頭の `SITE_CONFIG` だけ編集します。

```js
const SITE_CONFIG = {
  steamUrl: "https://store.steampowered.com/app/xxxxx/",
  trailerUrl: "https://www.youtube.com/watch?v=xxxxx",
  pressKitUrl: "https://github.com/.../releases/download/.../gakuen-badoru_presskit_20260724.zip",
  contactEmail: "press@example.com",
  xUrl: "https://x.com/...",
  youtubeUrl: "https://www.youtube.com/@...",
};
```

空文字の項目は「準備中」として表示されます。

## 日本語 / English

1枚のHTMLで切り替えています。

- ブラウザ言語を初期値として使用
- ユーザーが選んだ言語を `localStorage` に保存
- `?lang=ja` と `?lang=en` に対応
- HERO、ロゴ、スクリーンショットも言語に合わせて自動切替

例:

- `https://USERNAME.github.io/REPOSITORY/?lang=ja`
- `https://USERNAME.github.io/REPOSITORY/?lang=en`

## 画像

Press KitのPNGは変更せず、Webサイト用には軽量なWebPを別途生成しています。
Press Kit本体はGitHub Releases等へ置く想定です。

## Trailer

`trailerUrl` にYouTube URLを設定すると、プレースホルダーが自動的にYouTube埋め込みへ切り替わります。

対応例:

- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- YouTube Shorts URL

## Press Kit

Press Kit ZIPはこのサイトフォルダには含めていません。
`pressKitUrl` にGitHub Releases上のZIPへのリンクを設定してください。
