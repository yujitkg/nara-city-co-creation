/*
  奈良市共創チーム メンバーデータ

  更新するときは、この配列にメンバーを追加・編集してください。
  HTMLやscript.jsを変更する必要はありません。

  入力項目:
  - name: 氏名
  - romanizedName: ローマ字表記
  - affiliation: 所属
  - title: 肩書き・役割
  - sector: セクター（行政 / 企業 / 大学・教育 / 市民・地域 / 学生 / 専門家 など）
  - interests: 関心領域。検索・絞り込み・タグ表示に使われます
  - shortBio: 80〜150字程度の紹介文
  - photo: 写真パス。例 "assets/members/taro-yamada.jpg"。空文字ならイニシャル表示
  - links: 任意リンク。例 [{ label: "Website", url: "https://example.com" }]
*/

window.MEMBER_DATA = [
  {
    name: "安部 梓",
    romanizedName: "Abe Azusa",
    affiliation: "",
    title: "みらい価値共創プロジェクト3期生",
    sector: "市民・地域",
    interests: ["ご当地スーパー", "マーケティング", "メンタリング"],
    shortBio: "暮らしや地域の変化を見ることが好き。人が集まる場や続く仕組みに惹かれ、学びのある暮らしや地域の価値づくりに関心を寄せています。",
    photo: "",
    links: []
  },
  {
    name: "生田 光昭",
    romanizedName: "Ikuta Mituaki",
    affiliation: "",
    title: "みらい価値共創プロジェクト1期生",
    sector: "市民・地域",
    interests: ["共創", "地域課題", "未来価値"],
    shortBio: "奈良市みらい価値共創プロジェクトの1期生として、地域にある課題や可能性を多様な人と共有し、共創のきっかけづくりに関わっています。",
    photo: "",
    links: []
  },
  {
    name: "勇 元気",
    romanizedName: "Isami Genki",
    affiliation: "",
    title: "みらい価値共創プロジェクト1期生",
    sector: "市民・地域",
    interests: ["共創", "地域活性化", "ネットワーク"],
    shortBio: "奈良市みらい価値共創プロジェクトの1期生として、地域の人や活動がつながる機会を大切にし、奈良の未来づくりに参加しています。",
    photo: "",
    links: []
  },
  {
    name: "伊藤 慎之介",
    romanizedName: "Itou Shinnosuke",
    affiliation: "",
    title: "みらい価値共創プロジェクト2期生",
    sector: "市民・地域",
    interests: ["共創", "地域課題", "新事業創発"],
    shortBio: "奈良市みらい価値共創プロジェクトの2期生として、地域課題や新しい事業の可能性を学びながら、共創チームの活動に関わっています。",
    photo: "",
    links: []
  },
  {
    name: "今西 英皓",
    romanizedName: "Imanishi Hideaki",
    affiliation: "奈良商工会議所",
    title: "みらい価値共創プロジェクト1期生",
    sector: "企業",
    interests: ["商工会議所", "兼業農家", "地域活性化"],
    shortBio: "奈良商工会議所に関わりながら兼業農家としても活動。地域の人や事業者とつながり、共創で奈良の地域を盛り上げていきたいと考えています。",
    photo: "",
    links: [
      { label: "Mail", url: "mailto:imanishi@nara-cci.or.jp" }
    ]
  },
  {
    name: "大内 亮平",
    romanizedName: "Ouchi Ryouhei",
    affiliation: "",
    title: "みらい価値共創プロジェクト3期生",
    sector: "市民・地域",
    interests: ["まちづくり", "暮らし", "共創"],
    shortBio: "便利さや多様な生活スタイルが広がる時代に、何をするのか的を絞りにくい中で、多彩な人と共創し新しい可能性を探ることを楽しみにしています。",
    photo: "",
    links: []
  },
  {
    name: "大塚 圭一",
    romanizedName: "Otuka Keiichi",
    affiliation: "",
    title: "みらい価値共創プロジェクト1期生",
    sector: "教育・子育て",
    interests: ["キャリア教育", "社会教育", "子育て"],
    shortBio: "キャリア教育、社会教育、子育てに関心を持ち、多様なつながりを広げていきたいと考えています。共創を通じて地域に学びの機会を育てます。",
    photo: "",
    links: [
      { label: "Mail", url: "mailto:keituka1591@gmail.com" }
    ]
  },
  {
    name: "大塚 貴雄",
    romanizedName: "Otsuka Takako",
    affiliation: "",
    title: "みらい価値共創プロジェクト3期生",
    sector: "農業",
    interests: ["旅人", "フォトグラファー", "農業"],
    shortBio: "旅人、フォトグラファーとしての視点を持ち、農業事業で社会を変えることに関心を寄せています。地域の可能性を写真と農の両面から見つめます。",
    photo: "",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/takao_myphotograph" }
    ]
  },
  {
    name: "大羽 健太",
    romanizedName: "Ooba Kenta",
    affiliation: "事業構想大学院大学",
    title: "",
    sector: "大学・教育",
    interests: ["事業構想", "新事業創発", "学び"],
    shortBio: "事業構想大学院大学に関わり、事業構想や新事業創発の視点から、奈良の地域課題と未来価値を結びつける可能性を探っています。",
    photo: "",
    links: []
  },
  {
    name: "大橋 寅太",
    romanizedName: "Ohashi Torata",
    affiliation: "",
    title: "みらい価値共創プロジェクト1期生",
    sector: "市民・地域",
    interests: ["共創", "地域課題", "ネットワーク"],
    shortBio: "奈良市みらい価値共創プロジェクトの1期生として、多様な人との出会いを通じて、地域の課題や可能性を見つける活動に参加しています。",
    photo: "",
    links: []
  },
  {
    name: "小川 蒼生",
    romanizedName: "Ogawa Aoi",
    affiliation: "",
    title: "みらい価値共創プロジェクト1期生",
    sector: "企業",
    interests: ["観光", "移住", "写真"],
    shortBio: "奈良の雰囲気に魅了され、観光、移住、写真、ものづくりに関心を持っています。奈良を盛り上げるためにできることを考えています。",
    photo: "",
    links: []
  },
  {
    name: "小川 泰史",
    romanizedName: "Ogawa Yasushi",
    affiliation: "コトクリエ",
    title: "共創施設担当",
    sector: "企業",
    interests: ["共創施設", "施設運営", "地域創生"],
    shortBio: "奈良にある共育・共創施設の担当者として、奈良市共創チームでの事業構想が促進されることに貢献したいと考えています。",
    photo: "",
    links: []
  },
  {
    name: "奥田 将太",
    romanizedName: "Okuda Shota",
    affiliation: "奈良市役所",
    title: "みらい価値共創プロジェクト2期生",
    sector: "行政",
    interests: ["産業", "産学連携", "伝統工芸"],
    shortBio: "奈良市役所で産業に関わる人たちと仕事をしています。産学連携、伝統工芸、海外進出など、解決できる人と一緒に考える機会をつくります。",
    photo: "",
    links: [
      { label: "Mail", url: "mailto:okuda-shota@city.nara.lg.jp" }
    ]
  },
  {
    name: "小田 康輔",
    romanizedName: "Oda Kousuke",
    affiliation: "ならコープ",
    title: "みらい価値共創プロジェクト2期生",
    sector: "企業",
    interests: ["生協", "経理", "農業支援"],
    shortBio: "ならコープで経理の仕事をしています。生協との協業や共創、農業支援に関心があり、楽しくわくわくする取り組みを一緒に進めたいと考えています。",
    photo: "",
    links: [
      { label: "Mail", url: "mailto:kousuke.oda@nara.coop" }
    ]
  },
  {
    name: "片山 由希子",
    romanizedName: "Katayama Yukiko",
    affiliation: "INTERSPACE LAB.",
    title: "PR・ディレクター",
    sector: "クリエイティブ",
    interests: ["PR", "ディレクション", "共創チーム運営"],
    shortBio: "共創チームの運営窓口として、チームに入りたい方や興味のある方の相談を受けています。PRやディレクションの視点で活動を支えます。",
    photo: "",
    links: []
  },
  {
    name: "樫野 孝人",
    romanizedName: "Takahito Kashino",
    affiliation: "株式会社CAP / 事業構想大学院大学 / 県立広島大学",
    title: "かもめ地域創生研究所",
    sector: "専門家",
    interests: ["事業構想", "政治", "教育"],
    shortBio: "ビジネス、政治、教育、作家としての実践を重ね、奈良みらい価値共創プロジェクトの担当教員としてメンバーをサポートしています。",
    photo: "",
    links: [
      { label: "Mail", url: "mailto:info@kashino.net" }
    ]
  },
  {
    name: "加藤 勝也",
    romanizedName: "Katou Katuya",
    affiliation: "",
    title: "みらい価値共創プロジェクト2期生",
    sector: "市民・地域",
    interests: ["共創", "地域課題", "プロジェクト推進"],
    shortBio: "奈良市みらい価値共創プロジェクトの2期生として、地域の課題や未来の可能性を学び、共創チームの活動に参加しています。",
    photo: "",
    links: []
  },
  {
    name: "河村 昌美",
    romanizedName: "Kawamura Masami",
    affiliation: "事業構想大学院大学",
    title: "教授",
    sector: "大学・教育",
    interests: ["公民共創", "地域創生", "法務"],
    shortBio: "公民共創、産官学民連携、地域創生、地方自治、新事業構想、法務などを専門に、奈良の共創と事業構想の学びを支えています。",
    photo: "",
    links: []
  },
  {
    name: "國友 雄亮",
    romanizedName: "Kunitomo Yuryou",
    affiliation: "",
    title: "みらい価値共創プロジェクト1期生",
    sector: "市民・地域",
    interests: ["共創", "地域活性化", "ネットワーク"],
    shortBio: "奈良市みらい価値共創プロジェクトの1期生として、地域活性化や共創の可能性を探り、人的ネットワークの広がりに参加しています。",
    photo: "",
    links: []
  },
  {
    name: "熊野 和美",
    romanizedName: "Kumano Kazumi",
    affiliation: "大和ハウスグループ",
    title: "みらい価値共創センター コトクリエ",
    sector: "企業",
    interests: ["共創施設", "企画運営", "コトクリエ"],
    shortBio: "大和ハウスの共創施設「コトクリエ」の企画運営を担当。未来を切り拓くため、多様な方々とつながる活動を進めています。",
    photo: "",
    links: [
      { label: "Mail", url: "mailto:k-kumano@daiwahouse.jp" }
    ]
  },
  {
    name: "栗田 修次郎",
    romanizedName: "Kurita Shujiro",
    affiliation: "奈良市役所",
    title: "みらい価値共創プロジェクト3期生",
    sector: "行政",
    interests: ["道路用地", "写真", "旅行"],
    shortBio: "奈良市役所で道路用地買収の仕事をしています。共創チームでは多様な人と触れ合い、プロジェクト達成を支える立場で関わりたいと考えています。",
    photo: "",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/photo.maron" }
    ]
  },
  {
    name: "小林 雅之",
    romanizedName: "Kobayashi Masayuki",
    affiliation: "",
    title: "みらい価値共創プロジェクト2期生",
    sector: "市民・地域",
    interests: ["共創", "地域課題", "プロジェクト推進"],
    shortBio: "奈良市みらい価値共創プロジェクトの2期生として、地域の課題や未来の可能性を学びながら、共創チームの活動に関わっています。",
    photo: "",
    links: []
  },
  {
    name: "白井 智子",
    romanizedName: "Shirai Tomoko",
    affiliation: "",
    title: "みらい価値共創プロジェクト3期生",
    sector: "市民・地域",
    interests: ["共創", "地域課題", "未来価値"],
    shortBio: "奈良市みらい価値共創プロジェクトの3期生として、多様な人と学び合いながら、奈良の未来価値を考える共創の場に参加しています。",
    photo: "",
    links: []
  },
  {
    name: "杉本 重人",
    romanizedName: "Sugimoto Shigeto",
    affiliation: "奈良交通株式会社",
    title: "みらい価値共創プロジェクト1期生",
    sector: "企業",
    interests: ["交通", "道の駅", "農業"],
    shortBio: "バス会社で地域振興や道の駅、農業に関わる仕事を担当。農家の後継者として農業問題解決もライフワークにしています。",
    photo: "",
    links: [
      { label: "Mail", url: "mailto:shigeto.sugimoto@narakotsu.co.jp" }
    ]
  },
  {
    name: "鈴木 直樹",
    romanizedName: "Suzuki Naoki",
    affiliation: "奈良市役所",
    title: "",
    sector: "行政",
    interests: ["公民連携", "御朱印集め", "企業連携"],
    shortBio: "奈良市役所で企業や他市連携をはじめとした公民連携を担当しています。地域の人や企業がつながるきっかけづくりに関わります。",
    photo: "",
    links: []
  },
  {
    name: "高木 悠次",
    romanizedName: "Takagi Yuji",
    affiliation: "",
    title: "みらい価値共創プロジェクト3期生",
    sector: "クリエイティブ",
    interests: ["写真", "映像", "AI"],
    shortBio: "写真、映像、EC、PR、AI、Webサービスなどに関わり、アイデアを形にし、伝え、ビジネスにつなげることを大切にしています。",
    photo: "",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/yuji.tkg" }
    ]
  },
  {
    name: "高松 明弘",
    romanizedName: "Takamatsu Akihiro",
    affiliation: "奈良市",
    title: "広報・シティプロモーション・移住歓迎担当",
    sector: "行政",
    interests: ["広報", "移住", "奈良市職員"],
    shortBio: "奈良市の広報、シティプロモーション、移住歓迎を担当。面白がって取り組み、皆さんとわくわくするプロジェクトを進めたいと考えています。",
    photo: "",
    links: []
  },
  {
    name: "瀧戸 彩花",
    romanizedName: "Takido Ayaka",
    affiliation: "海とつながるなら",
    title: "みらい価値共創プロジェクト2期生",
    sector: "市民・地域",
    interests: ["奈良と海", "移動水族館", "文化芸術"],
    shortBio: "奈良から海を考える活動を展開。文化、歴史、環境、産業を通じて「海とつながる感覚」を体験できる企画やイベントを進めています。",
    photo: "",
    links: [
      { label: "Mail", url: "mailto:totsunagaru.nara@gmail.com" }
    ]
  },
  {
    name: "田尻 恵士",
    romanizedName: "Tajiri Keiji",
    affiliation: "サムズアップ農園",
    title: "みらい価値共創プロジェクト2期生",
    sector: "農業",
    interests: ["農業", "林業", "自然"],
    shortBio: "宇陀市で農家をしています。持続可能な農業を目指し、自然とともに営む農業や、農地再生、農業体験の活動を始めています。",
    photo: "",
    links: [
      { label: "Mail", url: "mailto:thumbsup.farmer@gmail.com" }
    ]
  },
  {
    name: "田代 敦士",
    romanizedName: "Tashiro Atushi",
    affiliation: "asuworks",
    title: "みらい価値共創プロジェクト2期生",
    sector: "クリエイティブ",
    interests: ["デザイン", "ものづくり", "ディレクター"],
    shortBio: "奈良を拠点に、グラフィックデザイン、プロダクトデザイン、自社ブランド展開を行っています。つくりたい欲しいを形にする手伝いをしています。",
    photo: "",
    links: []
  },
  {
    name: "田中 謙吾",
    romanizedName: "Tanaka Kengo",
    affiliation: "田中美粧園",
    title: "みらい価値共創プロジェクト1期生",
    sector: "企業",
    interests: ["造園", "サッカー", "元銀行勤務"],
    shortBio: "田中美粧園に関わり、造園や地域の暮らしに根ざした活動を大切にしています。金融の経験も生かしながら共創に参加しています。",
    photo: "",
    links: []
  },
  {
    name: "谷 優子",
    romanizedName: "Tani Yuko",
    affiliation: "奈良綺麗プロジェクト",
    title: "みらい価値共創プロジェクト3期生",
    sector: "市民・地域",
    interests: ["広報", "MC司会", "地域活動"],
    shortBio: "大阪在住ながら奈良に魅了され、会社を設立。BONCHIを拠点に、広報やMC司会などの経験を生かして奈良の活動に関わっています。",
    photo: "",
    links: []
  },
  {
    name: "塚口 萌々子",
    romanizedName: "Tukaguchi Momoko",
    affiliation: "株式会社ウエルアップ",
    title: "みらい価値共創プロジェクト2期生",
    sector: "企業",
    interests: ["建設コンサルタント", "奈良愛", "洋裁"],
    shortBio: "奈良市に本社がある株式会社ウエルアップで活動。衣食住を通じた事業に取り組み、若者世代が奈良で働き暮らせるまちを目指しています。",
    photo: "",
    links: [
      { label: "Mail", url: "mailto:tsukaguchi-m@wellup-corp.com" }
    ]
  },
  {
    name: "椿野 唯仁",
    romanizedName: "Tsubakino Yuito",
    affiliation: "エヌ・アイプランニング",
    title: "みらい価値共創プロジェクト1期生",
    sector: "企業",
    interests: ["サッカー", "インバウンド", "日本酒"],
    shortBio: "エヌ・アイプランニングに関わり、サッカー、インバウンド、日本酒、アウトドアなど幅広い関心を持ち、多くの人との共創を楽しみにしています。",
    photo: "",
    links: [
      { label: "Mail", url: "mailto:y-tsubakino@niplanning.jp" }
    ]
  },
  {
    name: "寺沢 悠",
    romanizedName: "Terasawa Cika",
    affiliation: "",
    title: "みらい価値共創プロジェクト2期生",
    sector: "市民・地域",
    interests: ["共創", "地域課題", "プロジェクト推進"],
    shortBio: "奈良市みらい価値共創プロジェクトの2期生として、地域の人や活動がつながる機会を大切にし、共創の実践に参加しています。",
    photo: "",
    links: []
  },
  {
    name: "寺島 潤一",
    romanizedName: "Terashima Junichi",
    affiliation: "",
    title: "みらい価値共創プロジェクト1期生",
    sector: "市民・地域",
    interests: ["港のヨーコ横浜横須賀", "ふるさと納税", "地域活性化"],
    shortBio: "地域づくりに関心を持ち、ふるさと納税などにも携わっています。亀の歩みでもこつこつ続けながら、共創の場に関わっています。",
    photo: "",
    links: []
  },
  {
    name: "寺本 歩実",
    romanizedName: "Teramoto Ayumi",
    affiliation: "奈良市役所",
    title: "人事課人材育成室",
    sector: "行政",
    interests: ["人事", "人材育成", "FUKU業"],
    shortBio: "奈良市役所の人事課人材育成室に所属。新しいことやチャレンジが好きで、仕事内容に関わらず市役所のことを相談できる存在を目指します。",
    photo: "",
    links: []
  },
  {
    name: "豊味 珠羽",
    romanizedName: "Toyomi Miu",
    affiliation: "",
    title: "みらい価値共創プロジェクト3期生",
    sector: "市民・地域",
    interests: ["共創", "地域課題", "未来価値"],
    shortBio: "奈良市みらい価値共創プロジェクトの3期生として、多様な人と出会い、地域の課題や未来価値を考える共創チームに参加しています。",
    photo: "",
    links: []
  },
  {
    name: "西村 和也",
    romanizedName: "Nishimura Kazunari",
    affiliation: "",
    title: "みらい価値共創プロジェクト1期生",
    sector: "市民・地域",
    interests: ["共創", "地域活性化", "ネットワーク"],
    shortBio: "奈良市みらい価値共創プロジェクトの1期生として、地域の人や活動がつながるきっかけを大切にし、共創の場に参加しています。",
    photo: "",
    links: []
  },
  {
    name: "東口 晃三",
    romanizedName: "Higashiguchi Kouzou",
    affiliation: "奈良商工会議所青年部 / 近畿税理士会",
    title: "みらい価値共創プロジェクト2期生",
    sector: "専門家",
    interests: ["老舗会計事務所", "商工会議所", "税理士"],
    shortBio: "老舗会計事務所、奈良商工会議所青年部、近畿税理士会に関わり、事業者支援や地域のネットワークづくりに参加しています。",
    photo: "",
    links: [
      { label: "Mail", url: "mailto:kozo6023@gmail.com" }
    ]
  },
  {
    name: "古木 智洋",
    romanizedName: "Furuki Tomohiro",
    affiliation: "",
    title: "",
    sector: "専門家",
    interests: ["地域活性化", "MaaS", "キャリア教育"],
    shortBio: "阪神高速道路、中小企業診断士、キャリアコンサルタントの視点を持ち、地域活性化とキャリア、教育に関心を寄せています。",
    photo: "",
    links: []
  },
  {
    name: "寳徳 真大",
    romanizedName: "Hutoku Masahiro",
    affiliation: "",
    title: "みらい価値共創プロジェクト1期生",
    sector: "市民・地域",
    interests: ["共創", "地域課題", "未来価値"],
    shortBio: "奈良市みらい価値共創プロジェクトの1期生として、地域の課題や未来価値に向き合い、多様な人との共創に参加しています。",
    photo: "",
    links: []
  },
  {
    name: "堀内 美穂",
    romanizedName: "Horiuchi Miho",
    affiliation: "奈良市役所",
    title: "",
    sector: "行政",
    interests: ["共助", "公民連携", "学生"],
    shortBio: "奈良市役所で企業や大学、学生との連携を担当。相談があれば気軽につながれる窓口として、公民連携や共助の活動に関わっています。",
    photo: "",
    links: []
  },
  {
    name: "本田 岳",
    romanizedName: "Honda Takeshi",
    affiliation: "",
    title: "みらい価値共創プロジェクト3期生",
    sector: "市民・地域",
    interests: ["共創", "地域課題", "未来価値"],
    shortBio: "奈良市みらい価値共創プロジェクトの3期生として、地域の人や活動がつながる機会を大切にし、共創チームに参加しています。",
    photo: "",
    links: []
  },
  {
    name: "増田 恵美",
    romanizedName: "Megumi Masuda",
    affiliation: "",
    title: "みらい価値共創プロジェクト3期生",
    sector: "企業",
    interests: ["損保ジャパン", "パン", "安心"],
    shortBio: "チャレンジを安心という形で支えることに関心があります。保険や暮らしの視点から、地域の新しい挑戦を後押ししたいと考えています。",
    photo: "",
    links: []
  },
  {
    name: "松下 尚史",
    romanizedName: "Matsushita Naofumi",
    affiliation: "農業法人",
    title: "みらい価値共創プロジェクト1期生",
    sector: "農業",
    interests: ["生成AI", "農業", "地域課題解決"],
    shortBio: "AIを地域の困りごとを解決する道具として使い、人との縁を生むビジネスモデルを構築中。農業法人を経営しながら実践を進めています。",
    photo: "",
    links: []
  },
  {
    name: "松下 八大",
    romanizedName: "Matushita Hachidai",
    affiliation: "",
    title: "みらい価値共創プロジェクト2期生",
    sector: "市民・地域",
    interests: ["共創", "地域課題", "新事業創発"],
    shortBio: "奈良市みらい価値共創プロジェクトの2期生として、地域の課題や新しい活動の可能性を考え、共創チームに参加しています。",
    photo: "",
    links: []
  },
  {
    name: "三上 麻依",
    romanizedName: "Mikami Mai",
    affiliation: "",
    title: "みらい価値共創プロジェクト3期生",
    sector: "クリエイティブ",
    interests: ["TikTok", "ショート動画", "移住"],
    shortBio: "ショート動画を通じて奈良を盛り上げています。北海道出身で奈良が好きで移住し、動画やSNSを活用した発信に取り組んでいます。",
    photo: "",
    links: [
      { label: "Mail", url: "mailto:yoridocoro888@gmail.com" },
      { label: "TikTok", url: "https://www.tiktok.com/@migi.ude" },
      { label: "TikTok Shop", url: "https://www.tiktok.com/@happylife.jp" },
      { label: "TikTok Travel", url: "https://www.tiktok.com/@mikamaisan" }
    ]
  },
  {
    name: "山本 義徳",
    romanizedName: "Yamamoto Yoshitoku",
    affiliation: "",
    title: "みらい価値共創プロジェクト1期生",
    sector: "市民・地域",
    interests: ["素麺", "地域資源", "共創"],
    shortBio: "奈良市みらい価値共創プロジェクトの1期生として、素麺など地域資源への関心を持ち、奈良の魅力を共創で広げる活動に参加しています。",
    photo: "",
    links: []
  },
  {
    name: "若杉 悠里",
    romanizedName: "Wakasugi Yuri",
    affiliation: "",
    title: "みらい価値共創プロジェクト1期生",
    sector: "市民・地域",
    interests: ["地域活性化", "PR", "素麺"],
    shortBio: "地域づくり全般に関心があり、PR活動も好きです。奈良市のYouTube動画にも出演しながら、地域の魅力発信に関わっています。",
    photo: "",
    links: []
  }
];
