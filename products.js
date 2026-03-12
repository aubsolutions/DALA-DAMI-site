/*
  Реальные фото товаров сохраните в папку assets с именами ниже:
  - talkan-classic.jpg
  - talkan-hazelnut.jpg
  - talkan-almond.jpg
  - granola-nuts.jpg
  - granola-superfood.jpg
  - granola-chocolate.jpg
*/
const PRODUCTS = [
  {
    id: "talkan-classic-50",
    name: {
      ru: "Талкан Классический",
      en: "Talkan Classic",
      kz: "Классикалық талқан",
      zh: "经典塔尔坎"
    },
    shortDescription: {
      ru: "Традиционный казахский талкан из пшена и сухого молока.",
      en: "Traditional Kazakh talkan made from millet and skimmed milk powder.",
      kz: "Тары мен құрғақ сүттен жасалған дәстүрлі қазақ талқаны.",
      zh: "以小米和脱脂奶粉制成的传统哈萨克塔尔坎。"
    },
    composition: {
      ru: "Талкан из пшена, обезжиренное натуральное сухое молоко, сахар, лактоза.",
      en: "Millet talkan, natural skimmed milk powder, sugar, lactose.",
      kz: "Тары талқаны, майы алынған табиғи құрғақ сүт, қант, лактоза.",
      zh: "小米塔尔坎、天然脱脂奶粉、糖、乳糖。"
    },
    fullDescription: {
      ru: "Талкан классический готовится из обжаренного молотого пшена с добавлением сухого молока и небольшого количества сахара. Имеет приятный аромат и мягкий сладковатый вкус. Можно употреблять как самостоятельное блюдо с водой или добавлять в каши и молочные напитки. Продукт богат клетчаткой, кальцием, железом и витаминами группы B.",
      en: "Classic talkan is made from roasted ground millet with milk powder and a minimal amount of sugar. It has a pleasant aroma and a mildly sweet taste. Enjoy it with warm water as a standalone meal or add it to porridge and milk drinks. The product is rich in fiber, calcium, iron, and B-group vitamins.",
      kz: "Классикалық талқан қуырылған ұнтақталған тарыдан, құрғақ сүттен және аз мөлшердегі қанттан дайындалады. Жағымды хош иісі мен сәл тәтті дәмі бар. Оны жылы сумен жеке тағам ретінде ішуге немесе ботқа мен сүтті сусындарға қосуға болады. Өнім талшыққа, кальцийге, темірге және B тобы дәрумендеріне бай.",
      zh: "经典塔尔坎由烘焙研磨小米、奶粉和少量糖制成，口感微甜、香气自然。可加入温水直接食用，也可加入粥品和乳制饮品中。富含膳食纤维、钙、铁和维生素B群。"
    },
    volume: {
      ru: "50 г",
      en: "50 g",
      kz: "50 г",
      zh: "50 克"
    },
    price: null,
    image: "assets/talkan_classic.jpg",
    fallbackImage: "assets/talkan_classic.jpg"
  },
  {
    id: "talkan-hazelnut-50",
    name: {
      ru: "Талкан с лесным орехом",
      en: "Talkan with Hazelnut",
      kz: "Орман жаңғағы қосылған талқан",
      zh: "榛果塔尔坎"
    },
    shortDescription: {
      ru: "Талкан с добавлением молотого фундука для более насыщенного вкуса.",
      en: "Talkan enriched with ground hazelnut for a richer taste.",
      kz: "Дәмі қанық болу үшін ұнтақталған фундук қосылған талқан.",
      zh: "加入研磨榛果，风味更浓郁。"
    },
    composition: {
      ru: "Талкан из пшена, обезжиренное натуральное сухое молоко, фундук, сахар, лактоза.",
      en: "Millet talkan, natural skimmed milk powder, hazelnut, sugar, lactose.",
      kz: "Тары талқаны, майы алынған табиғи құрғақ сүт, фундук, қант, лактоза.",
      zh: "小米塔尔坎、天然脱脂奶粉、榛果、糖、乳糖。"
    },
    fullDescription: {
      ru: "Талкан с лесным орехом создан на базе традиционного рецепта с добавлением молотого фундука. Орех усиливает аромат, делает текстуру более насыщенной и повышает питательность продукта. Отличный вариант для полезного завтрака или перекуса в течение дня.",
      en: "This version of talkan is based on a traditional recipe with added ground hazelnut. Hazelnut enhances aroma, gives a richer texture, and increases nutritional value. A great choice for a wholesome breakfast or snack.",
      kz: "Орман жаңғағы қосылған талқан дәстүрлі рецепт негізінде жасалып, ұнтақталған фундукпен байытылған. Жаңғақ хош иісті күшейтіп, құрылымды қанық етеді және тағамдық құндылықты арттырады. Пайдалы таңғы ас пен күндізгі жеңіл тіске басарға өте қолайлы.",
      zh: "榛果塔尔坎以传统配方为基础，加入研磨榛果，让香气更浓、口感更饱满、营养价值更高。非常适合作为健康早餐或日常点心。"
    },
    volume: {
      ru: "50 г",
      en: "50 g",
      kz: "50 г",
      zh: "50 克"
    },
    price: null,
    image: "assets/talkan_funduk.jpg",
    fallbackImage: "assets/talkan_funduk.jpg"
  },
  {
    id: "talkan-almond-50",
    name: {
      ru: "Талкан с миндалем",
      en: "Talkan with Almond",
      kz: "Бадам қосылған талқан",
      zh: "杏仁塔尔坎"
    },
    shortDescription: {
      ru: "Талкан с молотым миндалем, мягким ореховым вкусом и ароматом.",
      en: "Talkan with ground almond and a delicate nutty flavor.",
      kz: "Ұнтақталған бадам қосылған, жұмсақ жаңғақ дәмді талқан.",
      zh: "加入研磨杏仁，口感细致且有坚果香。"
    },
    composition: {
      ru: "Талкан из пшена, обезжиренное натуральное сухое молоко, миндаль, сахар, лактоза.",
      en: "Millet talkan, natural skimmed milk powder, almond, sugar, lactose.",
      kz: "Тары талқаны, майы алынған табиғи құрғақ сүт, бадам, қант, лактоза.",
      zh: "小米塔尔坎、天然脱脂奶粉、杏仁、糖、乳糖。"
    },
    fullDescription: {
      ru: "Талкан с миндалем — улучшенная версия традиционного продукта. Добавление молотого миндаля делает вкус более многогранным и питательным. Подходит для употребления с водой, а также как добавка к кашам, супам и молочным коктейлям.",
      en: "Talkan with almond is an enhanced version of the traditional product. Ground almond adds depth of flavor and extra nutrients. Enjoy it with water or use it in porridge, soups, and milk shakes.",
      kz: "Бадам қосылған талқан — дәстүрлі өнімнің жетілдірілген нұсқасы. Ұнтақталған бадам дәмді байытып, қоректілігін арттырады. Оны сумен ішуге немесе ботқа, сорпа, сүтті коктейльдерге қосуға болады.",
      zh: "杏仁塔尔坎是传统产品的升级版本。加入研磨杏仁后，风味更有层次、营养更丰富。可搭配温水食用，也可加入粥品、汤品或奶昔。"
    },
    volume: {
      ru: "50 г",
      en: "50 g",
      kz: "50 г",
      zh: "50 克"
    },
    price: null,
    image: "assets/talkan_mindal.jpg",
    fallbackImage: "assets/talkan_mindal.jpg"
  },
  {
    id: "granola-nuts-300",
    name: {
      ru: "Гранола с орехами",
      en: "Nut Granola",
      kz: "Жаңғақты гранола",
      zh: "坚果格兰诺拉"
    },
    shortDescription: {
      ru: "Запеченные овсяные хлопья, мед, орехи, семечки и бельгийский шоколад.",
      en: "Baked oats with honey, nuts, seeds, raisins, and Belgian chocolate.",
      kz: "Пеште пісірілген сұлы, бал, жаңғақтар, дәндер және бельгиялық шоколад.",
      zh: "烘焙燕麦、蜂蜜、坚果、籽类和比利时巧克力。"
    },
    composition: {
      ru: "Запеченные овсяные хлопья, мед, миндаль, пшено, фундук, тыквенные семечки, Callebaut натуральный бельгийский шоколад, изюм.",
      en: "Baked oat flakes, honey, almond, millet, hazelnut, pumpkin seeds, natural Belgian Callebaut chocolate, raisins.",
      kz: "Пеште пісірілген сұлы үлпектері, бал, бадам, тары, фундук, асқабақ дәндері, табиғи бельгиялық Callebaut шоколады, мейіз.",
      zh: "烘焙燕麦片、蜂蜜、杏仁、小米、榛果、南瓜子、Callebaut天然比利时巧克力、葡萄干。"
    },
    fullDescription: {
      ru: "Гранола с орехами — хрустящий и питательный продукт для активного дня. Сочетание меда, орехов, изюма и бельгийского шоколада дает насыщенный вкус и полезный состав. Подходит как самостоятельный перекус или как добавка к йогурту и молоку.",
      en: "Nut granola is a crunchy and nourishing product for an active day. The blend of honey, nuts, raisins, and Belgian chocolate delivers rich flavor and balanced nutrition. Enjoy it as a snack or with yogurt and milk.",
      kz: "Жаңғақты гранола — белсенді күнге арналған қытырлақ әрі құнарлы өнім. Бал, жаңғақ, мейіз және бельгиялық шоколад үйлесімі бай дәм мен пайдалы құрам береді. Жеке тіске басар ретінде де, йогурт пен сүтке қосып та ішуге болады.",
      zh: "坚果格兰诺拉口感酥脆、营养均衡，适合充实的一天。蜂蜜、坚果、葡萄干和比利时巧克力带来层次丰富的风味。可直接食用，也可搭配酸奶或牛奶。"
    },
    volume: {
      ru: "300 г",
      en: "300 g",
      kz: "300 г",
      zh: "300 克"
    },
    price: null,
    image: "assets/granola_orehi.jpg",
    fallbackImage: "assets/granola_orehi.jpg"
  },
  {
    id: "granola-superfood-300",
    name: {
      ru: "Гранола Суперфуд",
      en: "Superfood Granola",
      kz: "Суперфуд гранола",
      zh: "超级食物格兰诺拉"
    },
    shortDescription: {
      ru: "Запеченные овсяные хлопья, мед, пшено, ягоды и семена.",
      en: "Baked oats with honey, millet, berries, and nutrient-rich seeds.",
      kz: "Бал, тары, жидек пен пайдалы дәндер қосылған пісірілген сұлы.",
      zh: "烘焙燕麦搭配蜂蜜、小米、莓果和营养种子。"
    },
    composition: {
      ru: "Запеченные овсяные хлопья, натуральный мед, пшено, кокосовая стружка, семена подсолнечника, фундук, семена тыквы, натуральные добавки суперфуд.",
      en: "Baked oat flakes, natural honey, millet, coconut flakes, sunflower seeds, hazelnut, pumpkin seeds, natural superfood additions.",
      kz: "Пеште пісірілген сұлы үлпектері, табиғи бал, тары, кокос жоңқасы, күнбағыс дәндері, фундук, асқабақ дәндері, табиғи суперфуд қоспалары.",
      zh: "烘焙燕麦片、天然蜂蜜、小米、椰丝、葵花籽、榛果、南瓜子和天然超级食物配料。"
    },
    fullDescription: {
      ru: "Гранола Суперфуд создана для сбалансированного рациона и активного образа жизни. В составе только натуральные ингредиенты, которые дают энергию, клетчатку и полезные жиры. Отлично сочетается с йогуртом, молоком или кефиром.",
      en: "Superfood granola is designed for a balanced diet and active lifestyle. It contains only natural ingredients that provide energy, fiber, and healthy fats. Perfect with yogurt, milk, or kefir.",
      kz: "Суперфуд гранола теңгерімді тамақтану мен белсенді өмір салтына арналған. Құрамында қуат, талшық және пайдалы май беретін табиғи ингредиенттер ғана бар. Йогурт, сүт немесе айранмен тамаша үйлеседі.",
      zh: "超级食物格兰诺拉适合均衡饮食与活力生活。采用天然食材，提供能量、膳食纤维和健康脂肪。可搭配酸奶、牛奶或开菲尔。"
    },
    volume: {
      ru: "300 г",
      en: "300 g",
      kz: "300 г",
      zh: "300 克"
    },
    price: null,
    image: "assets/granola_superfood.jpg",
    fallbackImage: "assets/granola_superfood.jpg"
  },
  {
    id: "granola-chocolate-300",
    name: {
      ru: "Гранола Шоколадная",
      en: "Chocolate Granola",
      kz: "Шоколадты гранола",
      zh: "巧克力格兰诺拉"
    },
    shortDescription: {
      ru: "Запеченные овсяные хлопья, какао, бельгийский шоколад, фундук и семечки.",
      en: "Baked oats with cocoa, Belgian chocolate, hazelnut, coconut, and seeds.",
      kz: "Какао, бельгиялық шоколад, фундук, кокос және дәндер қосылған пісірілген сұлы.",
      zh: "烘焙燕麦搭配可可、比利时巧克力、榛果、椰丝和种子。"
    },
    composition: {
      ru: "Запеченные овсяные хлопья, натуральный мед, пшено, какао-порошок, кокосовая стружка, семена подсолнечника, Callebaut натуральный бельгийский шоколад, фундук, семена тыквы.",
      en: "Baked oat flakes, natural honey, millet, cocoa powder, coconut flakes, sunflower seeds, natural Belgian Callebaut chocolate, hazelnut, pumpkin seeds.",
      kz: "Пеште пісірілген сұлы үлпектері, табиғи бал, тары, какао ұнтағы, кокос жоңқасы, күнбағыс дәндері, табиғи бельгиялық Callebaut шоколады, фундук, асқабақ дәндері.",
      zh: "烘焙燕麦片、天然蜂蜜、小米、可可粉、椰丝、葵花籽、Callebaut天然比利时巧克力、榛果、南瓜子。"
    },
    fullDescription: {
      ru: "Шоколадная гранола сочетает полезные ингредиенты и насыщенный вкус настоящего какао. Бельгийский шоколад Callebaut добавляет глубокий аромат, а орехи и семечки делают продукт питательным и сбалансированным. Подходит как хрустящий перекус и как дополнение к йогурту или молоку.",
      en: "Chocolate granola combines wholesome ingredients with the rich taste of real cocoa. Belgian Callebaut chocolate adds depth, while nuts and seeds make the product nourishing and balanced. Enjoy it as a crunchy snack or with yogurt and milk.",
      kz: "Шоколадты гранола пайдалы құрам мен нағыз какаоның қанық дәмін біріктіреді. Бельгиялық Callebaut шоколады ерекше хош иіс береді, ал жаңғақ пен дәндер өнімді құнарлы етеді. Қытырлақ тіске басар ретінде де, йогурт немесе сүтпен де ішуге болады.",
      zh: "巧克力格兰诺拉结合天然食材和浓郁可可风味。比利时 Callebaut 巧克力带来深层香气，坚果和种子让营养更均衡。可作为酥脆点心，或搭配酸奶与牛奶食用。"
    },
    volume: {
      ru: "300 г",
      en: "300 g",
      kz: "300 г",
      zh: "300 克"
    },
    price: null,
    image: "assets/granola_shokolad.jpg",
    fallbackImage: "assets/granola_shokolad.jpg"
  }
];
