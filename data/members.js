/*
  奈良市共創チーム メンバーデータ

  更新するときは、この配列にメンバーを追加・編集してください。
  HTMLやscript.jsを変更する必要はありません。

  入力項目:
  - name: 氏名
  - affiliation: 所属
  - title: 肩書き・役割
  - sector: セクター（行政 / 企業 / 大学 / 市民 / 学生 / 専門家 など）
  - interests: 関心領域。検索・絞り込み・タグ表示に使われます
  - shortBio: 50字程度の短い紹介文
  - photo: 写真パス。例 "assets/members/taro-yamada.jpg"。空文字ならイニシャル表示
  - links: 任意リンク。例 [{ label: "Website", url: "https://example.com" }]
*/

window.MEMBER_DATA = [
  {
    name: "山田 奈良子（仮名）",
    affiliation: "奈良市共創チーム",
    title: "事業構想・地域課題担当",
    sector: "行政",
    interests: ["地域課題", "官民連携", "共創設計"],
    shortBio: "地域の声と政策をつなぎ、奈良らしい未来価値を形にします。",
    photo: "",
    links: []
  },
  {
    name: "佐藤 未来（仮名）",
    affiliation: "大学研究機関",
    title: "文化資源リサーチャー",
    sector: "大学",
    interests: ["文化資源", "地域研究", "教育"],
    shortBio: "奈良に蓄積された知恵や物語から、新しい価値の種を探ります。",
    photo: "",
    links: [
      {
        label: "Website",
        url: ""
      }
    ]
  },
  {
    name: "中川 大和（仮名）",
    affiliation: "民間企業",
    title: "企業連携・プロジェクト推進",
    sector: "企業",
    interests: ["官民連携", "新事業創発", "実証実験"],
    shortBio: "行政、企業、地域が自然につながる仕組みを育てます。",
    photo: "",
    links: []
  },
  {
    name: "藤原 あすか（仮名）",
    affiliation: "市民メンバー",
    title: "体験設計・場づくり",
    sector: "市民",
    interests: ["デザイン", "ワークショップ", "対話"],
    shortBio: "多様な声を可視化し、参加しやすい共創の場を設計します。",
    photo: "",
    links: [
      {
        label: "Notion",
        url: ""
      }
    ]
  },
  {
    name: "高橋 まほろば（仮名）",
    affiliation: "外部専門家",
    title: "地域価値戦略アドバイザー",
    sector: "専門家",
    interests: ["地域戦略", "学際連携", "編集"],
    shortBio: "外部視点から、奈良らしい未来価値の言語化を伴走します。",
    photo: "",
    links: []
  },
  {
    name: "森川 ひかり（仮名）",
    affiliation: "学生メンバー",
    title: "未来探索・若者参画",
    sector: "学生",
    interests: ["学び", "若者参画", "学生のまち"],
    shortBio: "若い世代の視点から、奈良で暮らす未来を探ります。",
    photo: "",
    links: []
  }
];
