# 奈良市共創チーム

奈良市みらい価値共創プロジェクト研究の修了生を中心に、多様な人がつながる共創コミュニティ「奈良市共創チーム」の紹介サイトです。

行政・企業・大学・市民・学生など、多様なセクターのメンバーが地域課題、新事業創発、官民連携、学生のまちとしての可能性を共に探る人的ネットワークを紹介します。

## 公開URL

https://yujitkg.github.io/nara-city-co-creation/

## ファイル構成

```text
.
├── index.html
├── style.css
├── script.js
├── data/
│   └── members.js
├── assets/
│   └── ogp.svg
├── 404.html
├── robots.txt
├── sitemap.xml
├── .nojekyll
└── README.md
```

## 更新方法

メンバー情報は `data/members.js` の `window.MEMBER_DATA` を編集します。

各メンバーは以下の項目で管理します。

```js
{
  name: "氏名",
  affiliation: "所属",
  title: "肩書き・役割",
  sector: "セクター",
  interests: ["関心領域"],
  shortBio: "短い紹介文",
  photo: "assets/members/example.jpg",
  links: [{ label: "Web", url: "https://example.com" }]
}
```

写真がない場合は `photo` を空文字にすると、氏名から生成したイニシャルが表示されます。

## 注意事項

- HTML / CSS / JavaScript のみで構成しています。
- 外部ライブラリは使用していません。
- GitHub Pagesで公開するため、ルートに `.nojekyll` を配置しています。
- OGP画像は `assets/ogp.svg` です。
- 公開URLを変更する場合は、`index.html` の canonical / OGP URL、`sitemap.xml`、`robots.txt` をあわせて更新してください。
