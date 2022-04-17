import cheeseNan from "./../assets/images/cheese_nan.jpeg"
import garlicCheeseNan from "./../assets/images/garlic_cheese_nan.jpeg"
import aluParatha from "./../assets/images/aluParatha.jpg"
import chickenTikka from "./../assets/images/chicken_tikka.jpg"
import tandooriMix from "./../assets/images/slider-02.jpg"
import OnionRing from "./../assets/images/onionRing.jpg"
import moMo from "./../assets/images/momo.jpg"
import sunagimoItame from "./../assets/images/sunagimo_itame.jpg"
import tandooriChicken from "./../assets/images/tandoori_chicken.jpg"
import tandooriPrawn from "./../assets/images/tandoori_prawn.jpg"
import pannerSalad from "./../assets/images/paneersalad.jpg"
import tomatoSalad from "./../assets/images/tomato_salad.jpg"


export const jsonJp = {
  name: "ジャハンインドネパール料理",
  contact: {
    phone: "0489155644",
    address: "〒342-0041 埼玉県吉川市保、1丁目-27-4",
    directionBtn: "方向性を得る",
    callBtn: "電話を掛ける"
  },
  footer: {
    name: "に手を差し伸べる",
    subList: [
      {
        name: "接続",
        items: [
          {
            item: "Instagram",
            link: "https://www.instagram.com/jahancurry/"
          },
          {
            item: "Twitter",
            link: "https://twitter.com/jahancurry"
          },
          {
            item: "Facebook",
            link: "https://www.facebook.com/Jahancurry/?locale2=ja_JP&_rdr"
          }
        ]
      },{
        name: "注文",
        items: [
          {
            item: "Phone",
            link: "tel:0489155644"
          },
          {
            item: "Uber",
            link: "https://www.ubereats.com/jp-en/store/%E3%82%B7%E3%83%A3%E3%83%BC%E3%83%8F%E3%83%B3%E5%90%89%E5%B7%9D-jahan/tAVTewMiStaN_-SihRStUg"
          },
          {
            item: "Demaekan",
            link: "www.demaekan.com"
          }
        ]
      },{
        name: "予約",
        items: [
          {
            item: "Phone",
            link: "tel:0489155644"
          },
          {
            item: "Hotpepper",
            link: "https://www.hotpepper.jp/strJ001185600/yoyaku/?vos=othpporgzzzzx00000001"
          },
          {
            item: "Yahoo",
            link: "https://paypaygourmet.yahoo.co.jp/place/g-BQUNS35LmCE/course/?sc_e=sgpa"
          }
        ]
      }
    ]
  },
  menu: {
    menuList: ["カレ―", "ナン", "サイド", "セット", "ドリンク"],
    curry: [
      {
        name: "チキンカレー",
        description: "人気のチキンカレー.",
        price: "¥650"
      },
      {
        name: "バターチキン",
        description: "When we say butter chicken, we mean good, old, everyone's favourite.",
        price: "¥980"
      },
      {
        name: "チキンクルマ",
        description: "Special curry with sweet flavour made with malai tikka and nuts.",
        price: "¥800"
      },
      {
        name: "マトンカレー",
        description: "Curry with Lamb meat",
        price: "¥750"
      },
      {
        name: "マトンドピヤジャ",
        description: "Mutton curry flavoured with garlic and Capsicum.",
        price: "¥800"
      },
      {
        name: "キーマカレー",
        description: "Curry Made of minced chicken and mutton",
        price: "¥750"
      },{
        name: "キーマナスカレー",
        description: "Keema Curry with Nas topping",
        price: "¥750"
      },{
        name: "野菜カレー",
        description: "Combination of veggie brought together so you don't have to compromise.",
        price: "¥750"
      },{
        name: "パニールマカニカレー",
        description: "Butter chicken might be tempting, but Panner Makani has its own story.",
        price: "¥980"
      }
    ],
    nan: [
      {
        name: "チーズナン",
        image: cheeseNan,
        description: "Circular nan with cheesey inside.",
        price: "¥420"
      },{
        name: "にんにくチーズナン",
        image: garlicCheeseNan,
        description: "Nan with cheese might be something. But, cheesey Nan with garlic is more than something.",
        price: "¥450"
      },{
        name: "アルーパラタ",
        image: aluParatha,
        description: "Paratha is one of the most eaten delicacy in India. This one in particular has a filling of mashed potato and Indian spices.",
        price: "¥400"
      }
    ],
    sides: [
      {
        name: "タンドリー",
        items: [
          {
            name: "チキンティッカ",
            image: chickenTikka,
            description: "Boneless chicken grilled in tandori with Indian spices.",
            price: "¥560"
          },{
            name: "タンドリーチキン",
            image: tandooriChicken,
            description: "Place where we are from, we need atleast a bit of fight to savour our victory. Likewise for meat, we need a bit of bone to enjoy the juicy texture.",
            price: "¥420(1p)"
          },{
            name: "タンドリーミックスグリル",
            image: tandooriMix,
            description: "True heaven for meat lover.",
            price: "¥1350"
          },{
            name: "タンドリーエビ",
            image: tandooriPrawn,
            description: "Since we tandoor everything, why not AB. It is tandoor everything gone right.",
            price: "¥700"
          }
        ]
      },
      {
        name: "サラダ",
        items: [
          {
            name: " パニールサラダ",
            image: pannerSalad,
            description: "Salad with indian inhouse cheese.",
            price: "¥500"
          },{
          name: "トマトサラダ",
          image: tomatoSalad,
          description: "Salad with Juicy tomato.",
          price: "¥500"
          }
        ]
      },
      {
        name: "アペタイザー",
        items: [
          {
            name: "モ:モ",
            image: moMo,
            description: "Nepalese style dumpling filled with juicy and spicy chicken and mutton.",
            price: "¥500"
          },{
            name: "オニオンリング",
            image: OnionRing,
            description: "Deep fried onion with special spiced batter.",
            price: "¥300"
          },{
            name: "砂肝炒め",
            image: sunagimoItame,
            description: "Gizzard fry that does wonder.",
            price: "¥440"
          }
        ]
      }
    ],
    sets: [
      {
        name: "ランチ",
        choices: "チキン、サグチキン、マトン、キーマ、卵、野菜、サグアル、ダル.",
        items: [
          {
            name: "A セット",
            description: "サラダ、ダルカレー、ナン/ライス、ソフトドリンク",
            price: "¥680"
          },{
            name: "B セット",
            description: "サラダ、チョイスカレー、ナン/ライス、ソフトドリンク",
            price: "¥780"
          },{
            name: "C セット",
            description: "チキンティッカ（2p）、チョイスカレー、ナン/ライス、ソフトドリンクのサラダ",
            price: "¥890"
          },{
            name: "D セット",
            description: "シークカバブとマライティッカ、サラダ、ダルカレー、ナン/ライス、ソフトドリンク",
            price: "¥1150"
          },{
            name: "Jahan Lunch セット",
            description: "マライティッカ（2p、サラダ、チョイスカレー、ナン/ライス、ソフトドリンク",
            price: "¥920"
          },{
            name: "2 curry セット",
            description: "チキンティッカとタンドリーチキンのサラダ、日替わりカレーとチョイスカレー、ナン/ライスとソフトドリンク",
            price: "¥980"
          }
        ]
      }, {
        name: "ディナー",
        choices: "チキン、サグチキン、マトン、キーマ、エッグ、ベジ、サグアル、ダル.",
        items: [
          {
            name: "ディナー セット",
            description: "サラダ、チョイスカレー、ナン/ライス、ソフトドリンク",
            price: "¥1150"
          },{
            name: "ヤサイ Thali",
            description: "サラダ、ダル、サグパンナーカレー、ナン、ライス、ソフトドリンク",
            price: "¥1250"
          },{
            name: "Chicken Thali",
            description: "サラダ、チョイスカレーとチキンカレー、ナンとライスとソフトドリンク",
            price: "¥1450"
          },{
            name: "Jahan セット",
            description: "タンドリチキンとシークカバブのサラダ、チョイスカレー、ナン/ライス、ソフトドリンク",
            price: "¥1600"
          },{
            name: "Jodi セット",
            description: "サラダと２（マライティッカ、シークカバブ、タンドリエビ）、2種類のカレー、ナン/ライス/チーズナン（1）、ソフトドリンク",
            price: "¥3500"
          },{
            name: "Beer セット",
            description: "タンドリーチキンとパパドとビール",
            price: "¥730"
          },{
            name: "Wine セット",
            description: "チキンティッカ、マライティッカ、シークカバブ、パパドとグラスワイン",
            price: "¥750"
          }
        ]
      }
    ],
    drinks: [
      {
        name: "ビール",
        items: [
          {
            name: "ネパールアイス（ネパール）",
            price: "¥520"
          },{
            name: "エベレスト（ネパール）",
            price: "¥550"
          },{
            name: "キングフィッシャー (インド)",
            price: "¥550"
          },{
            name: "アサヒ生ビールｓ（日本）",
            price: "¥399"
          }
        ]
      }
      ,{
        name: "ソフトドリンク",
        items: [
          {
            name: "ラッシー",
            price: "¥300"
          },{
            name: "マンゴーラッシー",
            price: "¥300"
          },{
            name: "冷たいチャイ",
            price: "¥300"
          },{
            name: "暖かいチャイ",
            price: "¥300"
          }
        ]
      },{
        name: "ハードドリンク（ロック/ウォーター/ソーダ",
        items: [
          {
            name: "8848（ウォッカ-ネパール）",
            price: "¥450"
          },{
            name: " ククリ ラム (ラム‐ネパール)",
            price: "¥450"
          },{
            name: "オールド ダルバール（ウイスキー-ネパール）",
            price: "¥450"
          },{
            name: "マクダウェル(ラム-インド)",
            price: "¥450"
          }
        ]
      }
    ]
  }
}