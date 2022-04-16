import cheeseNan from "./../assets/images/cheese_nan.jpeg"
import garlicCheeseNan from "./../assets/images/garlic_cheese_nan.jpeg"
import aluParatha from "./../assets/images/aluParatha.jpg"


export const jsonEn = {
  name: "Jahan Indo Nepal Restaurant",
  contact: {
    phone: "0489155644",
    address: "〒342-0041 Saitama, Yoshikawa, Ho, 1 Chome−２７−4",
    directionBtn: "Get direction",
    callBtn: "Make a Call"
  },
  footer: {
    name: "Reach out to",
    subList: [
      {
        name: "Connect",
        items: [
          {
            item: "Instagram",
            link: "www.instagram.com"
          },
          {
            item: "Twitter",
            link: "www.instagram.com"
          },
          {
            item: "Facebook",
            link: "www.instagram.com"
          }
        ]
      },{
        name: "Order",
        items: [
          {
            item: "Phone",
            link: "www.instagram.com"
          },
          {
            item: "Uber",
            link: "www.uber.com"
          },
          {
            item: "Demaekan",
            link: "www.demaekan.com"
          }
        ]
      },{
        name: "Order",
        items: [
          {
            item: "Phone",
            link: "www.instagram.com"
          },
          {
            item: "Hotpepper",
            link: "www.Hotpepper.com"
          },
          {
            item: "Yahoo",
            link: "www.Yahoo.com"
          }
        ]
      }
    ]
  },
  menu: {
    curry: [
      {
        name: "Chicken Curry",
        description: "Typical chicken curry.",
        price: "$650"
      },
      {
        name: "Butter Chicken",
        description: "When we say butter chicken, we mean good, old, everyone's favourite.",
        price: "$980"
      },
      {
        name: "Chicken Kurma",
        description: "Special curry with sweet flavour made with malai tikka and nuts.",
        price: "$800"
      },
      {
        name: "Mutton Curry",
        description: "Curry with Lamb meat",
        price: "$750"
      },
      {
        name: "Mutton Dopiyaja",
        description: "Mutton curry flavoured with garlic and Capsicum.",
        price: "$800"
      },
      {
        name: "Keema Curry",
        description: "Curry Made of minced chicken and mutton",
        price: "$750"
      },{
        name: "Keema Nas Curry",
        description: "Keema Curry with Nas topping",
        price: "$750"
      },{
        name: "Mixed vegetable Curry",
        description: "Combination of veggie brought together so you don't have to compromise.",
        price: "$750"
      },{
        name: "Panner Makani",
        description: "Butter chicken might be tempting, but Panner Makani has its own story.",
        price: "$980"
      }
    ],
    nan: [
      {
        name: "Cheese Nan",
        image: cheeseNan,
        description: "Circular nan with cheesey inside.",
        price: "$420"
      },{
        name: "Garlic Cheese Nan",
        image: garlicCheeseNan,
        description: "Nan with cheese might be something. But, cheesey Nan with garlic is more than something.",
        price: "$450"
      },{
        name: "Alu Paratha",
        image: aluParatha,
        description: "Paratha is one of the most eaten delicacy in India. This one in particular has a filling of mashed potato and Indian spices.",
        price: "$400"
      }
    ],
    sides: {
      tandoori: [
        {
          name: "Tandoori Prawn",
          description: "Since we tandoor everything, why not AB. It is tandoor everything gone right.",
          price: "$700"
        },{
          name: "Chicken Tikka",
          description: "Boneless chicken grilled in tandori with Indian spices.",
          price: "$560"
        },{
          name: "Tandori Chicken",
          description: "From where we from, we need atleast a bit of fight to savour our victory. Likewise for meat, we need a bit of bone to juicy texture.",
          price: "$420(1p)"
        },{
          name: "Tandoori Mix Gril",
          description: "True heaven for meat lover.",
          price: "$1350"
        }
      ],
      salad: [
        {
          name: "Panner Salad",
          description: "Salad with indian inhouse cheese.",
          price: "$500"
        },{
          name: "Tomato Salad",
          description: "Salad with Juicy tomato.",
          price: "$500"
        }
      ],
      appetizer: [
        {
          name: "Mo:Mo",
          description: "Nepalese style dumpling filled with juicy and spicy chicken and mutton.",
          price: "$500"
        },{
          name: "Onion Ring",
          description: "Deep fried onion with special spiced batter.",
          price: "$300"
        },{
          name: "Sunagimo Itame",
          description: "Gizzard fry that does wonder.",
          price: "$440"
        }
      ]
    },
    sets: [
      {
        name: "Lunch",
        choices: "Chicken, Sag Chicken, Mutton, Keema, Egg, Veg,Sag Alu, Dal.",
        items: [
          {
            name: "A Set",
            description: "Salad, dal curry, nan/rice and softdrink",
            price: "$680"
          },{
            name: "B Set",
            description: "Salad, a choice curry, nan/rice and softdrink",
            price: "$780"
          },{
            name: "C Set",
            description: "Salad with chicken Tikka(2p), choice curry, nan/rice and softdrink",
            price: "$890"
          },{
            name: "D Set",
            description: "Salad with a Seekh-Kabab and malai Tikka, dal curry, nan/rice and softdrink",
            price: "$1150"
          },{
            name: "Jahan Lunch Set",
            description: "Salad with malai Tikka(2p), choice curry, nan/rice and softdrink",
            price: "$920"
          },{
            name: "2 curry Set",
            description: "Salad with chicken tikka and Tandori Prawn, today's special curry and choice curry, nan/rice and softdrink",
            price: "$980"
          }
        ]
      }, {
        name: "Dinner",
        choices: "Chicken, Sag Chicken, Mutton, Keema, Egg, Veg,Sag Alu, Dal.",
        items: [
          {
            name: "Dinner Set",
            description: "Salad",
            price: "$1150"
          },{
            name: "Veg Thali",
            description: "Salad,dal and sag panner curry, nan ,and rice and softdrink",
            price: "$1250"
          },{
            name: "Chicken Thali",
            description: "Salad, choice curry and chicken curry, nan and rice and softdrink",
            price: "$1450"
          },{
            name: "Jahan Set",
            description: "Salad with tandori chicken and Seekh-Kabab, choice curry, nan/rice and softdrink",
            price: "$1600"
          },{
            name: "Jodi Set",
            description: "Salad with 2(malai-tikka, Seekh-Kabab and tandori Prawn),2 choice curry, nan/rice/cheese-nan(1) and softdrink",
            price: "$3500"
          },{
            name: "Beer Set",
            description: "Beer with Tandori Chicken and papad",
            price: "$730"
          },{
            name: "Wine Set",
            description: "Glass of wine with chicken tikka, malai-tikka and Seekh-Kabab and papad",
            price: "$750"
          }
        ]
      }
    ]
  },
  drinks: [
    {
      name: "Beer",
      list: [
        {
          name: "Beer",
          items: [
            {
              name: "Nepal Ice (Nepal)",
              price: "$520"
            },{
              name: "Everest (Nepal)",
              price: "$550"
            },{
              name: "KingFisher (India)",
              price: "$550"
            },{
              name: "Asahi Draft Beer (Japan)",
              price: "$399"
            }
          ]
        },{
          name: "Softdrink",
          items: [
            {
              name: "Lassi",
              price: "$300"
            },{
              name: "Mango Lassi",
              price: "$300"
            },{
              name: "Ice Chai",
              price: "$300"
            },{
              name: "Hot Chai",
              price: "$300"
            }
          ]
        },{
          name: "Hard drinks (Rock/ Water / Soda)",
          items: [
            {
              name: "8848 (Vodka - From Nepal)",
              price: "$450"
            },{
              name: "Khukhuri Rum (Rum - From Nepal)",
              price: "$450"
            },{
              name: "Old Durbar (Whiskey - From Nepal)",
              price: "$450"
            },{
              name: "Mc Dowells' (Rum - From India)",
              price: "$450"
            }
          ]
        }
      ]
    }
  ]
}